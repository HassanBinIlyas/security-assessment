import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Navbar.css';
import { FaGithub } from 'react-icons/fa';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand border-none" to="/">
            MERN
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {/* <li className="nav-item active">
                <Link className="nav-link" to="#">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-login button-outline-none"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-register button-outline-none"
                  to="/register"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
