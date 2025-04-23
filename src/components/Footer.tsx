import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer-4" className="footer division">
      <div
        className="footer-top"
        style={{ backgroundImage: 'url("/images/footer-illustration.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="footer-info mb-40">
                {/* Footer Logo */}
                <div className="footer-logo">
                  <img src="/images/logo.png" alt="footer-logo" />
                </div>
                {/* Text */}
                <p>
                  Bakmi Bangka Asli 17 || Restauran Food &amp; Delivery Food
                </p>
              </div>
            </div>
            {/* FOOTER CONTACTS */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-contacts mb-40">
                {/* Title */}
                <h5 className="h5-sm">Order Now</h5>
                {/* Address */}
                <p>Jl.Ciater Raya</p>
                <p>
                  Tangerang Selatan, BSD CITY
                </p>
                <p className="foo-email txt-500 mt-15">
                  <a href="mailto:yourdomain@mail.com">
                    BakmiBangkaAsli17@gmail.com
                  </a>
                </p>
                <p>
                  <span className="btn green-color">
                    <a href="tel:0812-9463-3765">0812-9463-3765</a>
                  </span>
                </p>
              </div>
            </div>
            {/* FOOTER INFO */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-info mb-30">
                {/* Title */}
                <h5 className="h5-sm">Waktu Kerja</h5>
                {/* Text */}
                <p>Kami Melayani dan Support </p>
                {/* Text */}
                <p className="mt-15">
                  Senin-Jumat: <span>08:00 - 19:00</span>
                </p>
                <p>
                  Sabtu-Ninggu: <span>08:00 - 19:00</span>
                </p>
                <p>
                  Weekends: <span>08:00 - 19:00</span>
                </p>
              </div>
            </div>
            {/* FOOTER INFO */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-info mb-30">
                {/* Title */}
                <h5 className="h5-sm">Sosial Media</h5>
                {/* Text */}
                <p className="first-list-link">
                  <a href="#">
                    <i className="fab fa-facebook-f" /> Facebook
                  </a>
                </p>
                <p>
                  <a href="#">
                    <i className="fab fa-whatsapp" /> WhatsApp
                  </a>
                </p>
                <p>
                  <a href="#">
                    <i className="fab fa-instagram" /> Instagram
                  </a>
                </p>
                <p>
                  <a href="#">
                    <i className="fab fa-youtube" /> YouTube
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            © 2025{" "}
            <a href="#" className="copyright-link">
              Bakmi Bangka Asli 17
            </a>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 