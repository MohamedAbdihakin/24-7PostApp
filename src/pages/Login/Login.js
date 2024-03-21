import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import {
  fullInfo,
  setLoading,
  setError,
} from "../../app/features/User/userSclice";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  
  const dispatch = useDispatch();

  const handleInput = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading());

      const response = await axios.post(
        "https://onepost-jkw9.onrender.com/api/user/login",
        {
          email: email,
          password: password,
        }
      );
      const Userredux = response.data.existingUser;
     
      dispatch(fullInfo(Userredux));
      
      Navigate("/home");
    
    } catch (error) {
      dispatch(setError(error));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-8 mx-auto mt-5">
          <h5 className="card-title text-center pt-4">Login</h5>
          <div className="card-body">
            <form onSubmit={handleInput}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <div className="form-text">
                Don't Have An Account. Go <Link to="/register">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
