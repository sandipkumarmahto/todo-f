import React from "react";
import { Link } from "react-router-dom";

function FooterPage() {
  return (
    <>
      <footer className="footer mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="mb-3">TaskMaster</h5>
              <p className="text-muted">
                Organize your life with our simple and intuitive todo
                application.
              </p>
              <div className="social-links">
                <Link to="#" className="me-3">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#" className="me-3">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="#" className="me-3">
                  <i className="fab fa-instagram" />
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h6 className="mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="about.html">About Us</Link>
                </li>
                <li className="mb-2">
                  <a href="features.html">Features</a>
                </li>
                <li className="mb-2">
                  <Link href="pricing.html">Pricing</Link>
                </li>
                <li className="mb-2">
                  <Link to="contact.html">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h6 className="mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="help.html">Help Center</Link>
                </li>
                <li className="mb-2">
                  <Link to="faq.html">FAQs</Link>
                </li>
                <li className="mb-2">
                  <Link to="privacy.html">Privacy Policy</Link>
                </li>
                <li className="mb-2">
                  <Link to="terms.html">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h6 className="mb-3">Newsletter</h6>
              <p className="text-muted mb-3">
                Subscribe to our newsletter for updates and tips.
              </p>
              <form className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button className="btn btn-custom" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">© 2024 TaskMaster. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <img
                src="payment-methods.png"
                alt="Payment Methods"
                height={30}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterPage;
