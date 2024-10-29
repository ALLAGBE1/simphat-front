
import logo from "../../assets/logo/logo.png"
import barreBarre from "../../assets/header/barre-menu.svg"
import  { useState } from "react";
import { Link } from 'react-router-dom';

export const Header = () => {
//     // Gestion de l'état du menu (ouvert/fermé)
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Fonction pour gérer l'ouverture/fermeture du menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

    // Gestion de l'état du menu (ouvert/fermé)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour gérer l'ouverture/fermeture du menu
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="bg-customGreen py-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4 ">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="logo" className="w-24 h-auto md:w-32 object-cover " />
        </div>

        {/* Textes */}
        <div className="text-center md:text-left">
          <h1 className="text-white font-bold text-xl md:text-2xl leading-snug">
            SALON INTERNATIONAL DE LA MÉDECINE ET DE LA PHARMACOPÉE TRADITIONNELLES
          </h1>
          <h2 className="text-customYellow font-bold text-lg md:text-xl mt-2 text-center">
            (SIMPHAT) PREMIÈRE ÉDITION
          </h2>
        </div>

        {/* Menu */}
        {/* <div className="flex flex-col items-center text-white mt-4 md:mt-0 md:px-4">
          <img src={barreBarre} alt="MENU" className="w-8 h-auto" />
          <p className="text-lg font-bold">MENU</p>
        </div> */}
        {/* Menu */}
        <div className="flex flex-col items-center text-white space-y-1 md:px-4 cursor-pointer" onClick={toggleMenu}>
          <img src={barreBarre} alt="MENU" className="w-6 h-auto md:w-8" />
          <p className="text-xs md:text-sm font-bold">MENU</p>
        </div>

      </div>

      {/* Barre latérale (Menu latéral) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionDuration: "300ms" }}
      >
        {/* Bouton de fermeture "X" dans le coin supérieur droit */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-customGreen font-bold text-2xl focus:outline-none"
          >
            &times; {/* Ce caractère spécial représente un "X" */}
          </button>
        </div>

        {/* Contenu du menu latéral */}
        <div className="flex flex-col items-start p-4 space-y-4">
            <Link to="/" className="hover:text-gray-400 text-black text-lg font-bold">ACCUEIL</Link>
            <a href="#comiteHonneur" className="block px-4 py-2 text-black hover:bg-gray-100">COMITÉ D’HONNEUR</a>
            <Link to="/expositionVentes" className="hover:text-gray-400 text-black text-lg font-bold">Exposition-Ventes</Link>
            <Link to="/participer" className="hover:text-gray-400 text-black text-lg font-bold">PARTICIPER</Link>
            <Link to="/dinergala" className="hover:text-gray-400 text-black text-lg font-bold">DÎNER DE GALA</Link>
            <Link to="/sponsors" className="hover:text-gray-400 text-black text-lg font-bold">SPONSORS</Link>
            <Link to="/themeConferences" className="hover:text-gray-400 text-black text-lg font-bold">THÈMES DE CONFÉRENCES</Link>
            <Link to="/programmesConferences" className="hover:text-gray-400 text-black text-lg font-bold">Programme des Conférences</Link>
            <Link to="/contact" className="hover:text-gray-400 text-black text-lg font-bold">NOS COORDONNÉES</Link>

        </div>
      </div>

    </div>
  )
}




//////////////// C'est le bon
