import api from "./api";

const AUTH = "/auth";

const authService = {

  register: async (data) => {
    const response = await api.post(`${AUTH}/register`, data);
    return response.data;
  },

  login: async (data) => {
    const response = await api.post(`${AUTH}/login`, data);

    localStorage.setItem(
      "accessToken",
      response.data.accessToken
    );

    localStorage.setItem(
      "refreshToken",
      response.data.refreshToken
    );

    return response.data;
  },

  refreshToken: async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await api.post(
      `${AUTH}/refresh`,
      {
        refreshToken,
      }
    );

    localStorage.setItem(
      "accessToken",
      response.data.accessToken
    );

    return response.data;
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },

};

export default authService;