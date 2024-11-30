import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Ribbon from "./headRibbon";
import Navbar from "./navBar";
import "./Sign-up/SignUpForm.css";
import leftImage from "../assets/images/SignUp.png";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate
  const [show, setShow] = useState(false);

  useEffect(() => {
    const localSignUp = localStorage.getItem("signUp");
    if (localSignUp) {
      navigate("/"); // Redirect to home page if already signed in
    } else {
      setShow(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    if (
      formData.email === localEmail &&
      formData.password === localPassword
    ) {
      localStorage.setItem("signUp", formData.email);
      navigate("/"); // Redirect to home page after successful login
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <>
      {show && (
        <>
          <Ribbon />
          <Navbar />
          <div className="signup-container container">
            <div className="signup-image">
              <img src={leftImage} alt="Sign Up" />
            </div>
            <div className="signup-form">
              <h1>Log in to Exclusive</h1>
              <p>Enter your details below.</p>
              <form onSubmit={handleSignIn} className="container">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary d-inline me-3">
                  Login
                </button>
                <button type="button" className="btn-google text-center d-inline">
                  Login with Google
                </button>
                <p>
                  Don't have an account? <Link to="/SignUp">Sign up</Link> or{" "}
                  <Link to="/ForgotPassword">Forgot Password?</Link>
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUpForm;
