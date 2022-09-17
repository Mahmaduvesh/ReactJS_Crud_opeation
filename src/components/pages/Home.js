import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <h1>Home Page</h1>

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
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-success "
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger "
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
