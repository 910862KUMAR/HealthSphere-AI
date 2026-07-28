import api from "./api";

const URL = "/laboratories";

const laboratoryService = {

  getAllLaboratoryTests: async () => {
    const response = await api.get(URL);
    return response.data;
  },

  getLaboratoryTestById: async (id) => {
    const response = await api.get(`${URL}/${id}`);
    return response.data;
  },

  createLaboratoryTest: async (test) => {
    const response = await api.post(URL, test);
    return response.data;
  },

  updateLaboratoryTest: async (id, test) => {
    const response = await api.put(`${URL}/${id}`, test);
    return response.data;
  },

  deleteLaboratoryTest: async (id) => {
    const response = await api.delete(`${URL}/${id}`);
    return response.data;
  },

};

export default laboratoryService;