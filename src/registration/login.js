import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import loginImg from '../assets/images/login.png';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [mobileAlert, setMobileAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!/^\d{10}$/.test(mobileNumber)) {
      setMobileAlert(true);
      valid = false;
    } else {
      setMobileAlert(false);
    }

    if (password.trim() === '') {
      setPasswordAlert(true);
      valid = false;
    } else {
      setPasswordAlert(false);
    }

    if (valid) {
      console.log("Mobile:", mobileNumber);
      console.log("Password:", password);
      // send to API or handle logic here
    }
  };

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-success">Back home --&gt;</Link>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img className="img-fluid" src={loginImg} alt="Login" />
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                {mobileAlert && (
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
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password" className="form-label">Password</label>
                {passwordAlert && (
                  <h6 className="text-danger mt-1">
                    <i className="bi bi-exclamation-circle-fill"></i> Please fill the required Password
                  </h6>
                )}
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="mt-3">
              Create a New Account <Link to='/signup'>SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
