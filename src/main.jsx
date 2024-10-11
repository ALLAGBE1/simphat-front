import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        {/* <App /> */}
        {/* <Route path='/' element={<App />}  /> */}
        <Route path='/' element={<Home />}  />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
