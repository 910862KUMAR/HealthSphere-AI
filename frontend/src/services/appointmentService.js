import api from "./api";

const URL = "api/appointments";

const appointmentService = {
    getAllAppointments() {
        return api.get(URL);
    },

    getAppointmentById(id) {
        return api.get(`${URL}/${id}`);
    },

    createAppointment(appointment) {
        return api.post(URL, appointment);
    },

    updateAppointment(id, appointment) {
        return api.put(`${URL}/${id}`, appointment);
    },

    deleteAppointment(id) {
        return api.delete(`${URL}/${id}`);
    }
};

export default appointmentService;