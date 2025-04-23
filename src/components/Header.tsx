import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="header-1"
        className={`header navik-header header-shadow center-menu-1 header-transparent ${isSticky ? 'sticky' : ''}`}
      >
        <div className="container">
          {/* NAVIGATION MENU */}
          <div className="navik-header-container">
            
            {/* LOGO IMAGE */}
            <div
              className="logo"
              data-mobile-logo="/images/logo.png"
              data-sticky-logo="/images/logo.png"
            >
              <Link to="/">
                <img src="/images/logo.png" alt="header-logo" />
              </Link>
            </div>
            {/* BURGER MENU */}
            <div className="burger-menu" onClick={toggleMenu}>
              <div className={`line-menu line-half first-line ${isMenuOpen ? 'open' : ''}`} />
              <div className={`line-menu ${isMenuOpen ? 'open' : ''}`} />
              <div className={`line-menu line-half last-line ${isMenuOpen ? 'open' : ''}`} />
            </div>
            {/* MAIN MENU */}
            <nav className={`navik-menu menu-caret navik-yellow ${isMenuOpen ? 'menu-open' : ''}`}>
              <ul className="top-list">
                <li>
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>Browse</Link>
                </li>
                <li>
                  <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
                </li>
                <li>
                  <Link to="/city-details" onClick={() => setIsMenuOpen(false)}>Our Outlet</Link>
                </li>
              </ul>
              <ul>
                {/* DROPDOWN MENU */}
                <li className="dropdown">
                  <a href="#" onClick={(e) => e.preventDefault()}>About</a>
                  <ul>
                    <li>
                      <a href="about.html" onClick={() => setIsMenuOpen(false)}>About Me</a>
                    </li>
                    <li>
                      <a href="testimonial.html" onClick={() => setIsMenuOpen(false)}>Review &amp; Testimoni</a>
                    </li>
                    <li>
                      <a href="team.html" onClick={() => setIsMenuOpen(false)}>The Team</a>
                    </li>
                    <li>
                      <a href="gallery.html" onClick={() => setIsMenuOpen(false)}>Images Gallery</a>
                    </li>
                    <li>
                      <a href="faqs.html" onClick={() => setIsMenuOpen(false)}>F.A.Q.s</a>
                    </li>
                    <li>
                      <a href="terms.html" onClick={() => setIsMenuOpen(false)}>Terms &amp; Privacy</a>
                    </li>
                  </ul>
                </li>
                {/* DROPDOWN MENU */}
                <li className="dropdown">
                  <a href="#" onClick={(e) => e.preventDefault()}>Service</a>
                  <ul>
                    <li>
                      <a href="blog-list.html" onClick={() => setIsMenuOpen(false)}>Blog</a>
                    </li>
                    <li>
                      <a href="delivery.html" onClick={() => setIsMenuOpen(false)}>Delivery</a>
                    </li>
                    <li>
                      <a href="catering.html" onClick={() => setIsMenuOpen(false)}>Catering</a>
                    </li>
                    <li>
                      <a href="single-post.html" onClick={() => setIsMenuOpen(false)}>Career</a>
                    </li>
                  </ul>
                </li>
                {/* DROPDOWN MENU */}
                <li className="dropdown">
                  <a href="#" onClick={(e) => e.preventDefault()}>Contacts</a>
                  <ul>
                    <li>
                      <a href="booking.html" onClick={() => setIsMenuOpen(false)}>Book A Table</a>
                    </li>
                    <li>
                      <a href="contacts.html" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>{" "}
            {/* END MAIN MENU */}
          </div>{" "}
          {/* END NAVIGATION MENU */}
        </div>{" "}
        {/* End container */}
      </header>
      
      {/* Overlay for mobile menu */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header; 