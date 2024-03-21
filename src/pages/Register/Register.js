import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleInput = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://onepost-jkw9.onrender.com/api/user/Register", {
        fullName: fullName,
        email: email,
        password: password
      });
      console.log(response);
    Navigate("/login");

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-8 mx-auto mt-5"> 
          <h5 className="card-title text-center pt-4">Registration</h5>
          <div className="card-body">
            <form  onSubmit={handleInput}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <div className="form-text">
                Have An Account Go <Link to="/login">Login</Link> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
