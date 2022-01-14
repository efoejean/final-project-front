import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// create  a base url for the backend with axios and the token
const authAxios = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
  },
});

const Customers = () => {
  // use useState to set the current user
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();
  // use effect to get the data from the backend and send it the variable customers
  useEffect(() => {
    // use the base url and the token to get the data, use async to wait for the data to be returned
    (async () => {
      try {
        const res = await authAxios.get("/customers");
        setCustomers(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // map through the customers and return the data
  return (
    <ul>
      $
      {customers.map((customer) => (
        <li key={customer.id}>
          <span>${customer.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Customers;
