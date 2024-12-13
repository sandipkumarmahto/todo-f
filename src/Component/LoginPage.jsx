import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [credential, setCredential] = useState();

  function inputHandler(e) {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();
  function loginHandler(e) {
    e.preventDefault();
    // console.log(credential)
    
  }

  // const handleLogout = async () => {
  //   // Notify the backend to clear the refresh token cookie
  //   await axios
  //     .post("http://localhost:4000/user/logout")
  //     .then((res) => {
  //       // Clear accessToken from localStorage (if stored)
  //       localStorage.removeItem("accessToken");

  //       // Redirect to login page
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       console.error("Logout failed:", error.response?.data || error.message);
  //     });
  // };

  return (
    <>
      <div className="container min-vh-100 d-flex align-items-center">
        <div className="row w-100 justify-content-center">
          {/* Left Side - Login Form */}
          <div className="col-md-6 p-4">
            <div className="card custom-card shadow">
              <div className="card-body p-4">
                <h3 className="text-center mb-4">Welcome Back!</h3>
                <form onSubmit={loginHandler}>
                  <div className="mb-4">
                    <label className="form-label">Email address</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        <i
                          className="fas fa-envelope"
                          style={{ color: "var(--primary-dusty-pink)" }}
                        />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                        value={credential?.email}
                        onChange={inputHandler}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        <i
                          className="fas fa-lock"
                          style={{ color: "var(--primary-dusty-pink)" }}
                        />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        name="password"
                        value={credential?.password}
                        onChange={inputHandler}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="mb-4 d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="#"
                      style={{
                        color: "var(--accent-color)",
                        textDecoration: "none",
                      }}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-custom">
                      Login
                    </button>
                  </div>
                  <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      style={{ color: "var(--accent-color)" }}
                    >
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          {/* Right Side - Attractive Content */}
          <div className="col-md-6 p-4">
            <div className="right-content h-100 d-flex flex-column justify-content-center text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
                alt="Login illustration"
                className="img-fluid mb-4"
                style={{ maxWidth: 200, margin: "0 auto" }}
              />
              <h2 className="mb-4">Hello, Friend!</h2>
              <p className="mb-4">
                Welcome back to TaskMaster. We're excited to help you stay
                organized and productive!
              </p>
              <div className="row g-3 mt-2">
                <div className="col-6">
                  <div className="p-3 bg-white rounded-3 shadow-sm">
                    <i
                      className="fas fa-tasks mb-2"
                      style={{ color: "var(--accent-color)" }}
                    />
                    <p
                      className="mb-0"
                      style={{ color: "var(--text-charcoal)" }}
                    >
                      Track Tasks
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-white rounded-3 shadow-sm">
                    <i
                      className="fas fa-chart-line mb-2"
                      style={{ color: "var(--accent-color)" }}
                    />
                    <p
                      className="mb-0"
                      style={{ color: "var(--text-charcoal)" }}
                    >
                      Stay Productive
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-white rounded-3 shadow-sm">
                    <i
                      className="fas fa-bell mb-2"
                      style={{ color: "var(--accent-color)" }}
                    />
                    <p
                      className="mb-0"
                      style={{ color: "var(--text-charcoal)" }}
                    >
                      Reminders
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-white rounded-3 shadow-sm">
                    <i
                      className="fas fa-sync mb-2"
                      style={{ color: "var(--accent-color)" }}
                    />
                    <p
                      className="mb-0"
                      style={{ color: "var(--text-charcoal)" }}
                    >
                      Sync Data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
