import logo from "../../assets/logo/logo.png";
import barreBarre from "../../assets/header/barre-menu.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");
    setIsLoggedIn(!!token);
    if (token && storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userNumber");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
  };

  return (
    <div className="bg-customGreen py-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="logo" className="w-24 h-auto md:w-32 object-cover" />
        </div>

        {/* Textes */}
        <div className="text-center md:text-left">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold leading-snug">
            SALON INTERNATIONAL DE LA MÉDECINE ET DE LA PHARMACOPÉE TRADITIONNELLES
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customYellow font-bold mt-2 text-center">
            SIMPHAT 2024 <br /> <span className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl">PREMIÈRE ÉDITION</span> 
          </h2>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center text-white space-y-1 md:px-4 cursor-pointer" onClick={toggleMenu}>
          <img src={barreBarre} alt="MENU" className="w-6 h-auto md:w-8" />
          <p className="text-xs md:text-sm font-bold">MENU</p>
        </div>

      </div>

      {/* Barre latérale (Menu latéral) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-customGreen shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full "
        }`}
        style={{ transitionDuration: "300ms" }}
      >
        {/* Bouton de fermeture "X" dans le coin supérieur droit */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white font-bold text-2xl focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Contenu du menu latéral */}
        <div className="flex flex-col items-start p-4 space-y-4">
          {isLoggedIn && (
            <p className="text-white text-lg font-bold mb-4">{userName}</p>
          )}
          <Link to="/" className="hover:text-gray-200 text-white text-lg font-bold">ACCUEIL</Link>
          <Link to="/honoraryCommittee" className="hover:text-gray-200 text-white text-lg font-bold">COMITÉ D’HONNEUR</Link>
          <Link to="/sponsors" className="hover:text-gray-200 text-white text-lg font-bold">SPONSORS</Link>

          {/* Titre de section sans lien pour "ACTIVITÉS" */}
          <h2 className="text-lg font-bold mt-4 mb-2 text-customLightGray">ACTIVITÉS</h2>

          {/* Liens sous la section ACTIVITÉS */}
          <Link to="/expositionVentes" className="hover:text-gray-200 text-white text-lg font-bold">EXPOSITION-VENTES</Link>
          <Link to="/themeConferences" className="hover:text-gray-200 text-white text-lg font-bold">LES COMMUNICATIONS</Link>
          <Link to="/programmesConferences" className="hover:text-gray-200 text-white text-lg font-bold">PROGRAMME DU SIMPHAT</Link>
          <Link to="/dinergala" className="hover:text-gray-200 text-white text-lg font-bold">DÎNER DE GALA</Link>
          <Link to="/participer" className="hover:text-gray-200 text-white text-lg font-bold">PARTICIPER</Link>
          <Link to="/contact" className="hover:text-gray-200 text-white text-lg font-bold">CONTACT</Link>

          {/* Trait séparateur */}
          <hr className="border-t border-gray-200 w-full my-2" />

          {/* Lien "À PROPOS DU SIMPHAT" */}
          <Link to="/aboutus" className="hover:text-gray-200 text-white text-lg font-bold">À PROPOS DU SIMPHAT</Link>

          {/* Lien de connexion/déconnexion */}
          <div className="mt-auto space-y-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hover:text-gray-200 text-white text-lg font-bold"
              >
                DÉCONNECTER
              </button>
            ) : (
              <Link to="/auth" className="hover:text-gray-200 text-white text-lg font-bold">
                SE CONNECTER
              </Link>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};






// import logo from "../../assets/logo/logo.png";
// import barreBarre from "../../assets/header/barre-menu.svg";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre la connexion
//   const [userName, setUserName] = useState(""); // État pour stocker le nom de l'utilisateur
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Vérifie si le token est présent dans le localStorage pour déterminer la connexion
//     const token = localStorage.getItem("token");
//     const storedUserName = localStorage.getItem("userName"); // Récupère le nom de l'utilisateur
//     setIsLoggedIn(!!token);
//     if (token && storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, []);

