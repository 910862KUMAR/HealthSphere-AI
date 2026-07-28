import api from "./api";

const aiService = {
  sendMessage: async (data) => {
    const response = await api.post("/api/ai/chat", data);
    return response.data;
  },

  getChatHistory: async () => {
    const response = await api.get("/api/ai/history");
    return response.data;
  },

  deleteChat: async (id) => {
    await api.delete(`/api/ai/history/${id}`);
  },

  deleteAllChats: async () => {
    await api.delete("/api/ai/history");
  },
};

export default aiService;