import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function ListPatientHistory() {
    const [loadedPatientHistory, setLoadedPatientHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8082/allPatientHistory')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoadedPatientHistory(data);
            });
    }, []);

    return (
        <div>
            <h2 className='text-center'>Patient History List</h2>
            <div className='row row-button'>
                <Link to='/patientHistory/add'>
                    <button className='btn btn-primary'>Add A New Patient</button>
                </Link>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loadedPatientHistory.map(
                            (patientsHistory, patientId) => {
                                return <tr key={patientId}>
                                <td>{patientsHistory.firstName}</td>
                                <td>{patientsHistory.lastName}</td>
                                <td>
                                    <Link to={`/patientHistory?firstName=${patientsHistory.firstName}&lastName=${patientsHistory.lastName}`}>
                                        <button className='btn btn-primary'>View</button>
                                    </Link>
                                    <Link to={`/patientHistory/update?firstName=${patientsHistory.firstName}&lastName=${patientsHistory.lastName}`}>
                                        <button className='btn btn-success'>Update or Add Note</button>
                                    </Link>
                                </td>
                            </tr>
                            }
                        )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default ListPatientHistory;