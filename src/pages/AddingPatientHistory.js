import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import CreatePatientHistory from "../components/CreatePatientHistoryForm";

function AddAPatientHistoryPage() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    function addPatientHistoryHandler(patientData) {
        fetch(
            'http://localhost:8082/patientHistory/add',
            {method: 'POST',
            body: JSON.stringify(patientData),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            }
        )
        .then((res) => {
          if (res.ok) {
          console.log('success')
              navigate('/patientHistoryList', {replace: true});
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
            <CreatePatientHistory onAddPatientHistory={addPatientHistoryHandler} error={error} />
        </div>
    );
}

export default AddAPatientHistoryPage;