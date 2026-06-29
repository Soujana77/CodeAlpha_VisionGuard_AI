import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const getDashboard = async () => {
  const response = await axios.get(`${API}/dashboard`);
  return response.data.data;
};