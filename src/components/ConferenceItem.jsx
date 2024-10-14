import PropTypes from "prop-types";

const ConferenceItem = ({ cover, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-[370px]">
      {cover && <img className="w-full" src={cover} alt="Card image cap" />}
      <div className="px-6 py-4">
        <div className="font-bold /**text-xl**/ mb-2">Titre : {title}</div>
        {/* <p className="text-gray-700 text-base">Intervenant : {speaker}</p>
        <p className="text-gray-700 text-base">Heure : {time}</p>
        <p className="text-gray-700 text-base">Date : {date}</p> */}
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
