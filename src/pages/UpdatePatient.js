import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import UpdatePatientForm from '../components/UpdatePatientForm';

function UpdatePatient() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const queryParams = new URLSearchParams(window.location.search);

    const firstName = queryParams.get('firstName');
    const lastName = queryParams.get('lastName')

    function updatePatientHandler(patientData) {
        fetch(
            'http://localhost:8081/patient?firstName='+firstName+'&lastName='+lastName,
            {method: 'PUT',
            body: JSON.stringify(patientData),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            }
        )
        .then((res) => {
          if (res.ok) {
          console.log('success')
              navigate('/patient?firstName='+firstName+'&lastName='+lastName , {replace: true});
          }
          return res.text().then(text => { throw new Error(text) })
          })
        .catch((e) => {
            setError(e)
            console.log(e);
          })
    }

    return (
        <div>
            <UpdatePatientForm updatePatient={updatePatientHandler} error={error} />
        </div>
    );
}

export default UpdatePatient;