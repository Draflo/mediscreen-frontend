import { useState, useEffect } from 'react';
import {useRef} from 'react';
import { Link } from 'react-router-dom';

function UpdateOrAddNoteForm(props) {
    const [loadedPatientHistory, setLoadedPatientHistory] = useState([]);
    const [loadedNotes, setLoadedNote] = useState([]);
    const noteInputRef = useRef();
    const CreationDateInputRef = useRef();

    const queryParams = new URLSearchParams(window.location.search);

    const firstName = queryParams.get('firstName');
    const lastName = queryParams.get('lastName');

    useEffect(() => {
        fetch('http://localhost:8082/patientHistory?firstName=' + firstName + '&lastName=' + lastName)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoadedPatientHistory(data);
                setLoadedNote(data.notes);
            });
    }, []);

    function submitHandler(event) {
        event.preventDefault();
        const enteredNote = noteInputRef.current.value;
        const enteredCreationDate = CreationDateInputRef.current.value;

        const notesData = {
            creationDate: enteredCreationDate,
            note: enteredNote
        }

        props.UpdateOrAddNote(notesData);
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center'>Update or Add a Note</h3>
                        <div className='card-body'>
                            <form onSubmit={submitHandler}>
                                <div className='form-group'>
                                    <label htmlFor='fistname'> First Name : </label>
                                    <span>   {loadedPatientHistory.firstName}</span>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="lastname"> Last Name : </label>
                                    <span>   {loadedPatientHistory.lastName}</span>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="notes"> Notes : </label>
                                    {loadedNotes.sort(
                                        (a, b) => a.creationDate > b.creationDate ? 1 : -1).map(
                                            (notes, creationDate) => {
                                                return <ol key={creationDate}>
                                                    <ul>
                                                        <li>{notes.creationDate}</li>
                                                        <li>{notes.note}</li>
                                                    </ul>
                                                </ol>
                                            }
                                        )}
                                </div>
                                <div> If you want to update a note, choose the date of the existing note.
                                    Otherwise a new note will be added ! 
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="birthdate"> Notes: </label>
                                    <input type="date" required id='creationDate' className='form-control' ref={CreationDateInputRef} />
                                    <input type="text" required id='note' className='form-control' ref={noteInputRef}
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-success">Update Patient</button>
                                    <Link to='/patientHistoryList'>
                                        <button className="btn btn-danger">Cancel</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateOrAddNoteForm;