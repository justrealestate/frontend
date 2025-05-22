// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Column 1: Brand Info */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">MyBrand</h5>
            <p>Building modern web experiences with React and Bootstrap.</p>
          </div>

          {/* Column 2: Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Contact</h5>
            <p>Email: support@mybrand.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>

        <hr className="border-top border-secondary my-3" />

        <p className="text-center mb-0">&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
