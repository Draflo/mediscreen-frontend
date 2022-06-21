import CreatePatient from "../components/CreatePatientForm";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function AddAPatientPage() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    function addPatientHandler(patientData) {
        fetch(
            'http://localhost:8081/patient/add',
            {method: 'POST',
            body: JSON.stringify(patientData),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            }
        )
        .then((res) => {
          if (res.ok) {
          console.log('success')
              navigate('/patients', {replace: true});
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
            <CreatePatient onAddPatient={addPatientHandler} error={error} />
        </div>
    );
}

export default AddAPatientPage;