import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container text-center py-5">
      <div className="py-5">
        <h1 className="display-1">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead mb-5">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 