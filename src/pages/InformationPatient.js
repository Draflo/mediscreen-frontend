import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function InformationPatient() {
    const [loadedPatient, setLoadedPatient] = useState([]);

    const queryParams = new URLSearchParams(window.location.search);

    const firstName = queryParams.get('firstName');
    const lastName = queryParams.get('lastName')

    useEffect(() => {
        fetch('http://localhost:8081/patient?firstName=' + firstName + '&lastName=' + lastName)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoadedPatient(data);
            });
    }, []);

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center'>Patient's Informations</h3>
                        <div className='card-body'>
                            <div className='form-group'>
                                <h4>{ }</h4>
                                <label htmlFor='fistname'> First Name: </label>
                                {loadedPatient.firstName}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="lastname"> Last Name: </label>
                                {loadedPatient.lastName}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="birthdate"> Birthdate: </label>
                                {loadedPatient.birthdate}
                            </div>
                            <div className='form-group'>
                                <label> Sex: </label>
                                {loadedPatient.sex}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="address"> Address: </label>
                                {loadedPatient.address}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="phone"> Phone: </label>
                                {loadedPatient.phone}
                            </div>
                            <div>
                                <Link to={`/patient/update?firstName=${loadedPatient.firstName}&lastName=${loadedPatient.lastName}`}>
                                    <button className='btn btn-success'>Update Patient</button>
                                </Link>
                                <Link to='/patients'>
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

export default InformationPatient;