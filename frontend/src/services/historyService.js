import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const getHistory = async () => {
  return axios.get(`${API}/history`);
};