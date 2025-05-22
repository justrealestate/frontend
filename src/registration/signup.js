import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import signUpImg from '../assets/images/login.png'; 
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alerts, setAlerts] = useState({
    usernameAlert: false,
    mobileNumberAlert: false,
    passwordAlert: false,
    confirmPasswordAlert: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let updatedAlerts = { ...alerts };

    // Reset alerts
    updatedAlerts.usernameAlert = false;
    updatedAlerts.mobileNumberAlert = false;
    updatedAlerts.passwordAlert = false;
    updatedAlerts.confirmPasswordAlert = false;

    // Validation
    if (username.trim() === '') {
      updatedAlerts.usernameAlert = true;
      valid = false;
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      updatedAlerts.mobileNumberAlert = true;
      valid = false;
    }

    if (password.trim() === '') {
      updatedAlerts.passwordAlert = true;
      valid = false;
    }

    if (password !== confirmPassword) {
      updatedAlerts.confirmPasswordAlert = true;
      valid = false;
    }

    setAlerts(updatedAlerts);

    if (valid) {
      console.log('Username:', username);
      console.log('Mobile Number:', mobileNumber);
      console.log('Password:', password);
      // Add your logic to handle form submission (API call, etc.)
    }
  };

  return (
    <div className="container py-5">
      <Link to='/' className="btn btn-success">Back home --&gt;</Link>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img className="img-fluid" src={signUpImg} alt="SignUp" />
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="mb-4">SignUp</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Username</label>
                {alerts.usernameAlert && (
                  <h6 className="text-danger mt-1">
                    <i className="bi bi-exclamation-circle-fill"></i> Please fill the required Username
                  </h6>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="form-control"
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <label htmlFor="mobileNumber">Mobile Number</label>
                {alerts.mobileNumberAlert && (
                  <h6 className="text-danger mt-1">
                    <i className="bi bi-exclamation-circle-fill"></i> Please fill the required Mobile Number
                  </h6>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                {alerts.passwordAlert && (
                  <h6 className="text-danger mt-1">
                    <i className="bi bi-exclamation-circle-fill"></i> Please fill the required Password
                  </h6>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="confirm_password">Confirm Password</label>
                {alerts.confirmPasswordAlert && (
                  <h6 className="text-danger mt-1">
                    <i className="bi bi-exclamation-circle-fill"></i> Passwords do not match
                  </h6>
                )}
              </div>
              <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
            <p className="mt-3">
              Already Have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
