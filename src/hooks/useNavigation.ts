import { useEffect } from 'react';

const useNavigation = () => {
  useEffect(() => {
    // Initialize header effects
    const initializeHeader = () => {
      const header = document.querySelector('.navik-header');
      const logoImgElement = document.querySelector('.logo img');
      const logoContainer = document.querySelector('.logo');
      
      if (!header || !logoImgElement || !logoContainer) return;
      
      const logoImg = logoImgElement as HTMLImageElement;
      const mobileLogo = logoContainer.getAttribute('data-mobile-logo');
      const stickyLogo = logoContainer.getAttribute('data-sticky-logo');
      
      const handleScroll = () => {
        if (window.scrollY > 100) {
          header.classList.add('sticky');
          if (stickyLogo) {
            logoImg.src = stickyLogo;
          }
        } else {
          header.classList.remove('sticky');
          if (mobileLogo) {
            logoImg.src = mobileLogo;
          }
        }
      };
      
      // Handle burger menu toggle
      const burgerMenu = document.querySelector('.burger-menu');
      const handleBurgerClick = () => {
        header.classList.toggle('menu-open');
      };
      
      burgerMenu?.addEventListener('click', handleBurgerClick);
      
      // Handle submenu dropdown
      const hasDropdownLinks = document.querySelectorAll('.navik-menu > ul > li:has(ul) > a');
      hasDropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const parent = (link as HTMLElement).parentElement;
          parent?.classList.toggle('submenu-open');
        });
      });
      
      // Setup scroll event
      window.addEventListener('scroll', handleScroll);
      
      // Initial call
      handleScroll();
      
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
        burgerMenu?.removeEventListener('click', handleBurgerClick);
      };
    };
    
    // Add a small delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      initializeHeader();
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
};

export default useNavigation; 