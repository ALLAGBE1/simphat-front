import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from "../assets/simphatLogo.png";

const Navbar = () => {
  // État pour gérer l'affichage du menu déroulant
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Référence pour le conteneur du menu
  const menuRef = useRef(null);

  // Fonction pour gérer le clic sur MENU et basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour fermer le menu si on clique à l'extérieur
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);  // Fermer le menu si le clic est en dehors
    }
  };

  // Ajouter l'écouteur d'événements quand le composant est monté
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    
    // Nettoyer l'écouteur d'événements quand le composant est démonté
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className='text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <img src={logo} alt="" width={150} height={125} className="hidden md:inline" />
        <div className="flex flex-col py-10 relative" ref={menuRef}>
          <div className='space-x-6'>
            <Link to="/" className='hover:text-gray-400 text-black'>ACCUEIL</Link>
            
            {/* MENU avec menu déroulant activé par clic */}
            <div className="relative inline-block text-left">
              <Link to="/" className='hover:text-gray-400 text-black'>
                <button
                  onClick={toggleMenu}  // Toggle le menu au clic
                  className='hover:text-gray-400 text-black cursor-pointer'
                >
                  MENU
                </button>
              </Link>

              {/* Sous-menu qui s'affiche au clic */}
              {isMenuOpen && (
                <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <a href="#participer" className="block px-4 py-2 text-black hover:bg-gray-100">Participer</a>
                  <a href="#exposition" className="block px-4 py-2 text-black hover:bg-gray-100">Exposition / Ventes</a>
                  <a href="#diner" className="block px-4 py-2 text-black hover:bg-gray-100">Diner de gala</a>
                </div>
              )}
            </div>

            <Link to="/conferences" className='hover:text-gray-400 text-black'>CONFÉRENCES</Link>
            <Link to="/blog" className='hover:text-gray-400 text-black'>BLOG</Link>
            <Link to="/contact" className='hover:text-gray-400 text-black'>CONTACTS</Link>

            <button className='bg-green-500 text-white hidden md:inline
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Se connecter</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



//////////////////


// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import logo from "../assets/simphatLogo.png";

// const Navbar = () => {
//   // État pour gérer l'affichage du menu déroulant
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Fonction pour gérer le clic sur MENU et basculer l'état du menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className='text-white px-8 md:px-16 lg:px-24'>
//       <div className='container py-2 flex justify-center md:justify-between items-center'>
//         <img src={logo} alt="" width={150} height={125} className="hidden md:inline" />
//         <div className="flex flex-col py-10 relative">
//           <div className='space-x-6'>
//             <Link to="/" className='hover:text-gray-400 text-black'>ACCUEIL</Link>
            
//             {/* MENU avec menu déroulant activé par clic */}
//             <div className="relative inline-block text-left">
//               <button
//                 onClick={toggleMenu}  // Toggle le menu au clic
//                 className='hover:text-gray-400 text-black cursor-pointer'
//               >
//                 MENU
//               </button>

//               {/* Sous-menu qui s'affiche au clic */}
//               {isMenuOpen && (
//                 <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
//                   <a href="#participer" className="block px-4 py-2 text-black hover:bg-gray-100">Participer</a>
//                   <a href="#exposition" className="block px-4 py-2 text-black hover:bg-gray-100">Exposition / Ventes</a>
//                   <a href="#diner" className="block px-4 py-2 text-black hover:bg-gray-100">Diner de gala</a>
//                 </div>
//               )}
//             </div>

//             <Link to="/conferences" className='hover:text-gray-400 text-black'>CONFÉRENCES</Link>
//             <Link to="/blog" className='hover:text-gray-400 text-black'>BLOG</Link>
//             <a href="#contact" className='hover:text-gray-400 text-black'>CONTACTS</a>

//             <button className='bg-green-500 text-white hidden md:inline
//               transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Se connecter</button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;


///////////

// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import logo from "../assets/simphatLogo.png";

// const Navbar = () => {
//   // État pour gérer l'affichage du menu déroulant
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className='text-white px-8 md:px-16 lg:px-24'>
//       <div className='container py-2 flex justify-center md:justify-between items-center'>
//         <img src={logo} alt="" width={150} height={125} className="hidden md:inline" />
//         <div className="flex flex-col py-10 relative">
//           <div className='space-x-6'>
//             {/* <a href="#home" className='hover:text-gray-400 text-black'>ACCUEIL</a> */}
//             {/* <a href="Home.jsx" className='hover:text-gray-400 text-black'>ACCUEIL</a> */}
//             <Link to="/" className='hover:text-gray-400 text-black'>ACCUEIL</Link>
            
//             {/* MENU avec menu déroulant */}
//             <div
//               className="relative inline-block text-left"
//               onMouseEnter={() => setIsMenuOpen(true)}
//               onMouseLeave={() => setIsMenuOpen(false)}
//             >
//               {/* <a href="#" className='hover:text-gray-400 text-black cursor-pointer'>MENU</a> */}
//               <Link to="/" className='hover:text-gray-400 text-black cursor-pointer'>MENU</Link>

//               {/* Sous-menu qui s'affiche au survol */}
//               {isMenuOpen && (
//                 <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
//                   <a href="#participer" className="block px-4 py-2 text-black hover:bg-gray-100">Participer</a>
//                   <a href="#exposition" className="block px-4 py-2 text-black hover:bg-gray-100">Exposition / Ventes</a>
//                   <a href="#diner" className="block px-4 py-2 text-black hover:bg-gray-100">Diner de gala</a>
//                   {/* <a href="#conferences" className="block px-4 py-2 text-black hover:bg-gray-100">CONSULTER LES THEMES DE CONFERENCES</a> */}
//                 </div>
//               )}
//             </div>


