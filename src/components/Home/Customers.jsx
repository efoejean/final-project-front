import { useEffect, useState } from "react";
import { getService } from "../api/getService";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  // use effect to get the data from the backend and send it the variable customers
  useEffect(() => {
    getService().then(
      (res) => {
        setCustomers(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  // map through the customers and return the data
  return (
    <div>
      <h3>
        {customers.map((customer) => (
          <div key={customer.id}>{customer.name}</div>
        ))}
      </h3>
    </div>
  );
};

export default Customers;
