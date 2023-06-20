import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import alertContext from "../context/alert/alertContext";

export default function Login() {
  const context = useContext(alertContext);
  const { showAlert } = context;
  let navigate = useNavigate();
  const [Credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Credentials.email,
        password: Credentials.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      //redirect and save authtoken
      localStorage.setItem("token", json.authToken);
      navigate("/");
      showAlert("Logged in successfully", "success");
    } else {
      showAlert(json.error, "danger");
    }
  };
  return (
    <div className="container" style={{ marginTop: "125px" }}>
      <h2 className="text-center mb-4">Login with your iNotebook account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={Credentials.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
            value={Credentials.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
}
