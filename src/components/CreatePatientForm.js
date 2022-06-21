import {useRef} from 'react';
import { Link } from 'react-router-dom';

function CreatePatient(props) {
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const birthdatInputRef = useRef();
    const sexInputRef = useRef();
    const addressInputRef = useRef();
    const phoneInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredBirthdate = birthdatInputRef.current.value;
        const enteredSex = sexInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        const patientData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            birthdate: enteredBirthdate,
            sex: enteredSex,
            address: enteredAddress,
            phone: enteredPhone,
        };
        props.onAddPatient(patientData);
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center'>Add a patient</h3>
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
                                    <label htmlFor="birthdate"> Birthdate: </label>
                                    <input type="date"  required id='birthdate' className='form-control' ref={birthdatInputRef}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label> Sex: </label>
                                    <select defaultValue="" className='form-control' ref={sexInputRef}>
                                        <option hidden value="" disabled>Select your sex</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
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
                                    <button className="btn btn-success">Add a Patient</button>
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

export default CreatePatient;