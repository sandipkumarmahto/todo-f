import React, { useState } from "react";
import '../asset/RegisterStyles.css'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [user, setUser]=useState();

  function inputHandler(e){
    setUser({...user, [e.target.name]:e.target.value});
  }

  const navigate=useNavigate();
  function submitData(e){
    e.preventDefault();
    console.log(user)
    axios.post("http://localhost:4000/user/register",user)
    .then((res) => {
      console.log(user); 
      alert("successfully registered")
      navigate('/login')
    })
    .catch((err) =>{
      console.log(err);
      alert("something wend wrong pls try again")
    })
  }

  return (
    <>
      <div className="container min-vh-100 d-flex align-items-center">
        <div className="row w-100 justify-content-center">
          {/* Left Side - Registration Form */}
          <div className="col-md-6 p-4">
            <div className="card custom-card shadow">
              <div className="card-body p-4">
                <h3 className="text-center mb-4">Create Your Account</h3>
                <form onSubmit={submitData}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      name="fullname"
                      value={user?.fullname}
                      onChange={inputHandler}
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      value={user?.email}
                      onChange={inputHandler}
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mobile no.</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter your mobile no"
                      name="mobile"
                      value={user?.mobile}
                      onChange={inputHandler}
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Create a password"
                      name="password"
                      value={user?.password}
                      onChange={inputHandler}
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm your password"
                      required=""
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-custom">
                      Create Account
                    </button>
                  </div>
                  <p className="text-center mt-3">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      style={{ color: "var(--accent-color)" }}
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          {/* Right Side - Attractive Content */}
          <div className="col-md-6 p-4">
            <div className="right-content h-100 d-flex flex-column justify-content-center">
              <h2 className="mb-4">Welcome to TaskMaster</h2>
              <div className="feature-item mb-4">
                <i className="fas fa-check-circle feature-icon mb-2" />
                <h4>Stay Organized</h4>
                <p>Keep track of all your tasks in one place</p>
              </div>
              <div className="feature-item mb-4">
                <i className="fas fa-bolt feature-icon mb-2" />
                <h4>Boost Productivity</h4>
                <p>Accomplish more with our intuitive task management</p>
              </div>
              <div className="feature-item">
                <i className="fas fa-lock feature-icon mb-2" />
                <h4>Secure &amp; Private</h4>
                <p>Your data is protected with industry-standard security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
