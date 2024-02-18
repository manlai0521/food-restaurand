import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./signupvalidation";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
    event.preventDefautlt();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === ""){
axios.post('http://localhost:8081/signup')
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-up</h2>
        <form action=""  onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Нэр </strong>
            </label>
            <input
              type="text"
              placeholder="Нэр оруулах"
              name="name"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Имэйл </strong>
            </label>
            <input
              type="email"
              placeholder="Имэйл оруулах"
              className="form-control rounded-0"
              name="email"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Нууц үг </strong>
            </label>
            <input
              type="password"
              placeholder="Нууц үг оруулах"
              className="form-control rounded-0" 
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Signup
          </button>
          <p>Your agree terms</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
