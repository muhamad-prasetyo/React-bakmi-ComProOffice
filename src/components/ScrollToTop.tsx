import React, { useState, useEffect } from 'react';
import { UpArrowIcon } from '../icons';
import '../styles/scrollToTop.css';

interface ScrollToTopProps {
  showAlways?: boolean;
  scrollThreshold?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ 
  showAlways = false,
  scrollThreshold = 300 
}) => {
  const [isVisible, setIsVisible] = useState(showAlways);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (showAlways) return;
    
    if (window.pageYOffset > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!showAlways) {
      window.addEventListener('scroll', toggleVisibility);
    }
    
    return () => {
      if (!showAlways) {
        window.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, [showAlways]);

  // Always render the button, but control visibility with CSS
  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible || showAlways ? 'show' : ''}`}
      aria-label="Scroll to top"
      id="scrollToTopButton"
    >
      <UpArrowIcon color="white" />
    </button>
  );
};

export default ScrollToTop; 