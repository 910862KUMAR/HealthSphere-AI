import api from "./api";

const URL = "/billing";

const billingService = {

  getAllBills: async () => {
    const response = await api.get(URL);
    return response.data;
  },

  getBillById: async (id) => {
    const response = await api.get(`${URL}/${id}`);
    return response.data;
  },

  createBill: async (bill) => {
    const response = await api.post(URL, bill);
    return response.data;
  },

  updateBill: async (id, bill) => {
    const response = await api.put(`${URL}/${id}`, bill);
    return response.data;
  },

  deleteBill: async (id) => {
    const response = await api.delete(`${URL}/${id}`);
    return response.data;
  },

};

export default billingService;