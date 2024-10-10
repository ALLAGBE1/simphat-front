import { motion } from "framer-motion";
import agenceRegulationPharmaceutique from "../assets/partenaires/ABMed.png";
import boutiqueLogo from "../assets/partenaires/boutiqueLogo.png";
import ms1 from "../assets/partenaires/ms1.png";
import pharmacieLogo from "../assets/partenaires/pharmacieLogo.png";
import uacLogo from "../assets/partenaires/uacLogo.png";

const images = [
  agenceRegulationPharmaceutique,
  boutiqueLogo,
  ms1,
  pharmacieLogo,
  uacLogo,
];

const Partenaires = () => {
  const scrollSpeed = 5; // Vitesse du défilement (ajustable)

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Partenaires
      </motion.h1>

      <div className="relative w-full overflow-hidden">
        {/* Conteneur principal */}
        <motion.div
          className="flex flex-nowrap items-center justify-center"
          animate={{ x: ["100%", "-100%"] }} // Mouvement infini de droite à gauche
          transition={{ repeat: Infinity, ease: "linear", duration: scrollSpeed * images.length }}
        >
          {/* Affichage des images dans le carrousel */}
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 p-4"
            >
              {/* Conteneur de l'image avec arrière-plan vert et dimensions spécifiques */}
              <div className="bg-gray-100 rounded-2xl w-[200px] h-[100px] flex items-center justify-center">
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-[230px] h-[130px] object-contain" // Image contenue dans les dimensions
                />
              </div>
            </motion.div>
          ))}

          {/* Dupliquer les images pour créer un effet de continuité */}
          {images.map((src, index) => (
            <motion.div
              key={`duplicate-${index}`}
              className="flex-shrink-0 p-4"
            >
              {/* Conteneur de l'image avec arrière-plan vert et dimensions spécifiques */}
              <div className="bg-gray-100 rounded-2xl w-[200px] h-[100px] flex items-center justify-center">
                <img
                  src={src}
                  alt={`Duplicate Image ${index + 1}`}
                  className="w-[230px] h-[130px] object-contain" // Image contenue dans les dimensions
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partenaires;





// import { motion } from "framer-motion";
// import agenceRegulationPharmaceutique from "../assets/partenaires/ABMed.png";
// import boutiqueLogo from "../assets/partenaires/boutiqueLogo.png";
// import ms1 from "../assets/partenaires/ms1.png";
// import pharmacieLogo from "../assets/partenaires/pharmacieLogo.png";
// import uacLogo from "../assets/partenaires/uacLogo.png";

// const images = [
//   agenceRegulationPharmaceutique,
//   boutiqueLogo,
//   ms1,
//   pharmacieLogo,
//   uacLogo,
// ];

// const Partenaires = () => {
//   const scrollSpeed = 5; // Vitesse du défilement (ajustable)

//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Partenaires
//       </motion.h1>

//       {/* rounded-lg bg-red-500 h-[300px] w-[550px] */}
//       <div className="relative w-full overflow-hidden">
//         {/* Conteneur principal */}
//         <motion.div
//           className="flex flex-nowrap items-center justify-center"
//           animate={{ x: ["100%", "-100%"] }} // Mouvement infini de droite à gauche
//           transition={{ repeat: Infinity, ease: "linear", duration: scrollSpeed * images.length }}
//         >
//           {/* Affichage des images dans le carrousel */}
//           {images.map((src, index) => (
//             <motion.div
//               key={index}
//               className="flex-shrink-0 w-full md:w-1/3 p-4" // Une image occupe tout l'écran sur mobile, 1/3 sur desktop
//             >
//               <img
//                 src={src}
//                 alt={`Image ${index + 1}`}
//                 className="rounded-2xl w-full h-48 object-cover" // Uniformiser la hauteur avec h-48
//               />
//             </motion.div>
//           ))}

//           {/* Dupliquer les images pour créer un effet de continuité */}
//           {images.map((src, index) => (
//             <motion.div
//               key={`duplicate-${index}`}
//               className="flex-shrink-0 w-full md:w-1/3 p-4"
//             >
//               <img
//                 src={src}
//                 alt={`Duplicate Image ${index + 1}`}
//                 className="rounded-2xl w-full object-cover" // Uniformiser la hauteur avec h-48
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Partenaires;






// import { motion } from "framer-motion";
// import agenceRegulationPharmaceutique from "../assets/partenaires/agenceRegulationPharmaceutique.png";
// import boutiqueLogo from "../assets/partenaires/boutiqueLogo.png";
// import ms1 from "../assets/partenaires/ms1.png";
// import pharmacieLogo from "../assets/partenaires/pharmacieLogo.png";
// import uacLogo from "../assets/partenaires/uacLogo.png";

// const images = [
//   agenceRegulationPharmaceutique,
//   boutiqueLogo,
//   ms1,
//   pharmacieLogo,
//   uacLogo,
// ];

// const Partenaires = () => {
//   const scrollSpeed = 5; // Vitesse du défilement (ajustable)

//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Partenaires
//       </motion.h1>

//       <div className="relative w-full overflow-hidden">
//         {/* Conteneur principal */}
//         <motion.div
//           className="flex flex-nowrap items-center justify-center"
//           animate={{ x: ["100%", "-100%"] }} // Mouvement infini de droite à gauche
//           transition={{ repeat: Infinity, ease: "linear", duration: scrollSpeed * images.length }}
//         >
//           {/* Affichage des images dans le carrousel */}
//           {images.map((src, index) => (
//             <motion.div
//               key={index}
//               className="flex-shrink-0 w-full md:w-1/3 p-4" // Une image occupe tout l'écran sur mobile, 1/3 sur desktop
//             >
//               <img
//                 src={src}
//                 alt={`Image ${index + 1}`}
//                 className="rounded-2xl border-4 w-full h-auto object-cover"
//               />
//             </motion.div>
//           ))}

//           {/* Dupliquer les images pour créer un effet de continuité */}
//           {images.map((src, index) => (
//             <motion.div
//               key={`duplicate-${index}`}
//               className="flex-shrink-0 w-full md:w-1/3 p-4"
//             >
//               <img
//                 src={src}
//                 alt={`Duplicate Image ${index + 1}`}
//                 className="rounded-2xl border-4 w-full h-auto object-cover"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Partenaires;






// import { motion } from "framer-motion";
// import agenceRegulationPharmaceutique from "../assets/partenaires/agenceRegulationPharmaceutique.png";
// import boutiqueLogo from "../assets/partenaires/boutiqueLogo.png";
// import ms1 from "../assets/partenaires/ms1.png";
// import pharmacieLogo from "../assets/partenaires/pharmacieLogo.png";
// import uacLogo from "../assets/partenaires/uacLogo.png";

// const images = [
//   agenceRegulationPharmaceutique,
//   boutiqueLogo,
//   ms1,
//   pharmacieLogo,
//   uacLogo,
// ];

// const Partenaires = () => {
//   const scrollSpeed = 20; // Contrôle la vitesse du défilement

//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Partenaires
//       </motion.h1>

//       <div className="overflow-hidden">
//         {/* Conteneur masquant le débordement */}
//         <motion.div
//           className="flex lg:flex-nowrap flex-wrap items-center justify-center"
//           animate={{ x: ["100%", "-100%"] }} // Défilement infini de droite à gauche
//           transition={{ repeat: Infinity, ease: "linear", duration: scrollSpeed }}
//         >
//           {images.map((src, index) => (
//             <motion.img
//               key={index}
//               src={src}
//               alt={`Image ${index + 1}`}
//               className="rounded-2xl border-4 p-4 w-72 h-96 object-cover"
//             />
//           ))}

//           {/* Répéter les images pour un effet de continuité */}
//           {images.map((src, index) => (
//             <motion.img
//               key={`duplicate-${index}`}
//               src={src}
//               alt={`Duplicate Image ${index + 1}`}
//               className="rounded-2xl border-4 p-4 w-72 h-96 object-cover"
//             />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Partenaires;




////////////

// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import agenceRegulationPharmaceutique from "../assets/partenaires/agenceRegulationPharmaceutique.png";
// import boutiqueLogo from "../assets/partenaires/boutiqueLogo.png";
// import ms1 from "../assets/partenaires/ms1.png";
// import pharmacieLogo from "../assets/partenaires/pharmacieLogo.png";
// import uacLogo from "../assets/partenaires/uacLogo.png";

// const Partenaires = () => {
//   const { scrollY } = useScroll(); // Capturer la position de défilement

//   // Utiliser la vélocité du défilement
//   const scrollVelocity = useSpring(scrollY, { stiffness: 100, damping: 30 });
  
//   // Transformer la vélocité du scroll en un mouvement de translation horizontale (de droite à gauche)
//   const xTransform1 = useTransform(scrollVelocity, [0, 500], [500, -500]); // Grande amplitude
//   const xTransform2 = useTransform(scrollVelocity, [0, 500], [400, -400]);
//   const xTransform3 = useTransform(scrollVelocity, [0, 500], [300, -300]);
//   const xTransform4 = useTransform(scrollVelocity, [0, 500], [200, -200]);
//   const xTransform5 = useTransform(scrollVelocity, [0, 500], [100, -100]); // Petite amplitude

//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <motion.h1 
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl">
//         Partenaires
//       </motion.h1>
      
//       <motion.div 
//         className="flex flex-wrap items-center justify-center gap-4">
        
//         {/* Appliquer les transformations horizontales */}
//         <motion.img 
//           src={agenceRegulationPharmaceutique} 
//           alt="Dr NOUDEDJI" 
//           className="rounded-2xl border-4 p-4 w-72 h-96 object-cover"
//           style={{ x: xTransform1 }} // Déplacer de droite à gauche
//         />
        
//         <motion.img 
//           src={boutiqueLogo} 
//           alt="Bio Tchane" 
//           className="rounded-2xl border-4 p-4 w-72 h-96 object-cover"
//           style={{ x: xTransform2 }} 
//         />
        
//         <motion.img 
//           src={ms1} 
//           alt="Hounkpatin" 
//           className="rounded-2xl border-4 p-4 w-72 h-96 object-cover"
//           style={{ x: xTransform3 }} 
//         />
        
//         <motion.img 
//           src={pharmacieLogo} 
//           alt="Image 4" 
//           className="rounded-2xl border-4 p-4 w-72 h-96 object-cover"
//           style={{ x: xTransform4 }} 
//         />
        
//         <motion.img 
//           src={uacLogo} 
//           alt="Image 5" 
//           className="rounded-2xl border-4 p-4 w-72 h-96 object-cover"
//           style={{ x: xTransform5 }} 
//         />
        
//       </motion.div>
//     </div>
//   );
// }

// export default Partenaires;
