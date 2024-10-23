// import { Link } from 'react-router-dom';
// import salle1 from "../assets/forPages/salle1.png";
// import salle2 from "../assets/forPages/salle2.png";
// import salle3 from "../assets/forPages/salle3.png";
// // Importation de l'icône de localisation depuis react-icons
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { motion } from "framer-motion"

// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {duration: 0.5, delay: delay}
//     }
// })

// const projects = [
//   {
//     id: 1,
//     location: "Chant D'oiseau, Cotonou, Benin",
//     image: salle1,
//   },
//   {
//     id: 2,
//     location: "Chant D'oiseau, Cotonou, Benin",
//     image: salle2,
//   },
//   {
//     id: 3,
//     location: "Chant D'oiseau, Cotonou, Benin",
//     image: salle3,
//   },
// ];

// const Participer = () => {
//   return (
//     <div className="text-white sm:mb-0" id="participer">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-customGreen text-4xl font-bold text-center mb-12">Participer</h2>
//         <h2 className="text-black text-4xl font-bold text-center mb-12">Aux différentes conférences</h2>
//         <div className="flex flex-col">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//                 {projects.map((project) => (
//                     <div key={project.id} className="shadow-lg p-6 rounded-lg hover:shadow-lg 
//                     transform transition-transform duration-300 hover:scale-105">
//                     {/* Conserver la photo de la conférence */}
//                     <img src={project.image} alt={project.location} className="rounded-lg mb-4 
//                     w-full h-48 object-cover" />

//                     {/* Afficher l'icône de localisation avec le lieu */}
//                     <div className="flex items-center">
//                         <FaMapMarkerAlt className="text-red-500 mr-2" />
//                         <p className="text-black font-bold">{project.location}</p>
//                     </div>
//                     </div>
//                 ))}
//             </div>
                
//             <Link to="/conferences" className='hover:text-gray-400 text-black'>
//                 <div className="flex justify-center">
//                     <motion.span 
//                         variants={container(0.5)}
//                         initial="hidden"
//                         animate="visible"
//                         className="bg-customGreen text-white font-bold mb-20 tracking-tight py-2 px-4 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out lg:items-start" style={{fontSize: 18}}>
//                         CONSULTER LES THEMES DE CONFERENCES
//                     </motion.span>
//                 </div>
//             </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Participer;




////////////////

// import salle1 from "../assets/forPages/salle1.png";
// import salle2 from "../assets/forPages/salle2.png";
// import salle3 from "../assets/forPages/salle3.png";

// const projects = [
//   {
//     id: 1,
//     name: "Employee MS",
//     technologies: "MERN Stack",
//     image: salle1,
//     github: "https://github.com/YouafKhan1",
//   },
//   {
//     id: 2,
//     name: "Blog App",
//     technologies: "MERN Stack",
//     image: salle2,
//     github: "https://github.com/YouafKhan1",
//   },
//   {
//     id: 3,
//     name: "Book MS",
//     technologies: "MERN Stack",
//     image: salle3,
//     github: "https://github.com/YouafKhan1",
//   },
// ];

// const Participer = () => {
//   return (
//     <div className=" text-white py-20" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-customGreen text-4xl font-bold text-center mb-12">Participer</h2>
//         <h2 className="text-black text-4xl font-bold text-center mb-12">Aux différentes conférences</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div key={project.id} className="bg-gray-400 p-6 rounded-lg hover:shadow-lg 
//             transform transition-transform duration-300 hover:scale-105">
//               <img src={project.image} alt={project.name} className="rounded-lg mb-4 
//               w-full h-48 object-cover" />
//               <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
//               <p className="text-gray-400 mb-4">{project.technologies}</p>
//               <a href={project.github} className="inline-block bg-gradient-to-r 
//               from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
//               rel="noopener noreferrer">GitHub</a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Participer;
