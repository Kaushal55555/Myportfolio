import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const NotFound = () => (
  <div className="not-found">
    <div className="not-found-content">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-text">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        <FiHome className="icon" />
        <span>Back to Home</span>
      </Link>
    </div>
  </div>
);

export default NotFound;