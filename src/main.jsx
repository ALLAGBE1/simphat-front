import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Conferences from './pages/Conferences/Conferences.jsx'
// import Contact from './components/Contact.jsx'
import Footer from './components/Footer/index.jsx'
import { Header } from './components/Header/Header.jsx'
import ExpositionVentes from './components/ExpositionVentes/ExpositionVentes.jsx'
import Gala from './components/Gala/Gala.jsx'
import Participer from './components/Participer/participer.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import ThemeConferances from './components/ThemeConferences/ThemeConferences.jsx'
import ProgrammesConferences from './components/ProgrammesConferences/ProgrammesConferences.jsx'
import Auth from './components/auth/Auth.jsx'
import Admin from './components/Admin/Admin.jsx' // Assure-toi que le chemin est correct pour le composant Admin
import './index.css'
import HonoraryCommittee from './components/HonoraryCommittee/HonoraryCommittee.jsx'
import Criteres from './components/Criteres/Criteres.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const location = useLocation();

  // Afficher Header et Footer pour toutes les routes sauf "/auth" et "/admin"
  const showHeaderFooter = !['/auth', '/admin'].includes(location.pathname);

  return (
    <>
    <Analytics />
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conferences" element={<Conferences />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/expositionVentes" element={<ExpositionVentes />} />
        <Route path="/dinergala" element={<Gala />} />
        <Route path="/participer" element={<Participer />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/themeConferences" element={<ThemeConferances />} />
        <Route path="/programmesConferences" element={<ProgrammesConferences />} />
        <Route path="/criteres" element={<Criteres /> } />
        <Route path="/aboutus" element={<AboutUs /> } />
        <Route path="/auth" element={<Auth />} />
        <Route path="/honoraryCommittee" element={<HonoraryCommittee />} />
        <Route path="/admin" element={<Admin />} /> {/* Route pour l'admin */}
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);



////////////////


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
// import Home from './pages/Home/Home.jsx'
// import Conferences from './pages/Conferences/Conferences.jsx'
// import Contact from './components/Contact.jsx'
// import Footer from './components/Footer/index.jsx'
// import { Header } from './components/Header/Header.jsx'
// import ExpositionVentes from './components/ExpositionVentes/ExpositionVentes.jsx'
// import Gala from './components/Gala/Gala.jsx'
// import Participer from './components/Participer/participer.jsx'
// import Sponsors from './components/Sponsors/Sponsors.jsx'
// import ThemeConferances from './components/ThemeConferences/ThemeConferences.jsx'
// import ProgrammesConferences from './components/ProgrammesConferences/ProgrammesConferences.jsx'
// import Auth from './components/auth/Auth.jsx'
// import './index.css'
// import HonoraryCommittee from './components/HonoraryCommittee/HonoraryCommittee.jsx'

// function App() {
//   const location = useLocation();

//   // Afficher Header et Footer pour toutes les routes sauf "/auth"
//   const showHeaderFooter = location.pathname !== '/auth';

//   return (
//     <>
//       {showHeaderFooter && <Header />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/conferences" element={<Conferences />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/expositionVentes" element={<ExpositionVentes />} />
//         <Route path="/dinergala" element={<Gala />} />
//         <Route path="/participer" element={<Participer />} />
//         <Route path="/sponsors" element={<Sponsors />} />
//         <Route path="/themeConferences" element={<ThemeConferances />} />
//         <Route path="/programmesConferences" element={<ProgrammesConferences />} />
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/honoraryCommittee" element={<HonoraryCommittee /> } />
//       </Routes>
//       {showHeaderFooter && <Footer />}
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </StrictMode>
// );




///////////////

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
// import Home from './pages/Home/Home.jsx'
// import Conferences from './pages/Conferences/Conferences.jsx'
// import Contact from './components/Contact.jsx'
// import Footer from './components/Footer/index.jsx'
// import { Header } from './components/Header/Header.jsx'
// import ExpositionVentes from './components/ExpositionVentes/ExpositionVentes.jsx'
// import Gala from './components/Gala/Gala.jsx'
// import Participer from './components/Participer/participer.jsx'
// import Sponsors from './components/Sponsors/Sponsors.jsx'
// import ThemeConferances from './components/ThemeConferences/ThemeConferences.jsx'
// import ProgrammesConferences from './components/ProgrammesConferences/ProgrammesConferences.jsx'
// import Auth from './components/auth/Auth.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Router>
//       <Header />
//         <Routes>
//           <Route path='/' element={<Home />}  />
//           <Route path="/conferences" element={<Conferences />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/expositionVentes" element={<ExpositionVentes />} />
//           <Route path="/dinergala" element={<Gala />} />
//           <Route path="/participer" element={<Participer />} />
//           <Route path="/sponsors" element={<Sponsors />} />
//           <Route path="/themeConferences" element={<ThemeConferances />} />
//           <Route path="/programmesConferences" element={<ProgrammesConferences />} />
//           <Route path="/auth" element={<Auth /> } />
//         </Routes>
//       <Footer />
//     </Router>
//   </StrictMode>,
// )
