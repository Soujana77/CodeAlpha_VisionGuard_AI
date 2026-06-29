import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const getReports = async () => {
  return axios.get(`${API}/reports`);
};

export const downloadPDF = async (id) => {
  return axios.get(`${API}/reports/${id}/pdf`, {
    responseType: "blob",
  });
};

export const downloadCSV = async (id) => {
  return axios.get(`${API}/reports/${id}/csv`, {
    responseType: "blob",
  });
};