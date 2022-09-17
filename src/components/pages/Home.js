import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log("hey");
    loadusers();
  }, []);

  //
  const loadusers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    // console.log(result);
    setUsers(result.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="p-2">Home Page</h1>

        <table className="table table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email-ID</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary "
                    style={{ marginRight: "10px" }}
                    to="/ViewUser"
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-success "
                    style={{ marginRight: "10px" }}
                    to="/EditUser"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger "
                    style={{ marginRight: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
