import FooterPage from "./FooterPage";
import '../asset/HomeStyle.css'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";


function HomePage() {

  const { isLogined } =useContext(AuthContext)
  const navigate=useNavigate()

  if (isLogined){
    navigate('/dashboard')
  }
  

  return (
    <>
      {/* Include Header */}
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-check-circle me-2" />
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-custom ms-2" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="hero main-content text-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-start">
              <h1 className="display-4 fw-bold mb-4">
                Organize Your Tasks,
                <br />
                Simplify Your Life
              </h1>
              <p className="lead mb-4">
                TaskMaster helps you manage your daily tasks, set priorities,
                and achieve your goals with ease.
              </p>
              <div className="d-flex gap-3 justify-content-lg-start justify-content-center">
                <Link to="/register" className="btn btn-custom btn-lg">
                  Get Started Free
                </Link>
                <Link
                  to="#features"
                  className="btn btn-outline-secondary btn-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="assets/images/hero-image.png"
                alt="TaskMaster App"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose TaskMaster?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="custom-card h-100 p-4">
                <i className="fas fa-tasks feature-icon mb-3" />
                <h4>Simple Task Management</h4>
                <p>
                  Create, organize, and track your tasks with an intuitive
                  interface.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="custom-card h-100 p-4">
                <i className="fas fa-calendar-alt feature-icon mb-3" />
                <h4>Calendar Integration</h4>
                <p>Sync your tasks with calendar for better time management.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="custom-card h-100 p-4">
                <i className="fas fa-chart-line feature-icon mb-3" />
                <h4>Progress Analytics</h4>
                <p>
                  Track your productivity with detailed analytics and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-5 bg-light">
        {/* Add pricing content */}
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-5">
        {/* Add contact form */}
      </section>
      <FooterPage/>
      {/* Include Footer */}
      {/* Include footer.html content here */}
      {/* Bootstrap JS */}
    </>
  );
}

export default HomePage;
