import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const startCamera = async () => {
  return axios.post(`${API}/webcam/start`);
};

export const stopCamera = async () => {
  return axios.post(`${API}/webcam/stop`);
};

export const getCameraStatus = async () => {
  return axios.get(`${API}/webcam/status`);
};