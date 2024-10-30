// Programme.js

const ProgrammeCommunications = () => {
  const programme = [
    {
      day: "PREMIÈRE JOURNÉE",
      sessions: [
        { time: "9H-9H30", activity: "INSTALLATION DES INVITÉS", theme: "", speaker: "" },
        { time: "9H30-9H40", activity: "ALLOCUTION DU PRÉSIDENT DU COMITÉ D'ORGANISATION", theme: "", speaker: "" },
        { time: "9H40-9H50", activity: "ALLOCUTION DU PRÉSIDENT SCIENTIFIQUE", theme: "", speaker: "" },
        { time: "9H50-10H05", activity: "MOT DU MINISTRE DE SANTÉ OU SON REPRÉSENTANT", theme: "", speaker: "" },
        { time: "10H05-10H20", activity: "ALLOCUTION DU PARRAIN", theme: "", speaker: "" },
        { time: "10H20-10H50", activity: "CONFÉRENCE INAUGURALE", theme: "MÉDECINE TRADITIONNELLE : LES AVANCÉES, DÉFIS ET PERSPECTIVES", speaker: "Programme National de la Pharmacopée et de la Médecine Traditionnelle du Bénin (PNPMT)" },
        { time: "10H50-11H30", activity: "PAUSE CAFÉ", theme: "", speaker: "" },
        { time: "11H30-12H", activity: "COMMUNICATION 1", theme: "COMPLÉMENTARITÉ DE LA MÉDECINE TRADITIONNELLE NATURELLE POUR LES BESOINS DE SANTÉ, BEAUTÉ ET BIEN ÊTRE AU BÉNIN EN AFRIQUE ET DANS LE MONDE.", speaker: "Dr ASSOGBA Abado Sylvestre" },
        { time: "12H-12H30", activity: "COMMUNICATION 2", theme: "TRAITEMENT DES ULCÈRES GASTRO-INTESTINAUX : PLANTES ET RECETTES UTILISÉES PAR LES HERBORISTES DANS LES COMMUNES D'ABOMEY-CALAVI ET COTONOU AU SUD BÉNIN.", speaker: "Dr DAH-NOUVLESSOUNON Durand Marius" },
        { time: "12H30-13H30", activity: "PAUSE DÉJEUNER", theme: "", speaker: "" },
        { time: "13H30-15H", activity: "PANEL 1", theme: "EXPLORATION HOLISTIQUE DE LA MÉDECINE TRADITIONNELLE AU BÉNIN : PRATIQUES, INTERACTIONS ET PERSPECTIVES SUR L'UTILISATION DES PLANTES MÉDICINALES.", speaker: "URMAPHA, Prof DOUGNON" },
        { time: "15H-18H", activity: "VISITE DES STANDS", theme: "", speaker: "" },
      ],
    },
    {
      day: "DEUXIÈME JOURNÉE",
      sessions: [
        { time: "8H30-9H", activity: "INSTALLATION DES INVITÉS", theme: "", speaker: "" },
        { time: "9H-9H30", activity: "COMMUNICATION 3", theme: "COMBRETUM RACEMOSUM : UN CANDIDAT POUR LA LUTTE CONTRE LES MALADIES MÉTABOLIQUES.", speaker: "Dr DAH-NOUVLESSOUNON Durand Marius" },
        { time: "9H30-10H", activity: "COMMUNICATION 4", theme: "UTILISATION DES FEUILLES ET DÉRIVÉS DU MANIOC DANS LE TRAITEMENT DU CANCER.", speaker: "Dr LEMAN HALFANE" },
        { time: "10H-10H30", activity: "COMMUNICATION 5", theme: "CONNAISSANCES LOCALES ET PRATIQUES TRADITIONNELLES DE TRAITEMENT DES INFECTIONS SEXUELLEMENT TRANSMISSIBLES CAUSÉES PAR CHLAMYDIA TRACHOMATIS AU BÉNIN : UNE ENQUÊTE ETHNO PHARMACOLOGIQUE.", speaker: "URMAPHA, Prof DOUGNON" },
        { time: "10H30-11H", activity: "PAUSE CAFÉ", theme: "", speaker: "" },
        { time: "11H-11H30", activity: "COMMUNICATION 6", theme: "LES MÉDICAMENTS TRADITIONNELS À BASE DES PLANTES : QUELLES STRATÉGIES DE COMMUNICATION.", speaker: "Dr SONIA LONMADON" },
        { time: "11H30-12H", activity: "COMMUNICATION 7", theme: "EXPLORATION DE LA BIODIVERSITÉ VÉGÉTALE ET DES PRATIQUES MÉDICINALES TRADITIONNELLES DES PLANTES MÉDICINALES AU BÉNIN : UNE REVUE SYSTÉMATIQUE DES RECHERCHES DE LA DERNIÈRE DÉCENNIE (2014-2023).", speaker: "URMAPHA, Prof DOUGNON" },
      ],
    },
  ];

  return (
    <div className="p-4">
        <div className='bg-green-600 text-white py-1'>
            <h1 className="text-3xl font-bold text-center mb-6">PROGRAMME DU SIMPHAT 2024</h1>
        </div>
        <br />
      
        {programme.map((day, index) => (
            <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-center text-green-800 mb-4">{day.day}</h2>
                
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-green-400">
                        <thead>
                            <tr className="bg-green-600 text-white">
                                <th className="py-2 px-4 border">Horaires</th>
                                <th className="py-2 px-4 border">Activités</th>
                                <th className="py-2 px-4 border">Thèmes</th>
                                <th className="py-2 px-4 border">Intervenants</th>
                            </tr>
                        </thead>
                        <tbody>
                            {day.sessions.map((session, i) => (
                                <tr key={i} className="border-b border-green-300">
                                    <td className="py-2 px-4 border">{session.time}</td>
                                    <td className="py-2 px-4 border">{session.activity}</td>
                                    <td className="py-2 px-4 border">{session.theme}</td>
                                    <td className="py-2 px-4 border">{session.speaker}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        ))}
    </div>
  );
};

export default ProgrammeCommunications;