//             <Link to="/conferences" className='hover:text-gray-400 text-black'>CONFÉRENCES</Link>
//             <Link to="/blog" className='hover:text-gray-400 text-black'>BLOG</Link>
//             <a href="#contact" className='hover:text-gray-400 text-black'>CONTACTS</a>

//             <button className='bg-green-500 text-white hidden md:inline
//               transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Se connecter</button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;


////////////


// import logo from "../assets/simphatLogo.png"



// const Navbar = () => {
//   return (
//     <nav className='text-white px-8 md:px-16 lg:px-24'>
//         <div className='container py-2 flex justify-center md:justify-between items-center'>
//             <img src={logo} alt="" width={150} height={125} className="hidden md:inline" />
//             <div className="flex flex-col py-10">
//               <div className='space-x-6'>
//                   <a href="#home" className='hover:text-gray-400 text-black'>ACCUEIL</a>
//                   <a href="#about" className='hover:text-gray-400 text-black'>MENU</a>
//                   <a href="#service" className='hover:text-gray-400 text-black'>BLOG</a>
//                   <a href="#project" className='hover:text-gray-400 text-black'>BOUTIQUE</a>
//                   <a href="#contact" className='hover:text-gray-400 text-black'>CONTACTS</a>

//                   <button className='bg-green-500 text-white hidden md:inline
//                     transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Se connecter</button>
//               </div>
              
//             </div>    
//         </div>
//     </nav>
//   )
// }

// export default Navbar




//////////////////

// import logo from "../assets/simphatLogo.png"



// const Navbar = () => {
//   return (
//     <nav className='text-white px-8 md:px-16 lg:px-24'>
//         <div className='container py-2 flex justify-center md:justify-between items-center'>
//             <img src={logo} alt="" width={150} height={125} className="hidden md:inline" />
//             <div className="flex flex-col py-10">
//               <div className='space-x-6'>
//                   <a href="#home" className='hover:text-gray-400 text-black'>ACCUEIL</a>
//                   <a href="#about" className='hover:text-gray-400 text-black'>MENU</a>
//                   <a href="#service" className='hover:text-gray-400 text-black'>BLOG</a>
//                   <a href="#project" className='hover:text-gray-400 text-black'>BOUTIQUE</a>
//                   <a href="#contact" className='hover:text-gray-400 text-black'>CONTACTS</a>
//               </div>
//               <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//                 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
//             </div>    
//         </div>
//               {/* <div className='flex justify-center'>

//                 <p className="text-green-900 font-light tracking-tighter my-10 text-4xl text-end">
//                     SALON INTERNATIONAL DE LA MEDECINE ET <br /> DE LA PHARMACOPEE TRADITIONNELLE <br />
//                     <span className="text-black  ">(SIMPHAT 2024)</span>
//                 </p>
//               </div> */}
//     </nav>
//   )
// }

// export default Navbar





// import logo from "../assets/simphatLogo.png"



// const Navbar = () => {
//   return (
//     <nav className='text-white px-8 md:px-16 lg:px-24'>
//         <div className='container py-2 flex justify-center md:justify-between items-center'>
//             {/* <div className='text-2xl font-bold hidden md:inline'>Yousof</div> */}
//             {/* <img src={logo} alt="" className="h-15 hidden md:inline" />rounded-full */}
//             <img src={logo} alt="" width={110} height={110} className="hidden md:inline" />
//             <div className='space-x-6'>
//                 <a href="#home" className='hover:text-gray-400 text-black'>Home</a>
//                 <a href="#about" className='hover:text-gray-400 text-black'>About Me</a>
//                 <a href="#service" className='hover:text-gray-400 text-black'>Services</a>
//                 <a href="#project" className='hover:text-gray-400 text-black'>Projects</a>
//                 <a href="#contact" className='hover:text-gray-400 text-black'>Contact</a>
//             </div>
//             <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
//         </div>
//     </nav>
//   )
// }

// export default Navbar




// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import logo from "../assets/simphatLogo.png"


// const navigation = [
//   { name: 'Accueil', href: '#', current: false },
//   { name: 'Menu', href: '#', current: false },
//   { name: 'Blog', href: '#', current: false },
//   { name: 'Boutique', href: '#', current: false },
//   { name: 'Contacts', href: '#', current: true },

// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src={logo}
//                 // width={150}
//                 // height={150}
//                 className="h-14 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-green-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="h-6 w-6" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     className="h-8 w-8 rounded-full"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 transition
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//               >
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Settings
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }





////////////////

// const Navbar = () => {
//   return (
//     <nav className='bg-[#2C3E50] text-white px-8 md:px-16 lg:px-24 w-full'>
//         <div className='container py-2 flex justify-center md:justify-between items-center'>
//             <div className='text-[#4CAF50] text-2xl font-bold hidden md:inline'>SIMPHAT</div>
//             <div className='space-x-6'>
//                 <a href="#home" className='hover:text-gray-400'>Accueil</a>
//                 <a href="#about" className='hover:text-gray-400'>A propos</a>
//                 <a href="#service" className='hover:text-gray-400'>Services</a>
//                 {/* <a href="#project" className='hover:text-gray-400'>Projects</a> */}
//                 <a href="#contact" className='hover:text-gray-400'>Contact</a>
//             </div>
//             <button className='bg-gradient-to-r from-[#4CAF50] to-[#1578db] text-white hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connexion</button>
//         </div>
//     </nav>
//   )
// }

// export default Navbar






