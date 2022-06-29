import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListPatient() {
    const [loadedPatients, setLoadedPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/patients')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoadedPatients(data);
            });
    }, []);

    return (
        <div>
            <h2 className='text-center'>Patients List</h2>
            <div className='row row-button'>
                <Link to='/patient/add'>
                    <button className='btn btn-primary'>Add A New Patient</button>
                </Link>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birthdate</th>
                            <th>Sex</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadedPatients.map(
                            (patient, id) => {
                                return <tr key={id}>
                                <td>{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td>{patient.birthdate}</td>
                                <td>{patient.sex}</td>
                                <td>{patient.address}</td>
                                <td>{patient.phone}</td>
                                <td>
                                    <Link to={`/patient?firstName=${patient.firstName}&lastName=${patient.lastName}`}>
                                        <button className='btn btn-primary'>View</button>
                                    </Link>
                                    <Link to={`/patient/update?firstName=${patient.firstName}&lastName=${patient.lastName}`}>
                                        <button className='btn btn-success'>Update</button>
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

export default ListPatient;