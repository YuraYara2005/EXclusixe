import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignUpForm.css';
import leftImage from '../../assets/images/SignUp.png';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const localSignUp = localStorage.getItem('signUp');
    if (localSignUp) {
      navigate('/'); // Redirect to home page if already signed in
    } else {
      setShow(true);
    }
  }, [navigate]);

  const handleClick = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name && email && password) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('signUp', email);
      alert('Account created successfully!');
      navigate('/'); // Redirect to home page
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      {show && (
        <div className="signup-container container">
          <div className="signup-image">
            <img src={leftImage} alt="Sign Up" />
          </div>
          <div className="signup-form">
            <h1>Create an Account</h1>
            <p>Enter your details below.</p>
            <form>
              <div className="form-group">
                <input ref={nameRef} type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input ref={emailRef} type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input ref={passwordRef} type="password" placeholder="Password" required />
              </div>
              <button
                type="button"
                onClick={handleClick}
                className="btn-primary">
                Sign Up
              </button>
              <p>
                Already have an account? <Link to="/Login">Login</Link> or{' '}
                <Link to="/ForgotPassword">Forgot Password?</Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
