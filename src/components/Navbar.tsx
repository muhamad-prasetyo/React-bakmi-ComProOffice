import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Handle scroll to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <nav id="header-1" className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
      <div className="container position-relative">
        {/* Mobile toggle button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarMainMobile" 
          aria-controls="navbarMainMobile" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Left Menu Items */}
        <div className="collapse navbar-collapse d-lg-block" id="navbarLeft">
          <ul className="navbar-nav left-menu">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-warning" to="/">BROWSE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">MENU</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/outlets">OUR OUTLET</Link>
            </li>
          </ul>
        </div>
        
        {/* Centered Logo */}
        <div className="center-logo">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="Bakmi Bangka Asli 17" />
          </Link>
        </div>
        
        {/* Right Menu Items */}
        <div className="collapse navbar-collapse d-lg-block" id="navbarRight">
          <ul className="navbar-nav right-menu">
            {/* ABOUT Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="aboutDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                ABOUT
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                <li><Link className="dropdown-item" to="/testimonials">Reviews & Testimonials</Link></li>
                <li><Link className="dropdown-item" to="/team">Our Team</Link></li>
                <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
                <li><Link className="dropdown-item" to="/faqs">FAQs</Link></li>
              </ul>
            </li>
            
            {/* SERVICE Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="serviceDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                SERVICE
              </a>
              <ul className="dropdown-menu" aria-labelledby="serviceDropdown">
                <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                <li><Link className="dropdown-item" to="/delivery">Delivery</Link></li>
                <li><Link className="dropdown-item" to="/catering">Catering</Link></li>
                <li><Link className="dropdown-item" to="/careers">Careers</Link></li>
              </ul>
            </li>
            
            {/* CONTACTS Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="contactsDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                CONTACTS
              </a>
              <ul className="dropdown-menu" aria-labelledby="contactsDropdown">
                <li><Link className="dropdown-item" to="/booking">Book A Table</Link></li>
                <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        
        {/* Mobile Menu (collapsed version) */}
        <div className="collapse navbar-collapse mobile-nav" id="navbarMainMobile">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">BROWSE</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">MENU</Link>
            </li>
            <li className="nav-item">
              <Link to="/outlets" className="nav-link">OUR OUTLET</Link>
            </li>
            
            {/* ABOUT Dropdown - Mobile */}
            <li className="nav-item mobile-dropdown">
              <div 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleDropdown('aboutMobile')}
              >
                ABOUT
              </div>
              <ul className={`mobile-dropdown-menu ${openDropdown === 'aboutMobile' ? 'show' : ''}`}>
                <li><Link to="/about" className="dropdown-item">About Us</Link></li>
                <li><Link to="/testimonials" className="dropdown-item">Reviews & Testimonials</Link></li>
                <li><Link to="/team" className="dropdown-item">Our Team</Link></li>
                <li><Link to="/gallery" className="dropdown-item">Gallery</Link></li>
                <li><Link to="/faqs" className="dropdown-item">FAQs</Link></li>
              </ul>
            </li>
            
            {/* SERVICE Dropdown - Mobile */}
            <li className="nav-item mobile-dropdown">
              <div 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleDropdown('serviceMobile')}
              >
                SERVICE
              </div>
              <ul className={`mobile-dropdown-menu ${openDropdown === 'serviceMobile' ? 'show' : ''}`}>
                <li><Link to="/blog" className="dropdown-item">Blog</Link></li>
                <li><Link to="/delivery" className="dropdown-item">Delivery</Link></li>
                <li><Link to="/catering" className="dropdown-item">Catering</Link></li>
                <li><Link to="/careers" className="dropdown-item">Careers</Link></li>
              </ul>
            </li>
            
            {/* CONTACTS Dropdown - Mobile */}
            <li className="nav-item mobile-dropdown">
              <div 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleDropdown('contactsMobile')}
              >
                CONTACTS
              </div>
              <ul className={`mobile-dropdown-menu ${openDropdown === 'contactsMobile' ? 'show' : ''}`}>
                <li><Link to="/booking" className="dropdown-item">Book A Table</Link></li>
                <li><Link to="/contact" className="dropdown-item">Contact Us</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 