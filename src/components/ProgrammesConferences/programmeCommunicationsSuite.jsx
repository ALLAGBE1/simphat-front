// Programme.js
import ms from "../../assets/partenaires/ms.png";
import abrp from "../../assets/partenaires/abrp.png";
import uac from "../../assets/partenaires/uac.png";
import urmapha from "../../assets/partenaires/urmapha.png";
import lbtmm from "../../assets/partenaires/lbtmm.png";


// import ms from "../../assets/partenaires/ms.png";

const ProgrammeCommunicationsSuite = () => {
  const programme = [
    {
      day: "DEUXIÈME JOURNÉE SUITE",
      sessions: [
        { time: "12H-12H30", activity: "COMMUNICATION 8", theme: "PROPRIÉTÉS ANTIOXYDANTES D'ÉCORCES DE V. PARADOXA ET P BIGLOBOSA, DEUX PLANTES COMMUNÉMENT UTILISÉES DANS LE TRAITEMENT DES ULCÈRES GASTRO-INTESTINAUX.", speaker: "Dr DAH-NOUVLESSOUNON Durand Marius" },
        { time: "13H-14H", activity: "PAUSE DÉJEUNER", theme: "", speaker: "" },
        { time: "14H-14H30", activity: "COMMUNICATION 9", theme: "DE L'IDÉE À L'ENTREPRISE : LES BASIQUES POUR UNE FONDATION SOLIDE.", speaker: "Dr KETE D. Colomb Consultant" },
        { time: "14H30-15H", activity: "COMMUNICATION 10", theme: "L'INTÉRÊT DE L'EXPÉRIMENTATION DANS LA MÉDECINE TRADITIONNELLE.", speaker: "Prof. AKPO MARIE THERESE née AKELE" },
        { time: "15H-18H", activity: "VISITE DES STANDS", theme: "", speaker: "" },

      ],
    },
    {
        day: "TROISIÈME JOURNÉE",
        sessions: [
            { time: "9H-9H30", activity: "INSTALLATION DES INVITÉS", theme: "", speaker: "" },
            { time: "9H30-10H", activity: "COMMUNICATION 11", theme: "PROPRIÉTÉ ANTI-MICROBIENNE DU DESMODIUM RASMOSISSIMUM.", speaker: "Dr DAH-NOUVLESSOUNON Durand Marius" },
            { time: "10H-10H30", activity: "COMMUNICATION 12", theme: "PROCÉDURES D'HOMOLOGATION DES MÉDICAMENTS À BASE DE PLANTES AU BÉNIN.", speaker: "ABRP, Dr CHANTAL" },
            { time: "10H30-11H", activity: "PAUSE CAFÉ", theme: "", speaker: "" },
            { time: "11H-13H", activity: "PANEL 2", theme: "LA CONCILIATION ENTRE LA MÉDECINE TRADITIONNELLE, LA MÉDECINE MODERNE ET LA SPIRITUALITÉ.", speaker: "" },
            { time: "13H-14H", activity: "PAUSE DÉJEUNER", theme: "", speaker: "" },
            { time: "14H-14H30", activity: "PRÉSENTATION DU RAPPORT GÉNÉRAL", theme: "", speaker: "" },
            { time: "14H30-14H40", activity: "DISCOURS DE CLÔTURE", theme: "", speaker: "" },
            { time: "14H40-15H30", activity: "COCKTAIL", theme: "", speaker: "" },
            { time: "16H-18H", activity: "VISITE DES STANDS", theme: "", speaker: "" },
        ],
    },
  ];

  return (
    <div className="p-4">
      {/* <h1 className="text-3xl font-bold text-center text-green-900 mb-6">PROGRAMME DU SIMPHAT 2024</h1> */}
      
      {programme.map((day, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-center text-green-800 mb-4">{day.day}</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-green-400">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-2 px-4 border border-green-400">HORAIRES</th>
                  <th className="py-2 px-4 border border-green-400">ACTIVITÉS</th>
                  <th className="py-2 px-4 border border-green-400">THÈMES</th>
                  <th className="py-2 px-4 border border-green-400">INTERVENANTS</th>
                </tr>
              </thead>
              <tbody>
                {day.sessions.map((session, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="py-2 px-4 border border-green-400">{session.time}</td>
                    <td className="py-2 px-4 border border-green-400">{session.activity}</td>
                    <td className="py-2 px-4 border border-green-400">{session.theme}</td>
                    <td className="py-2 px-4 border border-green-400">{session.speaker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Section Partenaires */}
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold text-green-900">PARTENAIRES ET INSTITUTIONS</h2>
        <img 
          src={ms} alt="Lolo Andoche" 
          className="w-5/6 sm:w-1/6 mx-auto " />

        <p>Programme National de la Pharmacopée et <br /> de la Médecine Traditionnelle (PNPMT)</p>

      </div>

      {/* <div className="flex justify-center space-x-4 mt-4 mx-auto"> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex justify-center">
          <img 
            src={abrp} 
            alt="Lolo Andoche" 
            className=""
            
          />

        </div>
        <div className="flex justify-center">
          <img 
            src={uac} 
            alt="Lolo Andoche" 
            className="" 
            width="170" 
            height="80" 
          />
        </div>
        <div className="flex justify-center">
          <img 
            src={urmapha} 
            alt="Lolo Andoche" 
            className="" 
            width="170" 
            height="80" 
          />
        </div>
        <div className="flex justify-center">
          <img 
            src={lbtmm} 
            alt="Lolo Andoche" 
            className="" 
            width="170" 
            height="80" 
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="text-base sm:text-lg md:text-xl xl:text-2xl lg:text-3xl">
          <p className="">1- Association Nationale de Tradipraticiens de la Médecine traditionnelle du Bénin <br /> (ANaPraMeTraB) : Prophète Gabriel SALAVI</p>
          <p className="">2- La Fédération des Associations Nationnales des Acteurs de la Médécine <br />Traditionnelle du Bénin (FANAMeTraB) : Dah Badjito Kitcè Basile</p>
          <p className="">3- Union des Organisations de Santé en Médecine Traditionnelle <br />(UOSMT) : Dah Kouglo Hontonyon Augustin</p>
          <p className="">4- Fédération Nationale de la Médecine Traditionnelle du Bénin <br /> (FeNaMeTraB) : Professeur AZIADOME Kogblevi</p>
          <p className="">5- Syndicat National des Médécins Intellectuels Traditionnels et assimilés du Bénin <br />(SyNaMITrAB) : Alphonse DANSOU</p>
          <p className="">6- Association des Praticiens de la Médecine Naturelle et Assimilés au Bénin <br /> (APraMeNAB) : Vincent KOUDOGBO</p>
        </div>
      </div>



    </div>
  );
};
 

export default ProgrammeCommunicationsSuite;
