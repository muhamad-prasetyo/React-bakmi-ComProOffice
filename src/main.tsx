import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import App from './App.tsx'

// Import styles explicitly in the correct order
import './css/bootstrap.min.css'
import './css/style.css'
import './css/responsive.css'
import './css/flaticon.css'
import './css/menu.css'
import './css/magnific-popup.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/jquery.datetimepicker.min.css'
import './css/flexslider.css'
import './css/browse.page.css'
import './css/modern-styles.css'
import './styles/main.css' // Custom variables
import './styles/custom.css' // Custom fixes
import './css/reactStyles.css' // React-specific styles and overrides
import './css/navbar-custom.css' // Custom navbar styling

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
)
