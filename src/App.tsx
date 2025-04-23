import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Browse from './pages/browse'
import OutletDetails from './pages/OutletDetails'
import CityDetails from './pages/CityDetails'
import BookOutlet from './pages/BookOutlet'
import SuccessBooking from './pages/SuccessBooking'
import CheckBooking from './pages/CheckBooking'

// Import all CSS files for the application
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/flaticon.css";
import "./css/menu.css";
import "./css/magnific-popup.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/jquery.datetimepicker.min.css";
import "./css/flexslider.css";
import "./css/browse.page.css";
import "./css/modern-styles.css";

function App() {
  

  return (
    <>

      <BrowserRouter>
         <Routes>
             <Route path="/" element={<Browse />} />
             <Route path="/outlet/:slug" element={<OutletDetails />} />
             <Route path="/outlet/:slug/book" element={<BookOutlet />} />
             <Route path="/city/:slug" element={<CityDetails />} />
             <Route path="/success-booking" element={<SuccessBooking />} />
             <Route path="/check-booking" element={<CheckBooking />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
