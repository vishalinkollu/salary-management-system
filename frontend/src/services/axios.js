import axios from "axios";

const api = axios.create({
    baseURL: "https://salary-management-backend-ujai.onrender.com/api/v1"
});

export default api;