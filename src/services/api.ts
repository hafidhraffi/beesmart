import axios from "axios";

const api = axios.create({
  baseURL: "https://beesmart-sm.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
