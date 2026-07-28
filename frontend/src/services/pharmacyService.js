import api from "./api";

const URL = "/pharmacy";

const pharmacyService = {

  getAllMedicines: async () => {
    const response = await api.get(URL);
    return response.data;
  },

  getMedicineById: async (id) => {
    const response = await api.get(`${URL}/${id}`);
    return response.data;
  },

  createMedicine: async (medicine) => {
    const response = await api.post(URL, medicine);
    return response.data;
  },

  updateMedicine: async (id, medicine) => {
    const response = await api.put(`${URL}/${id}`, medicine);
    return response.data;
  },

  deleteMedicine: async (id) => {
    const response = await api.delete(`${URL}/${id}`);
    return response.data;
  },

};

export default pharmacyService;