import PropTypes from "prop-types";
import { useState } from "react";

const ConferenceItem = ({ cover, title }) => {
  // État pour gérer l'affichage du texte complet ou tronqué
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour basculer entre l'affichage complet ou tronqué
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Limite de caractères avant d'afficher "Afficher plus"
  const characterLimit = 70; // Tu peux ajuster cette valeur

  // Si le texte est long, on le tronque et ajoute "Afficher plus" si isExpanded est false
  const displayedTitle = !isExpanded && title.length > characterLimit 
    ? (
      <>
        {title.substring(0, characterLimit)}...
        <button 
          onClick={toggleExpand} 
          className="text-blue-500 hover:underline"
        >
          Afficher plus
        </button>
      </>
    ) : (
      <>
        {title}
        {title.length > characterLimit && (
          <button 
            onClick={toggleExpand} 
            className="text-blue-500 hover:underline"
          >
            Afficher moins
          </button>
        )}
      </>
    );

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-auto">
      {cover && <img className="w-full" src={cover} alt="Card image cap" />}
      <div className="px-6 py-4">
        {/* Affichage du titre avec le bouton "Afficher plus" ou "Afficher moins" intégré */}
        <div className="font-bold mb-2">
          {/* Titre : {displayedTitle} */}
          Thème : {displayedTitle}
        </div>

        {/* Bouton Participer */}
        <button 
          className="px-4 py-2 border-2 border-green-500 text-green-500 bg-white rounded-lg hover:bg-green-500 hover:text-white transition duration-300 mb-4"
          style={{ borderWidth: '4px' }}
        >
          Participer
        </button>
      </div>
    </div>
  );
};

// Ajout des propTypes pour valider les props
ConferenceItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ConferenceItem;





/////////////////

// import PropTypes from "prop-types";

// const ConferenceItem = ({ cover, title }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg h-[370px]">
//       {cover && <img className="w-full" src={cover} alt="Card image cap" />}
//       <div className="px-6 py-4">
//         <div className="font-bold /**text-xl**/ mb-2">Titre : {title}</div>

//         {/* Bouton Participer */}
//         <button 
//           className="mt-4 px-4 py-2 border-2 border-green-500 text-green-500 bg-white rounded-lg hover:bg-green-500 hover:text-white transition duration-300"
//           style={{ borderWidth: '4px' }}
//         >
//           Participer
//         </button>
//       </div>
//     </div>
//   );
// };

// // Ajout des propTypes pour valider les props
// ConferenceItem.propTypes = {
//   cover: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
// };

// export default ConferenceItem;



///////////////////


// import PropTypes from "prop-types";

// const ConferenceItem = ({ cover, title }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg h-[370px]">
//       {cover && <img className="w-full" src={cover} alt="Card image cap" />}
//       <div className="px-6 py-4">
//         <div className="font-bold /**text-xl**/ mb-2">Titre : {title}</div>
        
//       </div>
//     </div>
//   );
// };

// // Ajout des propTypes pour valider les props
// ConferenceItem.propTypes = {
//   cover: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
// };

// export default ConferenceItem;



////////////////////


// import PropTypes from "prop-types";

// const ConferenceItem = ({ cover, title }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg h-[370px]">
//       {cover && <img className="w-full" src={cover} alt="Card image cap" />}
//       <div className="px-6 py-4">
//         <div className="font-bold /**text-xl**/ mb-2">Titre : {title}</div>
//         {/* <p className="text-gray-700 text-base">Intervenant : {speaker}</p>
//         <p className="text-gray-700 text-base">Heure : {time}</p>
//         <p className="text-gray-700 text-base">Date : {date}</p> */}
//       </div>
//     </div>
//   );
// };

// // Ajout des propTypes pour valider les props
// ConferenceItem.propTypes = {
//   cover: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
// };

// export default ConferenceItem;


/////////////////

// import PropTypes from "prop-types";

// const ConferenceItem = ({ cover, title, speaker, time, date }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg h-[370px]">
//       {cover && <img className="w-full" src={cover} alt="Card image cap" />}
//       <div className="px-6 py-4">
//         <div className="font-bold /**text-xl**/ mb-2">Titre : {title}</div>
//         <p className="text-gray-700 text-base">Intervenant : {speaker}</p>
//         <p className="text-gray-700 text-base">Heure : {time}</p>
//         <p className="text-gray-700 text-base">Date : {date}</p>
//       </div>
//     </div>
//   );
// };

// // Ajout des propTypes pour valider les props
// ConferenceItem.propTypes = {
//   cover: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
// };

// export default ConferenceItem;


///////////

// import PropTypes from "prop-types"



// const ConferenceItem = ({ cover, name, price, text }) => {
//     return (
//       <div className="max-w-sm rounded overflow-hidden shadow-lg h-[345px]">
//         <img className="w-full" src={cover} alt="Card image cap" />
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{name}</div>
//           <p className="text-gray-700 text-base">{text}</p>
//         </div>
//         {price && (
//           <div className="px-6 pt-4 pb-2">
//             <span className="text-gray-500">{price}</span>
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   // Ajout des propTypes pour valider les props
//   ConferenceItem.propTypes = {
//     cover: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.string,
//     text: PropTypes.string.isRequired,
//   }


// export default ConferenceItem



////////////


// import PropTypes from "prop-types"


// function handleClick(plantName) {
// 	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
// }

// function PlantItem({ cover, name, price }) {
// 	return (
// 		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
// 			<span className='lmj-plant-item-price'>{price}€</span>
// 			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
// 			{name}
// 			{/* <div>
// 				<CareScale careType='water' scaleValue={water} />
// 				<CareScale careType='light' scaleValue={light} />
// 			</div> */}
// 		</li>
// 	)
// }

// // Ajout des propTypes pour valider les props
// PlantItem.propTypes = {
//     cover: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     water: PropTypes.string,
//     light: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//   }

// export default PlantItem
