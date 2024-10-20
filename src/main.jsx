import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/NavBar.jsx'
// import Footer from './components/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Conferences from './pages/Conferences/Conferences.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer/index.jsx'
import { Header } from './components/Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* <Navbar /> */}
      {/* <Headers /> */}
      <Header />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* <Footer /> */}
      <Footer />
    </Router>
  </StrictMode>,
)
