import api from "./api";

const URL = "/medical-records";

const medicalRecordService = {

  getAllMedicalRecords: async () => {
    const response = await api.get(URL);
    return response.data;
  },

  getMedicalRecordById: async (id) => {
    const response = await api.get(`${URL}/${id}`);
    return response.data;
  },

  createMedicalRecord: async (record) => {
    const response = await api.post(URL, record);
    return response.data;
  },

  updateMedicalRecord: async (id, record) => {
    const response = await api.put(`${URL}/${id}`, record);
    return response.data;
  },

  deleteMedicalRecord: async (id) => {
    const response = await api.delete(`${URL}/${id}`);
    return response.data;
  },

};

export default medicalRecordService;