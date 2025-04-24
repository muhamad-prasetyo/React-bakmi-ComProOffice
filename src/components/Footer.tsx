import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer division" style={{ 
      position: 'relative',
      backgroundColor: '#fff',
      backgroundImage: 'url("/images/footer-illustration.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      padding: '50px 0 0',
      marginTop: '50px',
      overflow: 'hidden',
      color: '#333'
    }}>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          {/* LEFT SECTION - LOGO AND NAME */}
          <div className="col-md-4 text-center text-md-start mb-5 mb-md-0">
            <div className="footer-logo mb-3">
              <div style={{ 
                color: '#FF7A00', 
                border: '3px solid #FF7A00', 
                width: '120px', 
                height: '120px', 
                fontSize: '60px', 
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                marginLeft: '0',
                marginBottom: '20px',
                backgroundColor: 'white'
              }}>
                17
              </div>
            </div>
            <h3 className="mb-0" style={{ 
              fontWeight: 'bold', 
              color: '#333',
              fontSize: '24px'
            }}>Bakmi Bangka Asli 17 ||</h3>
            <p style={{ color: '#666' }}>Restauran Food & Delivery Food</p>
          </div>

          {/* MIDDLE SECTION - ORDER NOW */}
          <div className="col-md-4 mb-5 mb-md-0">
            <h2 style={{ 
              color: '#4CAF50', 
              fontWeight: 'bold',
              marginBottom: '20px',
              fontSize: '24px'
            }}>ORDER NOW</h2>
            <div className="footer-contacts">
              <p className="mb-3" style={{ color: '#333' }}>Jl.Ciater Raya</p>
              <p className="mb-3" style={{ color: '#333' }}>
                Tangerang Selatan, BSD CITY
              </p>
              <p className="mb-3">
                <a href="mailto:BakmiBangkaAsli17@gmail.com" style={{ color: '#333', textDecoration: 'none' }}>
                  BakmiBangkaAsli17@gmail.com
                </a>
              </p>
              <p className="mt-3">
                <a href="tel:0812-9463-3765" style={{ 
                  color: '#4CAF50', 
                  fontWeight: 'bold', 
                  fontSize: '20px',
                  textDecoration: 'none'
                }}>
                  0812-9463-3765
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT SECTION - WAKTU KERJA & SOCIAL MEDIA */}
          <div className="col-md-4">
            <div className="row">
              {/* WAKTU KERJA */}
              <div className="col-md-6">
                <h5 style={{ 
                  color: '#4CAF50', 
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  fontSize: '18px'
                }}>WAKTU KERJA</h5>
                <p className="mb-3" style={{ color: '#333' }}>Kami Melayani dan Support</p>
                <p className="mb-2" style={{ color: '#666' }}>
                  Senin-Jumat: <span style={{ fontWeight: 'bold', color: '#333' }}>08:00 - 19:00</span>
                </p>
                <p className="mb-2" style={{ color: '#666' }}>
                  Sabtu-Ninggu: <span style={{ fontWeight: 'bold', color: '#333' }}>08:00 - 19:00</span>
                </p>
                <p className="mb-2" style={{ color: '#666' }}>
                  Weekends: <span style={{ fontWeight: 'bold', color: '#333' }}>08:00 - 19:00</span>
                </p>
              </div>
              
              {/* SOCIAL MEDIA */}
              <div className="col-md-6">
                <h5 style={{ 
                  color: '#4CAF50', 
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  fontSize: '18px'
                }}>SOSIAL MEDIA</h5>
                <p className="mb-2">
                  <a href="#" style={{ color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <i className="fab fa-facebook-f me-2" style={{ width: '20px' }}></i> Facebook
                  </a>
                </p>
                <p className="mb-2">
                  <a href="#" style={{ color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <i className="fab fa-whatsapp me-2" style={{ width: '20px' }}></i> WhatsApp
                  </a>
                </p>
                <p className="mb-2">
                  <a href="#" style={{ color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <i className="fab fa-instagram me-2" style={{ width: '20px' }}></i> Instagram
                  </a>
                </p>
                <p className="mb-2">
                  <a href="#" style={{ color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <i className="fab fa-youtube me-2" style={{ width: '20px' }}></i> YouTube
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bicycle delivery person */}
      <div style={{ 
        position: 'absolute',
        bottom: '0',
        left: '45%',
        transform: 'translateX(-50%)',
        animation: 'moveLeftRight 15s linear infinite',
        zIndex: 1
      }}>
        <img src="/images/delivery-boy.svg" alt="Delivery" style={{ height: '120px' }} />
      </div>

      {/* Copyright section */}
      <div style={{ 
        marginTop: '40px',
        padding: '20px 0',
        borderTop: '1px solid #eee',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center'
      }}>
        <div className="container">
          <p style={{ color: '#666', margin: 0 }}>
            © 2025 Bakmi Bangka Asli 17 All Rights Reserved.
          </p>
        </div>
      </div>

      <style>
        {`
          @keyframes moveLeftRight {
            0% {
              left: 20%;
              transform: translateX(-100%);
            }
            100% {
              left: 80%;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer; 