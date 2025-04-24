import React, { useEffect, useRef, useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import BrowseCityWrapper from '../wrappers/BrowseCityWrapper';
import ImageLink from '../components/ImageLink';

const Browse: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3; // Number of slides

  // Removing duplicate cities data that's already in BrowseCityWrapper
  
  useEffect(() => {
    // Custom slider implementation
    const initializeSlider = () => {
      // Auto advance slides every 6 seconds
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % totalSlides);
      }, 6000);
      
      return () => clearInterval(interval);
    };
    
    initializeSlider();
  }, [totalSlides]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <>
      {/* HERO-1 */}
      <section id="hero-1" className="hero-section division">
        {/* SLIDER */}
        <div className="slider custom-slider" ref={sliderRef}>
          <ul className="slides">
            {/* SLIDE #1 */}
            <li id="slide-1" className={activeSlide === 0 ? 'active' : ''}>
              {/* Background Image */}
              <img src="/images/slider/Testing 2.png" width="100%" height="100%" alt="slide-background" />

              {/* Image Caption */}
              <div className="caption d-flex align-items-center center-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="caption-txt white-color">
                        {/* Title */}
                        <div className="title">
                          <h2>Good Time, Great Taste</h2>
                        </div>
                        {/* Text */}
                        <p>Open Daily: <span className="yellow-color">11:30PM - 8:30PM</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* SLIDE #2 */}
            <li id="slide-2" className={activeSlide === 1 ? 'active' : ''}>
              {/* Background Image */}
              <img src="/images/slider/hero.jpg" width="100%" height="100%" alt="slide-background" />

              {/* Image Caption */}
              <div className="caption d-flex align-items-center center-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="caption-txt white-color">
                        {/* Title */}
                        <div className="title">
                          <h2>Discover The Real Burgers</h2>
                        </div>
                        {/* Text */}
                        <p>Enjoy the food you love <span className="yellow-color">FROM $6.99</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* SLIDE #3 */}
            <li id="slide-3" className={activeSlide === 2 ? 'active' : ''}>
              {/* Background Image */}
              <img src="/images/slider/hero2.jpg" alt="slide-background" />

              {/* Image Caption */}
              <div className="caption d-flex align-items-center center-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="caption-txt white-color">
                        {/* Title */}
                        <div className="title">
                          <h2>Big Burger, Little Money</h2>
                        </div>
                        {/* Text */}
                        <p>Order Now: <span className="yellow-color"><a href="tel:123456789">789-654-3210</a></span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* Custom Slider Indicators */}
          <div className="slider-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${activeSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROMO SECTION */}
      <section id="promotion" className="container my-5">
        <div className="text-center mb-4">
          <h2 className="promo-title h2-xl coffee-color">
            Promo Penawaran Menarik
          </h2>
          <div className="title-underline"></div>
        </div>
        
        {/* Mobile Carousel */}
        <div id="promoCarousel" className="carousel slide d-md-none" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to={1} aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to={2} aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a className="promo-link" href="#">
                <div className="promo-card-gm">
                  <div className="promo-img-container">
                    <img alt="Bakmi Ayam Special promo" className="promo-img" 
                      src="https://storage.googleapis.com/a1aa/image/IJfdN27kODX9f0ACSu3gcs8KDzwbNXeRz78kB2TowxkBlERoA.jpg" />
                    <div className="promo-badge">BEST SELLER</div>
                  </div>
                  <div className="promo-content">
                    <h4 className="promo-title-gm">
                      Bakmi Ayam Special
                    </h4>
                    <p className="promo-desc">
                      Nikmati kelezatan bakmi dengan ayam dan jamur pilihan
                    </p>
                    <div className="promo-price">
                      <span className="old-price">Rp 45.000</span>
                      <span className="new-price">Rp 35.000</span>
                    </div>
                    <div className="promo-period">
                      <i className="fas fa-calendar-alt"></i>
                      <small>Berlaku hingga 31 Desember 2025</small>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a className="promo-link" href="#">
                <div className="promo-card-gm">
                  <div className="promo-img-container">
                    <img alt="Paket Keluarga" className="promo-img" 
                      src="https://storage.googleapis.com/a1aa/image/5KDW4xHNhqLOCpsXHuTz9Y7FYf95UETsHXffojZShmG8kERoA.jpg" />
                    <div className="promo-badge promo-badge-red">HEMAT 25%</div>
                  </div>
                  <div className="promo-content">
                    <h4 className="promo-title-gm">
                      Paket Keluarga
                    </h4>
                    <p className="promo-desc">
                      4 porsi bakmi dengan pilihan topping + 4 es teh manis
                    </p>
                    <div className="promo-price">
                      <span className="old-price">Rp 180.000</span>
                      <span className="new-price">Rp 135.000</span>
                    </div>
                    <div className="promo-period">
                      <i className="fas fa-calendar-alt"></i>
                      <small>Berlaku hingga 31 Januari 2025</small>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a className="promo-link" href="#">
                <div className="promo-card-gm">
                  <div className="promo-img-container">
                    <img alt="Es Jeruk Special" className="promo-img" 
                      src="https://storage.googleapis.com/a1aa/image/YXZU0Zaew9U1BC6UB6LkTV4XHfGwOGAFRnsrMB49AZwfkERoA.jpg" />
                    <div className="promo-badge">BARU</div>
                  </div>
                  <div className="promo-content">
                    <h4 className="promo-title-gm">
                      Es Jeruk Special
                    </h4>
                    <p className="promo-desc">
                      Kesegaran premium untuk menemani hidangan favorit Anda
                    </p>
                    <div className="promo-price">
                      <span className="old-price">Rp 18.000</span>
                      <span className="new-price">Rp 12.000</span>
                    </div>
                    <div className="promo-period">
                      <i className="fas fa-calendar-alt"></i>
                      <small>Berlaku hingga 25 Februari 2025</small>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Desktop View */}
        <div className="row d-none d-md-flex">
          <div className="col-md-4">
            <a className="promo-link" href="#">
              <div className="promo-card-gm">
                <div className="promo-img-container">
                  <img alt="Bakmi Ayam Special promo" className="promo-img" 
                    src="https://storage.googleapis.com/a1aa/image/IJfdN27kODX9f0ACSu3gcs8KDzwbNXeRz78kB2TowxkBlERoA.jpg" />
                  <div className="promo-badge">BEST SELLER</div>
                </div>
                <div className="promo-content">
                  <h4 className="promo-title-gm">
                    Bakmi Ayam Special
                  </h4>
                  <p className="promo-desc">
                    Nikmati kelezatan bakmi dengan ayam dan jamur pilihan
                  </p>
                  <div className="promo-price">
                    <span className="old-price">Rp 45.000</span>
                    <span className="new-price">Rp 35.000</span>
                  </div>
                  <div className="promo-period">
                    <i className="fas fa-calendar-alt"></i>
                    <small>Berlaku hingga 31 Desember 2025</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a className="promo-link" href="#">
              <div className="promo-card-gm">
                <div className="promo-img-container">
                  <img alt="Paket Keluarga" className="promo-img" 
                    src="https://storage.googleapis.com/a1aa/image/5KDW4xHNhqLOCpsXHuTz9Y7FYf95UETsHXffojZShmG8kERoA.jpg" />
                  <div className="promo-badge promo-badge-red">HEMAT 25%</div>
                </div>
                <div className="promo-content">
                  <h4 className="promo-title-gm">
                    Paket Keluarga
                  </h4>
                  <p className="promo-desc">
                    4 porsi bakmi dengan pilihan topping + 4 es teh manis
                  </p>
                  <div className="promo-price">
                    <span className="old-price">Rp 180.000</span>
                    <span className="new-price">Rp 135.000</span>
                  </div>
                  <div className="promo-period">
                    <i className="fas fa-calendar-alt"></i>
                    <small>Berlaku hingga 31 Januari 2025</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a className="promo-link" href="#">
              <div className="promo-card-gm">
                <div className="promo-img-container">
                  <img alt="Es Jeruk Special" className="promo-img" 
                    src="https://storage.googleapis.com/a1aa/image/YXZU0Zaew9U1BC6UB6LkTV4XHfGwOGAFRnsrMB49AZwfkERoA.jpg" />
                  <div className="promo-badge">BARU</div>
                </div>
                <div className="promo-content">
                  <h4 className="promo-title-gm">
                    Es Jeruk Special
                  </h4>
                  <p className="promo-desc">
                    Kesegaran premium untuk menemani hidangan favorit Anda
                  </p>
                  <div className="promo-price">
                    <span className="old-price">Rp 18.000</span>
                    <span className="new-price">Rp 12.000</span>
                  </div>
                  <div className="promo-period">
                    <i className="fas fa-calendar-alt"></i>
                    <small>Berlaku hingga 25 Februari 2025</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <a className="btn btn-md btn-red tra-red-hover" href="#">
            Lihat Semua Promo
          </a>
        </div>
      </section>
            
      {/* OUTLET CITY - Ganti dengan BrowseCityWrapper */}
      <BrowseCityWrapper />

      {/* PROMO-2 */}
      <section id="promo-2" className="promo-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* PROMO BOX-1 */}
            <div className="col-md-6 col-lg-5">
              <div id="pb-2-1" className="pbox-2 bg-fixed">
                <div className="pbox-2-txt brown-color">
                  <h4 className="h4-lg txt-300">Get Your Free</h4>
                  <h4 className="h4-xl">Cheese Fries</h4>
                  <a href="menu-1.html" className="btn btn-green tra-green-hover">Learn More</a>
                </div>
              </div>
            </div>

            {/* PROMO BOX-2 */}
            <div className="col-md-6 col-lg-7">
              <div id="pb-2-2" className="pbox-2 bg-fixed">
                <div className="pbox-2-txt brown-color">
                  <h4 className="h4-lg txt-300">Crispy Chicken</h4>
                  <h4 className="h4-xl">Burger Is Back!</h4>
                  <a href="menu-1.html" className="btn btn-green tra-green-hover">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU-6 */}
      <section id="menu-6" className="wide-70 menu-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title mb-60 text-center">
                {/* Title */}
                <h2 className="h2-xl green-color">Explore Our Menu</h2>
                {/* Text */}
                <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                  primis libero tempus, blandit a cursus varius magna
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* MENU ITEM #1 */}
            <div className="col-sm-6 col-lg-3">
              <div className="menu-6-item bg-white">
                {/* IMAGE */}
                <div className="menu-6-img rel">
                  <div className="hover-overlay">
                    {/* Image */}
                    <img className="img-fluid" src="images/menu/burger-11.jpg" alt="menu-image" />
                
                    
                    {/* Zoom Icon */}
                    <div className="menu-img-zoom ico-25">
                      <a href="images/menu/burger-11.jpg" className="image-link">
                        <span className="flaticon-zoom"></span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className="menu-6-txt rel">
                  {/* Rating */}
                  <div className="item-rating">
                    <div className="stars-rating stars-lg">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>

                

                  {/* Title */}
                  <h5 className="h5-sm coffee-color">Crispy Chicken</h5>

                  {/* Description */}
                  <p className="grey-color">Chicken breast, chilli sauce, tomatoes, pickles, coleslaw</p>

                  {/* Price */}
                  <div className="menu-6-price bg-coffee">
                    <h5 className="h5-xs yellow-color">$8.50</h5>
                  </div>

                  {/* Add To Cart */}
                  <div className="add-to-cart bg-yellow ico-10">
                    <a href="product-single.html"><span className="flaticon-shopping-bag"></span>View Detail</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more menu items as needed */}
            {/* Menu item #2, #3, etc. */}
          </div>
        </div>
      </section>

      {/* PROMO-11 HOT DEALS BANNER */}
      <section id="promo-11" className="bg-fixed promo-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* PROMO TEXT */}
            <div className="col-md-5 col-lg-4">
              <div className="pbox-11-txt mb-40 white-color">
                {/* Title */}
                <h3 className="h3-lg">The</h3>
                <h2>Hot Deals</h2>
                {/* Text */}
                <p className="p-md">Kenyang tapi mau kantong tetap aman? Bisa banget!</p>
                {/* Button */}
                <a href="product-single.html" className="btn btn-lg btn-red tra-white-hover">Order Now</a>
              </div>
            </div>

            {/* PROMO IMAGE */}
            <div className="col-md-7 col-lg-6">
              <div className="pbox-11-img mb-40">
                {/* Image */}
                <img className="img-fluid" src="images/download.png" width="800px" height="800px"
                  alt="promo-image" />
                {/* Price Badge */}
                <div className="red-badge price-badge-lg bg-fixed">
                  <div className="badge-txt white-color">
                    <h5 className="h5-xl">Hanya</h5>
                    <h3 className="h3-sm">23K</h3>
                    <span className="item-code">Code: BF0841</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PROMO LINKS */}
            <div className="col-lg-2">
              {/* Link */}
              <div className="pbox-11-link text-center white-color">
                <a href="product-single.html">
                  <img className="img-fluid" src="images/menu/bakmi-02.png" alt="promo-image" />
                  <p>Bakmi Bakso</p>
                </a>
              </div>
              {/* Link */}
              <div className="pbox-11-link text-center mb-40 white-color">
                <a href="product-single.html">
                  <img className="img-fluid" src="images/menu/bakmi-03.png" alt="promo-image" />
                  <p>Bakmi Ayam Panggang</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO-7
			============================================= */}
      <section id="promo-7" className="wide-100 promo-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title mb-60 text-center">
                {/* Title 	*/}
                <h2 className="h2-xl green-color">Our Best Offers</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                  dolor primis libero tempus, blandit a cursus varius magna
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            {/* PROMO BOX-1 */}
            <div className="col-lg-4">
              <div className="pbox-7 clearfix">
                {/* Image */}
                <div className="pbox-7-img rel">
                  <div className="hover-overlay">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/img-01.jpg"
                      alt="promo-image"
                    />
                    {/* Item Code */}
                    <span className="item-code bg-tra-dark">Code: 0961</span>
                    {/* Zoom Icon */}
                    <div className="menu-img-zoom ico-25">
                      <a href="images/img-01.jpg" className="image-link">
                        <span className="flaticon-zoom" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div id="pb-7-1" className="pbox-7-txt rel">
                  {/* Rating */}
                  <div className="item-rating">
                    <div className="stars-rating stars-lg">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  {/* Like Icon */}
                  <div className="like-ico ico-25">
                    <a href="#">
                      <span className="flaticon-heart" />
                    </a>
                  </div>
                  {/* Title */}
                  <h4 className="h4-xs coffee-color">Fried Seafood</h4>
                  {/* Text */}
                  <p className="grey-color">
                    Vitae sapien justo aliquet purus molestie a semper lacus at
                    cursus porta lobortis
                  </p>
                  {/* Price */}
                  <div className="pbox-7-price">
                    <h5 className="h5-lg red-color">
                      <span className="old-price">$11.80</span> $9.99
                    </h5>
                  </div>
                  {/* Add To Cart */}
                  <div className="add-to-cart bg-yellow ico-10">
                    <a href="product-single.html">
                      <span className="flaticon-shopping-bag" /> Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END PROMO BOX-1 */}
            {/* PROMO BOX-2 */}
            <div className="col-lg-4">
              <div className="pbox-7 clearfix m-row">
                {/* Text */}
                <div id="pb-7-2" className="pbox-7-txt rel m-bottom">
                  {/* Rating */}
                  <div className="item-rating">
                    <div className="stars-rating stars-lg">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  {/* Like Icon */}
                  <div className="like-ico ico-25">
                    <a href="#">
                      <span className="flaticon-heart" />
                    </a>
                  </div>
                  {/* Title */}
                  <h4 className="h4-sm coffee-color">Crispy Chicken</h4>
                  {/* Text */}
                  <p className="grey-color">
                    Vitae sapien justo aliquet molestie purus a semper lacus at
                    cursus porta lobortis
                  </p>
                  {/* Price */}
                  <div className="pbox-7-price">
                    <h5 className="h5-lg red-color">
                      <span className="old-price">$13.79</span> $11.25
                    </h5>
                  </div>
                  {/* Add To Cart */}
                  <div className="add-to-cart bg-yellow ico-10">
                    <a href="product-single.html">
                      <span className="flaticon-shopping-bag" /> Add to Cart
                    </a>
                  </div>
                </div>
                {/* Image */}
                <div className="pbox-7-img rel m-top">
                  <div className="hover-overlay">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/img-02.jpg"
                      alt="promo-image"
                    />
                    {/* Item Code */}
                    <span className="item-code bg-tra-dark">Code: 2136</span>
                    {/* Zoom Icon */}
                    <div className="menu-img-zoom ico-25">
                      <a href="images/img-02.jpg" className="image-link">
                        <span className="flaticon-zoom" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END PROMO BOX-2 */}
            {/* PROMO BOX-3 */}
            <div className="col-lg-4">
              <div className="pbox-7 clearfix">
                {/* Image */}
                <div className="pbox-7-img rel">
                  <div className="hover-overlay">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/img-03.jpg"
                      alt="promo-image"
                    />
                    {/* Item Code */}
                    <span className="item-code bg-tra-dark">Code: 2164</span>
                    {/* Zoom Icon */}
                    <div className="menu-img-zoom ico-25">
                      <a href="images/img-03.jpg" className="image-link">
                        <span className="flaticon-zoom" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div id="pb-7-3" className="pbox-7-txt rel">
                  {/* Rating */}
                  <div className="item-rating">
                    <div className="stars-rating stars-lg">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  {/* Like Icon */}
                  <div className="like-ico ico-25">
                    <a href="#">
                      <span className="flaticon-heart" />
                    </a>
                  </div>
                  {/* Title */}
                  <h4 className="h4-sm coffee-color">French Fries</h4>
                  {/* Text */}
                  <p className="grey-color">
                    Vitae sapien justo aliquet molestie purus a semper lacus at
                    cursus porta lobortis
                  </p>
                  {/* Price */}
                  <div className="pbox-7-price">
                    <h5 className="h5-lg red-color">
                      <span className="old-price">$5.45</span> $4.49
                    </h5>
                  </div>
                  {/* Add To Cart */}
                  <div className="add-to-cart bg-yellow ico-10">
                    <a href="product-single.html">
                      <span className="flaticon-shopping-bag" /> Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END PROMO BOX-3 */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* END PROMO-7 */}
      {/* BANNER-3
			============================================= */}
      <section id="banner-3" className="bg-yellow banner-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* BANNER TEXT */}
            <div className="col-md-7 col-lg-6">
              <div className="banner-3-txt coffee-color">
                {/* Title  */}
                <h4 className="h4-xl">Download mobile App and</h4>
                <h2>save up to 20%</h2>
                {/* Text */}
                <p className="p-md">
                  Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor
                  primis libero tempus, blandit varius
                </p>
                {/* Store Badges */}
                <div className="stores-badge">
                  {/* AppStore */}
                  <a href="#" className="store">
                    <img
                      className="appstore-original"
                      src="images/appstore.png"
                      alt="appstore-logo"
                    />
                  </a>
                  {/* Google Play */}
                  <a href="#" className="store">
                    <img
                      className="googleplay-original"
                      src="images/googleplay.png"
                      alt="googleplay-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* BANNER IMAGE */}
            <div className="col-md-5 col-lg-6">
              <div className="banner-3-img">
                <img
                  className="img-fluid"
                  src="images/e-shop.png"
                  alt="banner-image"
                />
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* END BANNER-3 */}
      {/* GALLERY-2
			============================================= */}
      <section id="gallery-2" className="gallery-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title mb-60 text-center">
                {/* Title 	*/}
                <h2 className="h2-xl green-color">Image Gallery</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                  dolor primis libero tempus, blandit a cursus varius magna
                </p>
              </div>
            </div>
          </div>
          {/* IMAGES HOLDER */}
          <div className="row">
            {/* IMAGE #1 */}
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-img">
                <ImageLink href="images/gallery/img-01.jpg">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/gallery/img-01.jpg"
                      alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Meta */}
                    <div className="img-meta white-color">
                      <h5 className="h5-xs">Classic California</h5>
                      <div className="txt-block-rating">
                        <div className="stars-rating">
                          <span>4.5</span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>(23)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageLink>
              </div>
            </div>
            {/* IMAGE #2 */}
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-img">
                <ImageLink href="images/gallery/img-02.jpg">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/gallery/img-02.jpg"
                      alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Meta */}
                    <div className="img-meta white-color">
                      <h5 className="h5-xs">Margherita Pizza</h5>
                      <div className="txt-block-rating">
                        <div className="stars-rating">
                          <span>4.52</span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>(58)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageLink>
              </div>
            </div>
            {/* IMAGE #3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-img">
                <ImageLink href="images/gallery/img-03.jpg">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/gallery/img-03.jpg"
                      alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Meta */}
                    <div className="img-meta white-color">
                      <h5 className="h5-xs">Grilled Ribs</h5>
                      <div className="txt-block-rating">
                        <div className="stars-rating">
                          <span>4.9</span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>(69)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageLink>
              </div>
            </div>
            {/* IMAGE #4 */}
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-img">
                <ImageLink href="images/gallery/img-04.jpg">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/gallery/img-04.jpg"
                      alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Meta */}
                    <div className="img-meta white-color">
                      <h5 className="h5-xs">Field Greens Pizza</h5>
                      <div className="txt-block-rating">
                        <div className="stars-rating">
                          <span>4.38</span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>(41)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageLink>
              </div>
            </div>
            {/* IMAGE #5 */}
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-img">
                <ImageLink href="images/gallery/img-05.jpg">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/gallery/img-05.jpg"
                      alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Meta */}
                    <div className="img-meta white-color">
                      <h5 className="h5-xs">Mini Chicken Pizza</h5>
                      <div className="txt-block-rating">
                        <div className="stars-rating">
                          <span>5</span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>(86)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageLink>
              </div>
            </div>
            {/* IMAGE #6 */}
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-img">
                <ImageLink href="images/gallery/img-06.jpg">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/gallery/img-06.jpg"
                      alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Meta */}
                    <div className="img-meta white-color">
                      <h5 className="h5-xs">Eggs Benedict Burger</h5>
                      <div className="txt-block-rating">
                        <div className="stars-rating">
                          <span>4.65</span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>(30)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageLink>
              </div>
            </div>
            {/* IMAGE #7 */}
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-img">
                <ImageLink href="images/gallery/img-07.jpg">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/gallery/img-07.jpg"
                      alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Meta */}
                    <div className="img-meta white-color">
                      <h5 className="h5-xs">Double Bacon Burger</h5>
                      <div className="txt-block-rating">
                        <div className="stars-rating">
                          <span>4.85</span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>(71)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageLink>
              </div>
            </div>
            {/* IMAGE #8 */}
            <div className="col-sm-6 col-lg-3">
              <div className="gallery-img">
                <ImageLink href="images/gallery/img-08.jpg">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/gallery/img-08.jpg"
                      alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Meta */}
                    <div className="img-meta white-color">
                      <h5 className="h5-xs">Classic California</h5>
                      <div className="txt-block-rating">
                        <div className="stars-rating">
                          <span>4.64</span>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>(17)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageLink>
              </div>
            </div>
          </div>{" "}
          {/* END IMAGES HOLDER */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END GALLERY-2 */}
      {/* BLOG-1
			============================================= */}
      <section id="blog-1" className="wide-60 blog-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title mb-60 text-center">
                {/* Title 	*/}
                <h2 className="h2-xl green-color">Events &amp; Catering</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                  dolor primis libero tempus, blandit a cursus varius magna
                </p>
              </div>
            </div>
          </div>
          {/* BLOG POSTS HOLDER */}
          <div className="row">
            {/* BLOG POST #1 */}
            <div className="col-md-6 col-lg-4">
              <div className="blog-post">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/blog/img-01.jpg"
                      alt="blog-post-image"
                    />
                  </div>
                </div>
                {/* BLOG POST TITLE */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-lg coffee-color">
                    <a href="single-post.html">
                      Quaerat neque purus ipsum neque dolor
                    </a>
                  </h5>
                  {/* Post Text */}
                  <p className="grey-color">
                    Quaerat neque purus ipsum neque dolor primis tempus impedit
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END  BLOG POST #1 */}
            {/* BLOG POST #2 */}
            <div className="col-md-6 col-lg-4">
              <div className="blog-post">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/blog/img-02.jpg"
                      alt="blog-post-image"
                    />
                  </div>
                </div>
                {/* BLOG POST TEXT */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-lg coffee-color">
                    <a href="single-post.html">
                      Tempor blandit sapien at gravida donec ipsum
                    </a>
                  </h5>
                  {/* Post Text */}
                  <p className="grey-color">
                    Neque dolor primis libero tempus impedit tempor sapien gravida
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END  BLOG POST #2 */}
            {/* BLOG POST #3 */}
            <div className="col-md-6 col-lg-4">
              <div className="blog-post">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/blog/img-03.jpg"
                      alt="blog-post-image"
                    />
                  </div>
                </div>
                {/* BLOG POST TEXT */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-lg coffee-color">
                    <a href="single-post.html">
                      Neque dolor primis a libero tempus a tempor
                    </a>
                  </h5>
                  {/* Post Text */}
                  <p className="grey-color">
                    Impedit tempor at donec sapien ipsum a neque dolor primis libero
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END  BLOG POST #3 */}
          </div>{" "}
          {/* END BLOG POSTS HOLDER */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* END BLOG-1 */}

      {/* Add ScrollToTop component */}
      <ScrollToTop />
    </>
  );
};

export default Browse; 