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
                                <label htmlFor='fistname'> First Name: </label>
                                {loadedPatientHistory.firstName}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="lastname"> Last Name: </label>
                                {loadedPatientHistory.lastName}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="notes"> Notes: </label>
                                {loadedNotes.map(
                                    (notes, creationDate) => {
                                        return <ol key={creationDate}>
                                            <ul>
                                            <li>{notes.note}</li>
                                            <li>{notes.creationDate}</li>
                                            </ul>
                                        </ol>
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationPatientHistory;