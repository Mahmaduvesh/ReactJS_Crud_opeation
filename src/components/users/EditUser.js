import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  // alert(id);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const loaduser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    // console.log(result);
    setUser(result.data);
  };

  // destrcution
  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const useEffect =
  //   (() => {
  //     loaduser();
  //   },
  //   []);

  useEffect(() => {
    loaduser();
  }, []);

  // onsubmit
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5 ">
        <h2 className="text-center mb-3">Edit A User</h2>
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
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
