import ProgrammeCommunications from "./programmeCommunications";
import ProgrammeCommunicationsSuite from "./programmeCommunicationsSuite";

const ProgrammesConferences = () => {
 

  return (
    <div className="container mx-auto p-10">
     <ProgrammeCommunications />
     <ProgrammeCommunicationsSuite />
    </div>
  );
};

export default ProgrammesConferences;




// const ProgrammesConferences = () => {
//   const days = [
//     {
//       title: "1ERE JOURNÉE",
//       events: [
//         { time: "8H30-9H", activity: "INSTALLATION DES INVITÉS" },
//         { time: "9H-9H10", activity: "ALLOCUTION DU PRÉSIDENT DU COMITÉ D'ORGANISATION" },
//         { time: "9H10-9H20", activity: "ALLOCUTION DU PRÉSIDENT SCIENTIFIQUE" },
//         { time: "9H20-9H35", activity: "MOT DU MINISTRE DE SANTÉ OU SON REPRÉSENTANT" },
//         { time: "9H35-9H50", activity: "ALLOCUTION DU PARRAIN" },
//         { time: "9H50-10H30", activity: "CONFÉRENCE INAUGURALE" },
//         { time: "10H30-11H", activity: "PAUSE CAFÉ" },
//         { time: "11H-11H30", activity: "COMMUNICATION 1" },
//         { time: "11H30-12H", activity: "COMMUNICATION 2" },
//         { time: "12H-12H30", activity: "COMMUNICATION 3" },
//         { time: "13H-14H", activity: "PAUSE DÉJEUNER" },
//         { time: "14H-16H", activity: "PANEL 1" },
//         { time: "16H-18H", activity: "VISITE DES STANDS" },
//       ],
//     },
//     {
//       title: "2EME JOURNÉE",
//       events: [
//         { time: "8H30-9H", activity: "INSTALLATION DES INVITÉS" },
//         { time: "9H-9H30", activity: "COMMUNICATION 4" },
//         { time: "9H30-10H", activity: "COMMUNICATION 5" },
//         { time: "10H-10H30", activity: "COMMUNICATION 6" },
//         { time: "10H30-11H", activity: "PAUSE CAFÉ" },
//         { time: "11H-11H30", activity: "COMMUNICATION 7" },
//         { time: "11H30-12H", activity: "COMMUNICATION 8" },
//         { time: "12H-12H30", activity: "COMMUNICATION 9" },
//         { time: "13H-14H", activity: "PAUSE DÉJEUNER" },
//         { time: "14H-14H30", activity: "COMMUNICATION 10" },
//         { time: "14H30-15H", activity: "COMMUNICATION 11" },
//         { time: "15H-15H30", activity: "COMMUNICATION 12" },
//         { time: "15H30-16H", activity: "COMMUNICATION 13" },
//         { time: "16H-18H", activity: "VISITE DES STANDS" },
//       ],
//     },
//     {
//       title: "3EME JOURNÉE",
//       events: [
//         { time: "8H30-9H", activity: "INSTALLATION DES INVITÉS" },
//         { time: "9H-9H30", activity: "COMMUNICATION 14" },
//         { time: "9H30-10H", activity: "COMMUNICATION 15" },
//         { time: "10H-10H30", activity: "COMMUNICATION 16" },
//         { time: "10H30-11H", activity: "PAUSE CAFÉ" },
//         { time: "11H-13H", activity: "PANEL 2" },
//         { time: "13H-14H", activity: "PAUSE DÉJEUNER" },
//         { time: "14H-14H30", activity: "PRÉSENTATION DU RAPPORT GÉNÉRAL" },
//         { time: "14H30-14H40", activity: "DISCOURS DE CLÔTURE" },
//         { time: "14H40-15H30", activity: "COCKTAIL" },
//         { time: "15H30-18H", activity: "VISITE DES STANDS" },
//       ],
//     },
//   ];

//   return (
//     <div className="container mx-auto p-10">
//       <h1 className="text-3xl font-bold text-center mb-8">Programme des Conférences</h1>
//       {days.map((day, index) => (
//         <div key={index} className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">{day.title}</h2>
//           <ul className="space-y-4">
//             {day.events.map((event, idx) => (
//               <li key={idx} className="flex justify-start">
//                 <span className="font-medium">{event.time}</span> :  <span className="ml-2">{event.activity}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProgrammesConferences;
