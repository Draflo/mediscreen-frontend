import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function InformationPatientHistory() {
    const [loadedPatientHistory, setLoadedPatientHistory] = useState([]);
    const [loadedNotes, setLoadedNote] = useState([]);

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
    console.log(loadedPatientHistory.notes);


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center'>Patient's Informations</h3>
                        <div className='card-body'>
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
                            <div>
                                <Link to={`/patientHistory/update?firstName=${loadedPatientHistory.firstName}&lastName=${loadedPatientHistory.lastName}`}>
                                    <button className='btn btn-success'>Update or Add Note</button>
                                </Link>
                                <Link to='/patientHistoryList'>
                                    <button className="btn btn-primary">Return</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationPatientHistory;