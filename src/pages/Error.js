import React from 'react';
import '../styles/Error.css';

const Error = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>It looks like the page you're looking for doesn't exist.</p>
      <a href="/" className="btn">Go Back Home</a>
    </div>
  );
};

export default Error;