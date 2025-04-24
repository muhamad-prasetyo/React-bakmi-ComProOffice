import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useNavigation from '../hooks/useNavigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '../css/navbar-custom.css';
import '../css/slider-custom.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  // Use the navigation hook to handle header interactions
  useNavigation();
  const location = useLocation();

  // Add a class to the body for homepage-specific styling
  useEffect(() => {
    const isHomePage = location.pathname === '/';
    if (isHomePage) {
      document.body.classList.add('homepage');
      document.body.classList.add('has-hero');
    } else {
      document.body.classList.remove('homepage');
      document.body.classList.remove('has-hero');
    }

    return () => {
      document.body.classList.remove('homepage');
      document.body.classList.remove('has-hero');
    };
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  return (
    <div className="react-app">
      <Navbar />
      <main style={{ paddingTop: isHomePage ? 0 : undefined }}>
        {children}
      </main>
      <ScrollToTop showAlways={true} />
      <Footer />
    </div>
  );
};

export default MainLayout; 