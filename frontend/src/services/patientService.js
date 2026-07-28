import api from "./api";

const URL = "/api/patients";

const patientService = {

    getAllPatients() {
        return api.get(URL);
    },

    getPatientById(id) {
        return api.get(`${URL}/${id}`);
    },

    createPatient(patient) {
        return api.post(URL, patient);
    },

    updatePatient(id, patient) {
        return api.put(`${URL}/${id}`, patient);
    },

    deletePatient(id) {
        return api.delete(`${URL}/${id}`);
    }
};

export default patientService;