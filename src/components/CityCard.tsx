export default function CityCard() {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
    <div className="city-card position-relative">
      <span className="badge bg-danger position-absolute top-0 end-0 m-2 recommend-badge">
        Recommended
      </span>
      <a href="/city-details/jakarta-pusat">
        <img
          alt="Modern building in Jakarta Pusat"
          height={400}
          src="https://storage.googleapis.com/a1aa/image/Wxb1pdusY3IEH9fJnMLw0JfAvukZJhfYDsy0bqvfDgHbg2gQB.jpg"
          width={300}
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">Pasar Modern</h5>
        <p className="card-text">Tangerang Selatan</p>
      </div>
    </div>
  </div>
  );
}