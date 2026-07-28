import api from "./api";

const URL = "api/doctors";

const doctorService = {
  getAllDoctors() {
    return api.get(URL);
  },

  getDoctorById(id) {
    return api.get(`${URL}/${id}`);
  },

  createDoctor(doctor) {
    return api.post(URL, doctor);
  },

  updateDoctor(id, doctor) {
    return api.put(`${URL}/${id}`, doctor);
  },

  deleteDoctor(id) {
    return api.delete(`${URL}/${id}`);
  }
};

export default doctorService;