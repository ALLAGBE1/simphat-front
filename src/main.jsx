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
import ExpositionVentes from './components/ExpositionVentes/ExpositionVentes.jsx'
import Gala from './components/Gala/Gala.jsx'
import Participer from './components/Participer/participer.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import ThemeConferances from './components/ThemeConferences/ThemeConferences.jsx'
import ProgrammesConferences from './components/ProgrammesConferences/ProgrammesConferences.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expositionVentes" element={<ExpositionVentes />} />
          <Route path="/dinergala" element={<Gala />} />
          <Route path="/participer" element={<Participer />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/themeConferences" element={<ThemeConferances />} />
          <Route path="/programmesConferences" element={<ProgrammesConferences />} />
        </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
