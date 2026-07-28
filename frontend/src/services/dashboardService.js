import api from "./api";

const URL = "/dashboard";

const dashboardService = {

  getDashboardSummary() {
    return api.get(`${URL}/summary`);
  }

};

export default dashboardService;