import { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import { City } from "../types/models";
import axios from "axios";

export default function BrowseCityWrapper() {

  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Try to fetch from API first
    axios
      .get("http://127.0.0.1:8000/api/cities", {
        headers: {
          "X-API-KEY":"rsODN3sjuoBxKxW1JbBalNjRhymLKg52",
        },
      })
      .then((response) => {
        // Make sure the data is properly structured with our expected fields
        const citiesData = response.data.data || response.data;
        const formattedCities = Array.isArray(citiesData) ? citiesData.map((city: any) => ({
          id: city.id,
          name: city.name,
          slug: city.slug,
          province: city.province || "",
          image: city.image || city.photo,
          outlets: city.outlets || city.OutletSpace || [],
          outletSpace_count: city.outletSpace_count,
          isRecommended: !!city.isRecommended,
          isPopular: !!city.isPopular
        })) : [];
        
        setCities(formattedCities);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        // Fall back to sample data if API fails
        setCities([
          {
            id: '1',
            name: 'Pasar Modern',
            slug: 'pasar-modern',
            province: 'Tangerang Selatan',
            image: 'https://storage.googleapis.com/a1aa/image/Wxb1pdusY3IEH9fJnMLw0JfAvukZJhfYDsy0bqvfDgHbg2gQB.jpg',
            outlets: [],
            outletSpace_count: 5,
            isRecommended: true
          },
          {
            id: '2',
            name: 'BSD Pasar Modern',
            slug: 'bsd-pasar-modern',
            province: 'Tangerang Selatan',
            image: 'https://storage.googleapis.com/a1aa/image/hVdsigbefFi8AEIrzOL19UflzSAHk31qXnRLBmDmjVPOQbQoA.jpg',
            outlets: [],
            outletSpace_count: 3,
            isPopular: true
          },
          {
            id: '3',
            name: 'Serpong Utara',
            slug: 'serpong-utara',
            province: 'Tangerang Selatan',
            image: 'https://storage.googleapis.com/a1aa/image/fKBI2pk636zJaCoV5U1uIGLpew1pMWuIQiZQlQC9lILIoNIUA.jpg',
            outlets: [],
            outletSpace_count: 2,
            isRecommended: true
          },
          {
            id: '4',
            name: 'ICE BSD',
            slug: 'ice-bsd',
            province: 'Tangerang Selatan',
            image: 'https://storage.googleapis.com/a1aa/image/NFrtD9yXfcS1HCpACRWKKfPbFMx3Dwf47kHtcmYfMskwg2gQB.jpg',
            outlets: [],
            outletSpace_count: 4,
            isPopular: true
          }
        ]);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error && cities.length === 0) {
    return <div>Error: Loading data failed {error}</div>;
  }
  
  return (
    <div className="container text-center my-5">
      <h2 className="h2-xl green-color">You Can Choose</h2>
      <h2 className="h2-xl green-color">Our Favorite Cities</h2>
      <a className="explore-btn mt-3 d-inline-block" href="#">
        lihat Semua Outlet
      </a>
      <div className="row mt-5">
        {cities.map(city => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}
