import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DiabetesEvaluation() {
    const [loadedDiabetesRapport, setLoadedDiabetesRapport] = useState([]);

    const queryParams = new URLSearchParams(window.location.search);

    const firstName = queryParams.get('firstName');
    const lastName = queryParams.get('lastName');

    useEffect(() => {
        fetch('http://localhost:8080/assess?firstName='+firstName+'&lastName='+lastName)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoadedDiabetesRapport(data);
            });
    }, []);

    return (
        <div>
            
            <h2 className="text-center">Diabetes Evaluation</h2>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <div className="card-body">
                            <h2 className='text-center'> Diabetes rapport</h2>
                            <div className='form-group'>
                                <label htmlFor='fistname'> First Name: </label>
                                <span> {loadedDiabetesRapport.firstName}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="lastname"> Last Name: </label>
                                <span> {loadedDiabetesRapport.lastName}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="age"> Age: </label>
                                <span> {loadedDiabetesRapport.age}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="lastname"> Diabetes Assessment: </label>
                                <span> {loadedDiabetesRapport.diabetesAssessment}</span>
                            </div>
                            <div>
                                <Link to='form'>
                                    <button className='btn btn-primary'>Get another Rapport</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DiabetesEvaluation;