//   // Fonction pour gérer l'ouverture/fermeture du menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Fonction de déconnexion
//   const handleLogout = () => {
//     // Supprime les données du localStorage
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userNumber");
//     setIsLoggedIn(false); // Met à jour l'état pour refléter la déconnexion
//     setUserName(""); // Efface le nom de l'utilisateur
//     navigate("/"); // Redirige vers la page d'accueil après déconnexion
//   };

//   return (
//     <div className="bg-customGreen py-4">
//       <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4">
        
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img src={logo} alt="logo" className="w-24 h-auto md:w-32 object-cover" />
//         </div>

//         {/* Textes */}
//         <div className="text-center md:text-left">
//           <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold leading-snug">
//             SALON INTERNATIONAL DE LA MÉDECINE ET DE LA PHARMACOPÉE TRADITIONNELLES
//           </h1>
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customYellow font-bold mt-2 text-center">
//             SIMPHAT 2024 <br /> <span className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl">PREMIÈRE ÉDITION</span> 
//           </h2>
//         </div>

//         {/* Menu */}
//         <div className="flex flex-col items-center text-white space-y-1 md:px-4 cursor-pointer" onClick={toggleMenu}>
//           <img src={barreBarre} alt="MENU" className="w-6 h-auto md:w-8" />
//           <p className="text-xs md:text-sm font-bold">MENU</p>
//         </div>

//       </div>

//       {/* Barre latérale (Menu latéral) */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full "
//         }`}
//         style={{ transitionDuration: "300ms" }}
//       >
//         {/* Bouton de fermeture "X" dans le coin supérieur droit */}
//         <div className="flex justify-end p-4">
//           <button
//             onClick={toggleMenu}
//             className="text-customGreen font-bold text-2xl focus:outline-none"
//           >
//             &times; {/* Ce caractère spécial représente un "X" */}
//           </button>
//         </div>

//         {/* Contenu du menu latéral */}
//         <div className="flex flex-col items-start p-4 space-y-4">
//             {isLoggedIn && (
//               // <p className="text-black text-lg font-bold mb-4">Bonjour, {userName}</p>
//               <p className="text-black text-lg font-bold mb-4">{userName}</p>
//             )}
//             <Link to="/" className="hover:text-gray-400 text-black text-lg font-bold">ACCUEIL</Link>
//             <Link to="/honoraryCommittee" className="hover:text-gray-400 text-black text-lg font-bold">COMITÉ D’HONNEUR</Link>
//             <Link to="/sponsors" className="hover:text-gray-400 text-black text-lg font-bold">SPONSORS</Link>
//             <h2 className="">ACTIVITES</h2>
//             <Link to="/expositionVentes" className="hover:text-gray-400 text-black text-lg font-bold">Exposition-Ventes</Link>
//             <Link to="/themeConferences" className="hover:text-gray-400 text-black text-lg font-bold">LES COMMUNICATIONS</Link>
//             <Link to="/programmesConferences" className="hover:text-gray-400 text-black text-lg font-bold">PROGRAMME DU SIMPHAT</Link>
//             <Link to="/dinergala" className="hover:text-gray-400 text-black text-lg font-bold">DÎNER DE GALA</Link>
//             <Link to="/participer" className="hover:text-gray-400 text-black text-lg font-bold">PARTICIPER</Link>
//             {/* <Link to="/themeConferences" className="hover:text-gray-400 text-black text-lg font-bold">THÈMES DE CONFÉRENCES</Link> */}
//             <Link to="/contact" className="hover:text-gray-400 text-black text-lg font-bold">À PROPOS DU SIMPHAT</Link>

//           {/* Lien de connexion/déconnexion */}
//           <div className="mt-auto space-y-4">
//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="hover:text-gray-400 text-black text-lg font-bold"
//               >
//                 DÉCONNECTER
//               </button>
//             ) : (
//               <Link to="/auth" className="hover:text-gray-400 text-black text-lg font-bold">
//                 SE CONNECTER
//               </Link>
//             )}
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };



