import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from '../types/models';

interface OutletCardProps {
  outlet: Outlet;
}

const OutletCard: React.FC<OutletCardProps> = ({ outlet }) => {
  return (
    <div className="outlet-card position-relative">
      {outlet.isRecommended && (
        <span className="badge bg-danger position-absolute top-0 end-0 m-2 recommend-badge">Recommended</span>
      )}
      {outlet.isPopular && (
        <span className="badge btn-green position-absolute top-0 end-0 m-2 popular-badge">Popular</span>
      )}
      <Link to={`/outlet/${outlet.slug}`}>
        <img 
          alt={`Outlet in ${outlet.name}`} 
          height="300"
          src={outlet.image}
          width="100%" 
          className="outlet-image"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{outlet.name}</h5>
        <p className="card-text">{outlet.address}</p>
        <p className="card-text text-muted">
          <small>{outlet.openingHours}</small>
        </p>
      </div>
    </div>
  );
};

export default OutletCard;
