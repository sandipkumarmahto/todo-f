import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../Service/ApiConfig.js";

function HeaderPage() {
  const [user, setUser] = useState();
  // Simulate login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    // alert("in logout handle")
    apiClient
      .post("http://localhost:4000/user/logout")
      .then((res) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
      })
      .catch((err) => {
        alert("something problem in logout");
      });
  };

  // Simulate checking token in localStorage (e.g., for JWT-based login)
  useEffect(() => {
    console.log("in useeffect function");
    const token = localStorage.getItem("accessToken"); // Replace with your logic
    console.log(token);
    if (token) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  const getUserData = async () => {
    await apiClient
      .get("user/getUser")
      .then((res) => {
        console.log("in getting user data");
        setUser(res.data);
        console.log(user);
      })
      .catch((err) => {
        // alert("unable to fetch user")
        console.log(err);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      getUserData();
    }
    console.log("in 2nd useeffect");
    console.log(user?.fullname);
    console.log(user?.email);
    console.log(user?.ps);
  }, [isLoggedIn]);

  console.log(user);

  return (
    <>
      <h1> hello {user?.fullname}</h1>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg nav-custom fixed-top shadow-sm">
        <div className="container">
          <Link
            className="navbar-brand"
            to="#"
            style={{ color: "var(--accent-color)" }}
          >
            TaskMaster
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Analytics
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <button
                className="btn btn-link dropdown-toggle text-decoration-none"
                type="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe"
                  className="rounded-circle"
                  alt="avatar"
                  width={32}
                  height={32}
                />
                <span
                  className="ms-2"
                  style={{ color: "var(--text-charcoal)" }}
                >
                  {user?.email}
                </span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="fas fa-user me-2" />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="fas fa-cog me-2" />
                    Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="dropdown-item"
                    to="#"
                  >
                    <i className="fas fa-sign-out-alt me-2" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderPage;
