import {useRef} from 'react';
import { Link } from 'react-router-dom';

function CreatePatientHistory(props) {
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const noteInputRef = useRef();
    const CreationDateInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredNote = noteInputRef.current.value;
        const enteredCreationDate = CreationDateInputRef.current.value;

        const notesData = [{
            creationDate: enteredCreationDate,
            note: enteredNote
        }]
        const patientHistoryData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            notes: notesData,
        };
        props.onAddPatientHistory(patientHistoryData);
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center'>Add a Patient History </h3>
                        <div className='card-body'>
                            <form onSubmit={submitHandler}>
                                <div className='form-group'>
                                <h4>{}</h4>
                                    <label htmlFor='fistname'> First Name: </label>
                                    <input type="text"  required id='firstName' className='form-control' ref={firstNameInputRef} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="lastname"> Last Name: </label>
                                    <input type="text"  required id="lastName" className='form-control' ref={lastNameInputRef}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="notes"> Notes: </label>
                                    <input type="date"   id='creationDate' className='form-control' ref={CreationDateInputRef} />
                                    <input type="text"   id='note' className='form-control' ref={noteInputRef}
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-success">Add a Patient History</button>
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

export default CreatePatientHistory;