///////////////////


// import logo from "../../assets/logo/logo.png";
// import barreBarre from "../../assets/header/barre-menu.svg";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre la connexion
//   const [userName, setUserName] = useState(""); // État pour stocker le nom de l'utilisateur
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Vérifie si le token est présent dans le localStorage pour déterminer la connexion
//     const token = localStorage.getItem("token");
//     const storedUserName = localStorage.getItem("userName"); // Récupère le nom de l'utilisateur
//     setIsLoggedIn(!!token);
//     if (token && storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, []);

//   // Fonction pour gérer l'ouverture/fermeture du menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Fonction de déconnexion
//   const handleLogout = () => {
//     // Supprime les données du localStorage
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userNumber");
//     setIsLoggedIn(false); // Met à jour l'état pour refléter la déconnexion
//     setUserName(""); // Efface le nom de l'utilisateur
//     navigate("/"); // Redirige vers la page d'accueil après déconnexion
//   };

//   return (
//     <div className="bg-customGreen py-4">
//       <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4">
        
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img src={logo} alt="logo" className="w-24 h-auto md:w-32 object-cover" />
//         </div>

//         {/* Textes */}
//         <div className="text-center md:text-left">
//           <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold leading-snug">
//             SALON INTERNATIONAL DE LA MÉDECINE ET DE LA PHARMACOPÉE TRADITIONNELLES
//           </h1>
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customYellow font-bold mt-2 text-center">
//             SIMPHAT 2024 <br /> <span className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl">PREMIÈRE ÉDITION</span> 
//           </h2>
//         </div>

//         {/* Menu */}
//         <div className="flex flex-col items-center text-white space-y-1 md:px-4 cursor-pointer" onClick={toggleMenu}>
//           <img src={barreBarre} alt="MENU" className="w-6 h-auto md:w-8" />
//           <p className="text-xs md:text-sm font-bold">MENU</p>
//         </div>

//       </div>

//       {/* Barre latérale (Menu latéral) */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full "
//         }`}
//         style={{ transitionDuration: "300ms" }}
//       >
//         {/* Bouton de fermeture "X" dans le coin supérieur droit */}
//         <div className="flex justify-end p-4">
//           <button
//             onClick={toggleMenu}
//             className="text-customGreen font-bold text-2xl focus:outline-none"
//           >
//             &times; {/* Ce caractère spécial représente un "X" */}
//           </button>
//         </div>

//         {/* Contenu du menu latéral */}
//         <div className="flex flex-col items-start p-4 space-y-4">
//             {isLoggedIn && (
//               // <p className="text-black text-lg font-bold mb-4">Bonjour, {userName}</p>
//               <p className="text-black text-lg font-bold mb-4">{userName}</p>
//             )}
//             <Link to="/" className="hover:text-gray-400 text-black text-lg font-bold">ACCUEIL</Link>
//             <Link to="/honoraryCommittee" className="hover:text-gray-400 text-black text-lg font-bold">COMITÉ D’HONNEUR</Link>
//             <Link to="/sponsors" className="hover:text-gray-400 text-black text-lg font-bold">SPONSORS</Link>
//             <h2 className="">ACTIVITES</h2>
//             <Link to="/expositionVentes" className="hover:text-gray-400 text-black text-lg font-bold">Exposition-Ventes</Link>
//             <Link to="/themeConferences" className="hover:text-gray-400 text-black text-lg font-bold">LES COMMUNICATIONS</Link>
//             <Link to="/programmesConferences" className="hover:text-gray-400 text-black text-lg font-bold">PROGRAMME DU SIMPHAT</Link>
//             <Link to="/dinergala" className="hover:text-gray-400 text-black text-lg font-bold">DÎNER DE GALA</Link>
//             <Link to="/participer" className="hover:text-gray-400 text-black text-lg font-bold">PARTICIPER</Link>
//             {/* <Link to="/themeConferences" className="hover:text-gray-400 text-black text-lg font-bold">THÈMES DE CONFÉRENCES</Link> */}
//             <Link to="/contact" className="hover:text-gray-400 text-black text-lg font-bold">À PROPOS DU SIMPHAT</Link>

