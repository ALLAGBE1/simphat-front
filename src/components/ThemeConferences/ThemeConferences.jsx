

const ThemeConferances = () => {
    const themes = [
        {
          id: 1,
          title: "Médecine Traditionnelle : les avancées, défis et perspectives",
          speaker: "Programme National de la Pharmacopée et de la Médecine Traditionnelle du Bénin (PNPMT)",
          time: "Jour 1 10H20-10H50 "
        },
        {
          id: 2,
          title: "Complémentarité de la médecine traditionnelle naturelle pour les besoins de santé, beauté et bien être au Bénin en Afrique et dans le monde.",
          speaker: "Dr ASSOGBA  Abado Sylvestre",
          time: "Jour 1 11H30-12H "
        },
        {
          id: 3,
          title: "Traitement des ulcères gastro-intestinaux : plantes et recettes utilisées par les herboristes dans les communes d’Abomey-Calavi et Cotonou au Sud Bénin.",
          speaker: "Dr DAH-NOUVLESSOUNON Durand Marius",
          time: "Jour 1 12H-12H30"
        },
        {
          id: 4,
          title: "Exploration holistique de la médecine traditionnelle au Bénin : pratiques, interactions et perspectives sur l'utilisation des plantes médicinales.",
          speaker: "URMAPHA Prof DOUGNON",
          time: "Jour 1 13H30-15H"
        },
        {
            id: 5,
            title: "Combretum racemosum : un candidat pour la lutte contre les maladies métaboliques.",
            speaker: "Dr DAH-NOUVLESSOUNON Durand Marius",
            time: "Jour 2 9h-9h30 "
          },
          {
            id: 6,
            title: "Utilisation des feuilles et dérivés du manioc dans le traitement du cancer.",
            speaker: "Dr LENMAN HALFANE",
            time: "Jour 2 9h30-10h "
          },
          {
            id: 7,
            title: "Connaissances locales et pratiques traditionnelles de traitement des infections sexuellement transmissibles causées par chlamydia trachomatis au Bénin : une enquête ethno pharmacologique.",
            speaker: "URMAPHA Prof DOUGNON",
            time: "Jour 2 10h-10h30"
          },
          {
            id: 8,
            title: "Les médicaments traditionnels à base des plantes : Quelles Stratégies de communication.",
            speaker: "Dr SONIA LONMADON",
            time: "Jour 2 11h-11h 30 "
          },
          {
            id: 9,
            title: "Exploration de la biodiversité végétale et des pratiques médicinales traditionnelles des plantes médicinales au Bénin : Une revue systématique des recherches de la dernière décennie (2014-2023).",
            speaker: "URMAPHA Prof DOUGNON",
            time: "Jour 2 11h30-12h "
          },
          {
            id: 10,
            title: "Propriétés antioxydantes d’écorces de V. paradoxa et P.biglobosa, deux plantes communément utilisées dans le traitement des ulcères gastro-intestinaux.",
            speaker: "Dr DAH-NOUVLESSOUNON Durand Marius",
            time: "Jour 2 12h-12h30 "
          },
          {
            id: 11,
            title: "De l’idée à l’entreprise : les basiques pour une fondation solide.",
            speaker: "Dr KETE D. Colomb Consultant",
            time: "Jour 2 14h-14h30 "
          },
          {
            id: 12,
            title: "L’intérêt de l’expérimentation dans la Médecine Traditionnelle.",
            speaker: "Prof. AKPO MARIE THERESE née AKELE",
            time: "Jour 2 14h30-15h "
          },
          {
            id: 13,
            title: "Propriété anti-microbienne du Desmodium Rasmosissimum.",
            speaker: "Dr DAH-NOUVLESSOUNON Durand Marius",
            time: "Jour 3 9h-9h30 "
          },
          {
            id: 14,
            title: "Procédures d'homologation des médicaments à base de plantes au Bénin.",
            speaker: "ABRP Dr CHANTAL",
            time: "Jour 3 9h30-10h "
          },
          {
            id: 15,
            title: "La conciliation entre la médecine traditionnelle, la médecine moderne et la spiritualité.",
            speaker: "",
            time: "Jour 3 11h-13h  "
          },
          // {
          //   id: 16,
          //   title: "",
          //   speaker: "",
          //   time: ""
          // },
          
        // Ajoutez les autres éléments ici
      ];
    
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-customGreen">THÈMES DES COMMUNICATIONS</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-3 px-4 font-semibold text-sm border-r border-gray-200">N°</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm border-r border-gray-200">Titre de la Communication</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm border-r border-gray-200"></th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Horaires</th>
                </tr>
              </thead>
              <tbody>
                {themes.map((theme) => (
                  <tr key={theme.id} className="border-t border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">{theme.id}</td>
                    <td className="py-3 px-4 border-r border-gray-200">{theme.title}</td>
                    <td className="py-3 px-4 border-r border-gray-200">{theme.speaker}</td>
                    <td className="py-3 px-4">{theme.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
export default ThemeConferances;

