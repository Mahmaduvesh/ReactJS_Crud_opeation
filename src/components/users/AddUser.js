import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  // destrcution
  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // onsubmit
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5 ">
        <h2 className="text-center mb-3">Add A Users</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group pb-3">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group pb-3">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter Your User Name"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group pb-3">
            <input
              type="email"
              className="form-control from-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group pb-3">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group pb-3">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block w-100"
            style={{ marginBottom: "10px" }}
          >
            Add
          </button>

          <button type="reset" className="btn btn-primary btn-block w-100">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
