import axios from "axios";

// create a base url
const API = axios.create({ baseURL: "http://localhost:4000/api" });

// make a request to the server and send the formData. i was missing async and await
const signin = async (formData) => {
  await API.post("/admin/login", formData).then((res) => {
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
  });
};

// make a request to the server and send the formData to sign up
const signup = async (formData) => {
  await API.post("/admin/register", formData).then((res) => {
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => JSON.parse(localStorage.getItem("user"));

//  export all the functions
const indexAuth = {
  signin,
  signup,
  logout,
  getCurrentUser,
};

export default indexAuth;
