import axios from "axios";
import auth from "./auth";

// create a base url
const API = axios.create({ baseURL: "http://localhost:4000/api" });

export const getService = async () => {
  const res = await API.get("/customers", { headers: auth() });
  return res.data;
};
