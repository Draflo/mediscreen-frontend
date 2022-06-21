import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8081/patients";

class PatientService {

    getPatients() {
        return axios.get(PATIENT_API_BASE_URL);
    }

}

export default new PatientService()