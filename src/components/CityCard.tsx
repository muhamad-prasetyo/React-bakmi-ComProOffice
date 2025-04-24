import React from 'react';
import { Link } from 'react-router-dom';
import { City } from '../types/models';

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  // Function to handle image URL - check if it's a full URL or needs the base URL
  const getImageUrl = (image: string) => {
    if (image && (image.startsWith('http://') || image.startsWith('https://'))) {
      return image;
    }
    return `http://127.0.0.1:8000/storage/${image}`;
  };

  const outletCount = city.outletSpace_count || city.outlets?.length || 0;

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="city-card position-relative">
        {city.isRecommended && (
          <span className="badge bg-danger position-absolute top-0 end-0 m-2 recommend-badge">Recommended</span>
        )}
        {city.isPopular && (
          <span className="badge btn-green position-absolute top-0 end-0 m-2 popular-badge">Popular</span>
        )}
        <Link to={`/city/${city.slug}`}>
          <img 
            alt={`View of ${city.name}`} 
            height="400"
            src={getImageUrl(city.image)}
            width="300" 
            onError={(e) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Image+Not+Found';
            }}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            {city.name}
          </h5>
          <p className="card-text">
            {outletCount} Outlet
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;