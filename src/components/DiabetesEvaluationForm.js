import { useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function DiabetesEvaluationForm() {
    const navigate = useNavigate();
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const idInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;

        console.log("sucess")
        console.log(enteredFirstName, enteredLastName)


        navigate('/diabetesEvaluation?firstName=' + enteredFirstName + '&lastName=' + enteredLastName)

    }

    function submitHandlerId(event) {
        event.preventDefault();

        const enteredId = idInputRef.current.value;

        navigate('/diabetesEvaluation/id?id=' + enteredId)

    }

    return (
        <div>
            <h2 className="text-center">Diabetes Evaluation</h2>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <div className="card-body">
                            <h4 className='text-center'>Enter a first name and last name to get a diabetes rapport on this patient</h4>
                            <form onSubmit={submitHandler}>
                                <div className='form-group'>
                                    <label htmlFor='fistname'> First Name: </label>
                                    <input type="text" required id='firstName' className='form-control' ref={firstNameInputRef} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="lastname"> Last Name: </label>
                                    <input type="text" required id="lastName" className='form-control' ref={lastNameInputRef} />
                                </div>
                                <div>
                                    <button className="btn btn-success">Get a Diabetes Rapport</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <div className="card-body">
                            <h4 className='text-center'>Enter an Id to get a diabetes rapport on this patient</h4>
                            <form onSubmit={submitHandlerId}>
                                <div className='form-group'>
                                    <label htmlFor='id'> Id: </label>
                                    <input type="number" required id='id' className='form-control' ref={idInputRef} />
                                </div>
                                <div>
                                    <button className="btn btn-success">Get a Diabetes Rapport</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DiabetesEvaluationForm;