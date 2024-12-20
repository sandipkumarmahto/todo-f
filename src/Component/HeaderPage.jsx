import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../Service/ApiConfig.js";
import { AuthContext } from "../context/AuthContext.js";

function HeaderPage() {
  const { user, isLogined, logout } =useContext(AuthContext)
  const navigate=useNavigate()

  if (!isLogined){
    navigate('/login')
  }

  const handleLogout=async() =>{
    try {
      await logout();
    } catch (error) {
      alert("something wrong")
      console.log(error)
    }
  }

  return (
    <>
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
                  {user?.fullname}
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
                    className="dropdown-item"
                    onClick={handleLogout}

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
