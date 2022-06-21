import { useState, useEffect } from 'react';
import {useRef} from 'react';
import { Link } from 'react-router-dom';

function UpdatePatientForm(props) {
    const [loadedPatient, setLoadedPatient] = useState([]);
    const addressInputRef = useRef();
    const phoneInputRef = useRef();
    
    const queryParams = new URLSearchParams(window.location.search);

    const firstName = queryParams.get('firstName');
    const lastName = queryParams.get('lastName')

    useEffect(() => {
        fetch('http://localhost:8081/patient?firstName='+firstName+'&lastName='+lastName)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoadedPatient(data);
            });
    }, []);

    function submitHandler(event) {
        event.preventDefault();
        const enteredAddress = addressInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        const patientData = {
            address: enteredAddress,
            phone: enteredPhone,
        };
        props.updatePatient(patientData);
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center'>Update Patient</h3>
                        <div className='card-body'>
                            <form onSubmit={submitHandler}>
                                <div className='form-group'>
                                <h4>{}</h4>
                                    <label htmlFor='fistname'> First Name: </label>
                                    <span>{loadedPatient.firstName}</span>
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
                                    <input type="text" id='address' className='form-control' ref={addressInputRef}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="phone"> Phone: </label>
                                    <input type="text" id='phone' className='form-control' ref={phoneInputRef}
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-success">Update Patient</button>
                                    <Link to='/patients'>
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

export default UpdatePatientForm;