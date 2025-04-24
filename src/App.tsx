import { Routes, Route } from 'react-router-dom'
import Browse from './pages/browse'
import OutletDetails from './pages/OutletDetails'
import CityDetails from './pages/CityDetails'
import BookOutlet from './pages/BookOutlet'
import SuccessBooking from './pages/SuccessBooking'
import CheckBooking from './pages/CheckBooking'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Browse /></MainLayout>} />
      <Route path="/outlet/:slug" element={<MainLayout><OutletDetails /></MainLayout>} />
      <Route path="/outlet/:slug/book" element={<MainLayout><BookOutlet /></MainLayout>} />
      <Route path="/city/:slug" element={<MainLayout><CityDetails /></MainLayout>} />
      <Route path="/success-booking" element={<MainLayout><SuccessBooking /></MainLayout>} />
      <Route path="/check-booking" element={<MainLayout><CheckBooking /></MainLayout>} />
      <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
    </Routes>
  )
}

export default App