//           {/* Lien de connexion/déconnexion */}
//           <div className="mt-auto space-y-4">
//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="hover:text-gray-400 text-black text-lg font-bold"
//               >
//                 DÉCONNECTER
//               </button>
//             ) : (
//               <Link to="/auth" className="hover:text-gray-400 text-black text-lg font-bold">
//                 SE CONNECTER
//               </Link>
//             )}
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };




// import logo from "../../assets/logo/logo.png";
// import barreBarre from "../../assets/header/barre-menu.svg";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre la connexion
//   const [userName, setUserName] = useState(""); // État pour stocker le nom de l'utilisateur
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Vérifie si le token est présent dans le localStorage pour déterminer la connexion
//     const token = localStorage.getItem("token");
//     const storedUserName = localStorage.getItem("userName"); // Récupère le nom de l'utilisateur
//     setIsLoggedIn(!!token);
//     if (token && storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, []);

//   // Fonction pour gérer l'ouverture/fermeture du menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Fonction de déconnexion
//   const handleLogout = () => {
//     // Supprime les données du localStorage
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userNumber");
//     setIsLoggedIn(false); // Met à jour l'état pour refléter la déconnexion
//     setUserName(""); // Efface le nom de l'utilisateur
//     navigate("/"); // Redirige vers la page d'accueil après déconnexion
//   };

//   return (
//     <div className="bg-customGreen py-4">
//       <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4">
        
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img src={logo} alt="logo" className="w-24 h-auto md:w-32 object-cover" />
//         </div>

//         {/* Textes */}
//         <div className="text-center md:text-left">
//           <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold leading-snug">
//             SALON INTERNATIONAL DE LA MÉDECINE ET DE LA PHARMACOPÉE TRADITIONNELLES
//           </h1>
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customYellow font-bold mt-2 text-center">
//             (SIMPHAT) PREMIÈRE ÉDITION
//           </h2>
//         </div>

//         {/* Menu */}
//         <div className="flex flex-col items-center text-white space-y-1 md:px-4 cursor-pointer" onClick={toggleMenu}>
//           <img src={barreBarre} alt="MENU" className="w-6 h-auto md:w-8" />
//           <p className="text-xs md:text-sm font-bold">MENU</p>
//         </div>

//       </div>

//       {/* Barre latérale (Menu latéral) */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{ transitionDuration: "300ms" }}
//       >
//         {/* Bouton de fermeture "X" dans le coin supérieur droit */}
//         <div className="flex justify-end p-4">
//           <button
//             onClick={toggleMenu}
//             className="text-customGreen font-bold text-2xl focus:outline-none"
//           >
//             &times; {/* Ce caractère spécial représente un "X" */}
//           </button>
//         </div>

//         {/* Contenu du menu latéral */}
//         <div className="flex flex-col items-start p-4 space-y-4">
//             {isLoggedIn && (
//               <p className="text-black text-lg font-bold mb-4">Bonjour, {userName}</p>
//             )}
//             <Link to="/" className="hover:text-gray-400 text-black text-lg font-bold">ACCUEIL</Link>
//             <Link to="/honoraryCommittee" className="hover:text-gray-400 text-black text-lg font-bold">COMITÉ D’HONNEUR</Link>
//             {/* <a href="#comiteHonneur" className="block px-4 py-2 text-black hover:bg-gray-100">COMITÉ D’HONNEUR</a> */}
//             <Link to="/expositionVentes" className="hover:text-gray-400 text-black text-lg font-bold">Exposition-Ventes</Link>
//             <Link to="/participer" className="hover:text-gray-400 text-black text-lg font-bold">PARTICIPER</Link>
//             <Link to="/dinergala" className="hover:text-gray-400 text-black text-lg font-bold">DÎNER DE GALA</Link>
//             <Link to="/sponsors" className="hover:text-gray-400 text-black text-lg font-bold">SPONSORS</Link>
//             <Link to="/themeConferences" className="hover:text-gray-400 text-black text-lg font-bold">THÈMES DE CONFÉRENCES</Link>
//             <Link to="/programmesConferences" className="hover:text-gray-400 text-black text-lg font-bold">Programme des Conférences</Link>
//             <Link to="/contact" className="hover:text-gray-400 text-black text-lg font-bold">NOS COORDONNÉES</Link>

