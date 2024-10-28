import { useState } from "react";
import DrJustin from "../assets/forPages/DrJustin.png";

const Hero = () => {
  const [showFullText, setShowFullText] = useState(false);

  const fullText = `Le Gouvernement béninois reconnaît désormais la Médecine traditionnelle comme un pilier de son système de santé. Pour soutenir cette vision, le Salon International de la Médecine et de la Pharmacopée Traditionnelles (SIMPHAT) vise à rassembler les acteurs du secteur pour valoriser cette pratique, utilisée par 80 % de la population.`;
  const shortText = `Le Gouvernement béninois reconnaît désormais la Médecine traditionnelle comme un pilier de son système de santé. Pour soutenir cette vision, le Salon International de la Médecine et de la Pharmacopée Traditionnelles (SIMPHAT)`;

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col sm:flex-row text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {/* Cacher l'image sur mobile en utilisant hidden sm:block */}
        <div className="w-full sm:w-1/2 hidden sm:flex">
          <div className="flex flex-col items-center">
            <img 
              src={DrJustin} 
              alt="Dr Justin" 
              className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" 
            />
            <h2 className="text-customGreen text-center">Dr Justin NOUDEDJI</h2>
            <h3 className="text-customBlack text-center">Initiateur et Coordonnateur Général du SIMPHAT</h3>
          </div>
        </div>

        <div className="w-full sm:w-4/5 p-8">
          <div              
            className="
              inline-block
              text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
              bg-customGreen text-white tracking-tight 
              py-2 px-4 rounded-lg mb-2
              max-w-lg
            "
          >
            OBJECTIFS DU SIMPHAT
          </div>

          {/* Texte tronqué avec bouton "Afficher plus" pour les petits écrans */}
          <div className="sm:hidden">
            <p className="mb-3">
              {showFullText ? fullText : shortText}
            </p>
            <button 
              onClick={() => setShowFullText(!showFullText)}
              className="text-blue-500 hover:text-blue-700 font-semibold focus:outline-none"
            >
              {showFullText ? "Afficher moins" : "Afficher plus"}
            </button>
          </div>

          {/* Texte complet pour les écrans sm et plus grands */}
          <p className="hidden sm:block mb-3">
            {fullText}
          </p>

          <p className="font-bold mt-4">
            Expositions-Ventes:  27 au 30 Novembre <br />
            Conférences-Débats: 27 au 29 Novembre <br />
            Diner de Gala: 30 Novembre
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;




////

// import DrJustin from "../assets/forPages/DrJustin.png"

// const Hero = () => {
//   return (
//     <div className="container mx-auto p-10">
//         <div className="flex flex-col sm:flex-row text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
//             <div className="w-full sm:w-1/2 bg-customYellow">
//                 <div className="flex flex-col items-center">
//                     <img 
//                         src={DrJustin} 
//                         alt="Dr Justin" 
//                         className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" 
//                         />
//                     <h2 className="text-customGreen text-center">Dr Justin NOUDEDJI</h2>
//                     <h3 className="text-customBlack text-center">Initiateur et Coordonnateur Général du SIMPHAT</h3>

//                 </div>
//             </div>
//             <div className="w-full sm:w-4/5 bg-red-600 p-8">
//                 <div              
//                     className="
//                     inline-block
//                     text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
//                     bg-customGreen text-white tracking-tight 
//                     py-2 px-4 rounded-lg mb-2
//                     max-w-lg
//                     "
//                 >
//                     OBJECTIFS DU SIMPHAT
//                 </div>
//                 <p className="mb-3">
//                     Le Gouvernement béninois reconnaît désormais la Médecine traditionnelle comme un pilier de son système de santé. Pour soutenir cette vision, le Salon International de la Médecine et de la Pharmacopée Traditionnelles (SIMPHAT) vise à rassembler les acteurs du secteur pour valoriser cette pratique, utilisée par 80 % de la population.
//                 </p>
//                 <p className="font-bold">
//                     Expositions-Ventes:  27 au 30 Novembre <br />
//                     Conférences-Débats: 27 au 29 Novembre <br />
//                     Diner de Gala: 30 Novembre
//                 </p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero


//////////////////

// import DrJustin from "../assets/forPages/DrJustin.png"

// const Hero = () => {
//   return (
//     // <div className="container lg:mb-35">
//     <div className="container mx-auto p-10">
//         <div className="flex flex-col sm:flex-row text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
//             <div className="w-full sm:w-1/2 bg-customYellow">
//                 <div className="flex flex-col items-center">
//                     <img 
//                         src={DrJustin} 
//                         alt="Dr Justin" 
//                         className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" 
//                         />
//                     <h2 className="text-customGreen text-center">Dr Justin NOUDEDJI</h2>
//                     <h3 className="text-customBlack text-center">Initiateur et Coordonnateur Général du SIMPHAT</h3>

//                 </div>
//             </div>
//             <div className="w-full sm:w-4/5 bg-red-600 p-8">
//                 {/* <div              
//                     className="
//                     text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-customGreen text-white tracking-tight py-2 px-4 rounded-lg mb-2">
//                     OBJECTIFS DU SIMPHAT
//                 </div> */}

//                 <div              
//                     className="
//                     inline-block
//                     text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
//                     bg-customGreen text-white tracking-tight 
//                     py-2 px-4 rounded-lg mb-2
//                     max-w-lg
//                     "
//                 >
//                     OBJECTIFS DU SIMPHAT
//                 </div>
//                 <p className="mb-3">
//                     {/* Le Gouvernement béninois a fait une place de choix à la Médecine traditionnelle dans la loi portant la protection de la santé des personnes, et donc une ambition clairement affichée de son chef de faire de ce secteur un des piliers du dispositif sanitaire du pays.
//                     Dans ce même élan, et pour soutenir la vision du Chef de l’Etat, le Salon International de la Médecine et de la Pharmacopée Traditionnelles (SIMPHAT) a pour objectif de réunir les acteurs du secteur afin de promouvoir et valoriser ce secteur jusqu’alors informel mais auquel 80% de la population fait recours. */}

//                     Le Gouvernement béninois reconnaît désormais la Médecine traditionnelle comme un pilier de son système de santé. Pour soutenir cette vision, le Salon International de la Médecine et de la Pharmacopée Traditionnelles (SIMPHAT) vise à rassembler les acteurs du secteur pour valoriser cette pratique, utilisée par 80 % de la population.
//                 </p>
//                 <p className="font-bold">
//                     Expositions-Ventes:  27 au 30 Novembre <br />
//                     Conférences-Débats: 27 au 29 Novembre <br />
//                     Diner de Gala: 30 Novembre
//                 </p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero


////////////////

// import presidentTalon from "../assets/forPages/presidentTalon.png"
// import { Link } from 'react-router-dom';



// const Hero = () => {
//   return (
//     // <div className="container lg:mb-35">
//     <div className="container mb-8">
//         <div className="max-w-7xl mx-auto p-10">
//             <div className="flex flex-col sm:flex-row items-start">

//                 <div className="w-full md:w-1/7 p-4 mb-4 sm:mb-0">
//                     <div className="flex flex-col mb-2 ">

//                         <div className="mb-10">
//                         <Link to="/contact" >
                            // <span 
                                
                            //     // className="bg-customGreen text-white text-4xl tracking-tight py-2 px-4 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out lg:items-start">
                            //     className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-customGreen text-white tracking-tight py-2 px-4 rounded-lg cursor-pointer">
                            //     OBJECTIFS DU SIMPHAT
                            // </span>
//                         </Link>
//                         </div>

//                         {/* <p className="text-customBlack font-bold  max-w-xl py-6 tracking-tighter text-2xl sm:text-3xl md:text-3xl lg:text-3xl"> */}
//                         <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack italic font-light py-6">
//                             Le Bénin possède un potentiel inexploité dans le domaine
//                             de l&apos;industrie pharmaceutique, malgré un constat alarmant de
//                             la production locale de médicaments est presque inexistante,
//                             avec moins de trois laboratoires fonctionnels et plus de 95% des
//                             médicaments importés. Face à cette situation, nous avons... 
//                         </p>

//                     </div>
//                 </div>


//                 <div className="w-full md:w-1/2 p-4">
//                     <div className="flex flex-col">
//                         <div className="mb-2">
//                             <img 
//                                 src={presidentTalon} alt="Kevin Rush" className=" " />
//                         </div>
//                         <h2 className="text-center text-[20px] md:text-[28px] lg:text-[28px] text-customGreen">SEM PATRICE A. G. TALON</h2>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero

