import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import UpdateOrAddNoteForm from '../components/UpdateOrAddNoteForm';

function UpdateOrAddNote() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const queryParams = new URLSearchParams(window.location.search);

    const firstName = queryParams.get('firstName');
    const lastName = queryParams.get('lastName')

    function UpdateOrAddNoteHandler(noteData) {
        fetch(
            'http://localhost:8082/patientHistory?firstName='+firstName+'&lastName='+lastName,
            {method: 'PUT',
            body: JSON.stringify(noteData),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            }
        )
        .then((res) => {
          if (res.ok) {
          console.log('success')
              navigate('/patientHistory?firstName='+firstName+'&lastName='+lastName , {replace: true});
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
            <UpdateOrAddNoteForm UpdateOrAddNote={UpdateOrAddNoteHandler} error={error} />
        </div>
    );
}

export default UpdateOrAddNote;