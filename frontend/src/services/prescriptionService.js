import api from "./api";

const URL = "/prescriptions";

const prescriptionService = {

  getAllPrescriptions: async () => {
    const response = await api.get(URL);
    return response.data;
  },

  getPrescriptionById: async (id) => {
    const response = await api.get(`${URL}/${id}`);
    return response.data;
  },

  createPrescription: async (prescription) => {
    const response = await api.post(URL, prescription);
    return response.data;
  },

  updatePrescription: async (id, prescription) => {
    const response = await api.put(`${URL}/${id}`, prescription);
    return response.data;
  },

  deletePrescription: async (id) => {
    const response = await api.delete(`${URL}/${id}`);
    return response.data;
  },

};

export default prescriptionService;