//           {/* Lien de connexion/déconnexion */}
//           <div className="mt-auto space-y-4">
//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="hover:text-gray-400 text-black text-lg font-bold"
//               >
//                 DÉCONNECTER
//               </button>
//             ) : (
//               <Link to="/auth" className="hover:text-gray-400 text-black text-lg font-bold">
//                 SE CONNECTER
//               </Link>
//             )}
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };


/////////////////

// import logo from "../../assets/logo/logo.png";
// import barreBarre from "../../assets/header/barre-menu.svg";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre la connexion
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Vérifie si le token est présent dans le localStorage pour déterminer la connexion
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   // Fonction pour gérer l'ouverture/fermeture du menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Fonction de déconnexion
//   const handleLogout = () => {
//     // Supprime les données du localStorage
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userNumber");
//     setIsLoggedIn(false); // Met à jour l'état pour refléter la déconnexion
//     navigate("/"); // Redirige vers la page d'accueil après déconnexion
//   };

//   return (
//     <div className="bg-customGreen py-4">
//       <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4">
        
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img src={logo} alt="logo" className="w-24 h-auto md:w-32 object-cover" />
//         </div>

//         {/* Textes */}
//         <div className="text-center md:text-left">
//           <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold leading-snug">
//             SALON INTERNATIONAL DE LA MÉDECINE ET DE LA PHARMACOPÉE TRADITIONNELLES
//           </h1>
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customYellow font-bold mt-2 text-center">
//             (SIMPHAT) PREMIÈRE ÉDITION
//           </h2>
//         </div>

//         {/* Menu */}
//         <div className="flex flex-col items-center text-white space-y-1 md:px-4 cursor-pointer" onClick={toggleMenu}>
//           <img src={barreBarre} alt="MENU" className="w-6 h-auto md:w-8" />
//           <p className="text-xs md:text-sm font-bold">MENU</p>
//         </div>

//       </div>

//       {/* Barre latérale (Menu latéral) */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{ transitionDuration: "300ms" }}
//       >
//         {/* Bouton de fermeture "X" dans le coin supérieur droit */}
//         <div className="flex justify-end p-4">
//           <button
//             onClick={toggleMenu}
//             className="text-customGreen font-bold text-2xl focus:outline-none"
//           >
//             &times; {/* Ce caractère spécial représente un "X" */}
//           </button>
//         </div>

//         {/* Contenu du menu latéral */}
//         <div className="flex flex-col items-start p-4 space-y-4">
//             <Link to="/" className="hover:text-gray-400 text-black text-lg font-bold">ACCUEIL</Link>
//             <a href="#comiteHonneur" className="block px-4 py-2 text-black hover:bg-gray-100">COMITÉ D’HONNEUR</a>
//             <Link to="/expositionVentes" className="hover:text-gray-400 text-black text-lg font-bold">Exposition-Ventes</Link>
//             <Link to="/participer" className="hover:text-gray-400 text-black text-lg font-bold">PARTICIPER</Link>
//             <Link to="/dinergala" className="hover:text-gray-400 text-black text-lg font-bold">DÎNER DE GALA</Link>
//             <Link to="/sponsors" className="hover:text-gray-400 text-black text-lg font-bold">SPONSORS</Link>
//             <Link to="/themeConferences" className="hover:text-gray-400 text-black text-lg font-bold">THÈMES DE CONFÉRENCES</Link>
//             <Link to="/programmesConferences" className="hover:text-gray-400 text-black text-lg font-bold">Programme des Conférences</Link>
//             <Link to="/contact" className="hover:text-gray-400 text-black text-lg font-bold">NOS COORDONNÉES</Link>

