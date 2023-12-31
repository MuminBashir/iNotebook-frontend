import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import alertContext from "../context/alert/alertContext";

export default function Navbar() {
  const context = useContext(alertContext);
  const { showAlert } = context;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    showAlert("Logged out successfully", "success");
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-primary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          iNotebook
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex" role="search">
              <Link className="btn btn-light mx-1" to="/signup" role="button">
                Sign Up
              </Link>
              <Link className="btn btn-light mx-1" to="/login" role="button">
                Log In
              </Link>
            </form>
          ) : (
            <button className="btn btn-light mx-1" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
