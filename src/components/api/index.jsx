import axios from "axios";

// create a base url
const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const signin = (formData) => API.post("/admin/login", formData);
export const signup = (formData) => API.post("/admin/register", formData);
