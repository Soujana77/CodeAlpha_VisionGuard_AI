import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const getAnalytics = async () => {
  return axios.get(`${API}/analytics`);
};

export const exportCSV = async () => {
  return axios.get(`${API}/reports/csv`, {
    responseType: "blob",
  });
};

export const exportPDF = async () => {
  return axios.get(`${API}/reports/pdf`, {
    responseType: "blob",
  });
};