//           {/* Lien de connexion/déconnexion */}
//           <div className="mt-auto space-y-4">
//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="hover:text-gray-400 text-black text-lg font-bold"
//               >
//                 DÉCONNECTER
//               </button>
//             ) : (
//               <Link to="/auth" className="hover:text-gray-400 text-black text-lg font-bold">
//                 SE CONNECTER
//               </Link>
//             )}
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };


/////////


// import logo from "../../assets/logo/logo.png"
// import barreBarre from "../../assets/header/barre-menu.svg"
// import  { useState } from "react";
// import { Link } from 'react-router-dom';

// export const Header = () => {


//     // Gestion de l'état du menu (ouvert/fermé)
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     // Fonction pour gérer l'ouverture/fermeture du menu
//     const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     };

//   return (
//     <div className="bg-customGreen py-4">
//       <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4 ">
        
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img src={logo} alt="logo" className="w-24 h-auto md:w-32 object-cover " />
//         </div>

//         {/* Textes */}
//         <div className="text-center md:text-left">
//           <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//             text-white font-bold leading-snug">
//             SALON INTERNATIONAL DE LA MÉDECINE ET DE LA PHARMACOPÉE TRADITIONNELLES
//           </h1>
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//             text-customYellow font-bold mt-2 text-center">
//             (SIMPHAT) PREMIÈRE ÉDITION
//           </h2>
//         </div>

//         {/* Menu */}
//         <div className="flex flex-col items-center text-white space-y-1 md:px-4 cursor-pointer" onClick={toggleMenu}>
//           <img src={barreBarre} alt="MENU" className="w-6 h-auto md:w-8" />
//           <p className="text-xs md:text-sm font-bold">MENU</p>
//         </div>

//       </div>

//       {/* Barre latérale (Menu latéral) */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{ transitionDuration: "300ms" }}
//       >
//         {/* Bouton de fermeture "X" dans le coin supérieur droit */}
//         <div className="flex justify-end p-4">
//           <button
//             onClick={toggleMenu}
//             className="text-customGreen font-bold text-2xl focus:outline-none"
//           >
//             &times; {/* Ce caractère spécial représente un "X" */}
//           </button>
//         </div>

//         {/* Contenu du menu latéral */}
//         <div className="flex flex-col items-start p-4 space-y-4">
//             <Link to="/" className="hover:text-gray-400 text-black text-lg font-bold">ACCUEIL</Link>
//             <a href="#comiteHonneur" className="block px-4 py-2 text-black hover:bg-gray-100">COMITÉ D’HONNEUR</a>
//             <Link to="/expositionVentes" className="hover:text-gray-400 text-black text-lg font-bold">Exposition-Ventes</Link>
//             <Link to="/participer" className="hover:text-gray-400 text-black text-lg font-bold">PARTICIPER</Link>
//             <Link to="/dinergala" className="hover:text-gray-400 text-black text-lg font-bold">DÎNER DE GALA</Link>
//             <Link to="/sponsors" className="hover:text-gray-400 text-black text-lg font-bold">SPONSORS</Link>
//             <Link to="/themeConferences" className="hover:text-gray-400 text-black text-lg font-bold">THÈMES DE CONFÉRENCES</Link>
//             <Link to="/programmesConferences" className="hover:text-gray-400 text-black text-lg font-bold">Programme des Conférences</Link>
//             <Link to="/contact" className="hover:text-gray-400 text-black text-lg font-bold">NOS COORDONNÉES</Link>

//             {/* <Link to="/contact" className="hover:text-gray-400 text-black text-lg font-bold">S&apos;INSCRIRE</Link>
//             <Link to="/contact" className="hover:text-gray-400 text-black text-lg font-bold">SE CONNECTER</Link> */}

//           <div className="mt-auto space-y-4">
//             <Link to="/auth" className="hover:text-gray-400 text-black text-lg font-bold">SE CONNECTER</Link>
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }




//////////////// C'est le bon