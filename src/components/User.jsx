//http methods
//1.get() method :is used to get the data from the back end //reading tha data from the back end
//2.post() it is used to send the data from the front end to back end// to create the data
//3.put() it is used update the exisiting data //repalcing the entier thing /update/
//4.patch() will update only the changed value // replacing particular change item /update/
//5.delete() is used to delete an item //deleting
//axios is same as fetch it gives addens

import React, { useEffect, useState } from "react";
import axios from "axios";

function AddProduct() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchusers();
  }, []);

  const fetchusers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    setUser(res.data);
  };
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Web Site</th>
        </tr>
        {user.map((val) => {
          return (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
              <td>{val.website}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AddProduct;
