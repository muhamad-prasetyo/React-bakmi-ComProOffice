import CityCard from "../components/CityCard";

export default function BrowseCityWrapper() {
  return (
    <div className="container text-center my-5">
    <h2 className="h2-xl green-color">You Can Choose</h2>
    <h2 className="h2-xl green-color">Our Favorite Cities</h2>
    <a className="explore-btn mt-3 d-inline-block" href="#">
      lihat Semua Outlet
    </a>
    <div className="row mt-5">
      
     <CityCard></CityCard>
     
      
    </div>
  </div>
  );
}
