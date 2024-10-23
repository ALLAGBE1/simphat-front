
const ThemeConferances = () => {
    const themes = [
        {
          id: 1,
          title: "Combretum racemosum : un candidat pour la lutte contre les maladies métaboliques",
          speaker: "Dr DAH-NOUVLESSOUNON Durand Marius",
          time: ""
        },
        {
          id: 2,
          title: "Complémentarité de la médecine traditionnelle naturelle pour les besoins de santé, beauté et bien-être au Bénin en Afrique et dans le monde.",
          speaker: "Prof. AÏGBÉ Marcellin",
          time: ""
        },
        {
          id: 3,
          title: "Utilisation des feuilles et dérivés du manioc dans le traitement du cancer.",
          speaker: "",
          time: ""
        },
        {
          id: 4,
          title: "Connaissances locales et pratiques traditionnelles de traitement des infections sexuellement transmissibles causées par chlamydia trachomatis au Bénin : une enquête ethnopharmacologique",
          speaker: "",
          time: ""
        },
        {
            id: 5,
            title: "Exploration holistique de la médecine traditionnelle au Bénin : pratiques, interactions et perspectives sur l'utilisation des plantes médicinales.",
            speaker: "",
            time: ""
          },
          {
            id: 6,
            title: "Propriétés antioxydantes d’écorces de V. paradoxa et P.biglobosa, deux plantes communément utilisées dans le traitement des ulcères gastro-intestinaux.",
            speaker: "",
            time: ""
          },
          {
            id: 7,
            title: "Traitement des ulcères gastro-intestinaux : plantes et recettes utilisées par les herboristes dans les communes d’Abomey-Calavi et Cotonou au Sud Bénin.",
            speaker: "",
            time: ""
          },
          {
            id: 8,
            title: "Exploration de la biodiversité végétale et des pratiques médicinales traditionnelles des plantes médicinales au Bénin : Une revue systématique des recherches de la dernière décennie (2014-2023)",
            speaker: "",
            time: ""
          },
          {
            id: 9,
            title: "Propriété anti-microbienne du Desmodium Rasmosissimum",
            speaker: "",
            time: ""
          },
          {
            id: 10,
            title: "Les médicaments traditionnels à base des plantes : Quelles Stratégies de communication.",
            speaker: "Dr SONIA LONMADON",
            time: ""
          },
          {
            id: 11,
            title: "La santé et l’assurance maladie au Canada : Un droit : Comment le Canada a réussi en 50 ans à assurer des soins de santés de qualités à tous les citoyens.",
            speaker: "",
            time: ""
          },
          {
            id: 12,
            title: "L’assurance vie et santé au Canada : un mécanisme privé par lequel la maladie dérange peu la santé financière des malades et leur famille.",
            speaker: "Michel FRAGASSO Consultant",
            time: ""
          },
          {
            id: 13,
            title: "Médecine Traditionnelle les avancées, défis et perspectives. Programme National de la Médecine Traditionnelle du Bénin",
            speaker: "Michel FRAGASSO Consultant",
            time: ""
          },
          {
            id: 14,
            title: "Procédures d'homologation des médicaments à base de plantes au Bénin ABRP",
            speaker: "",
            time: ""
          },
          {
            id: 15,
            title: "Volontariat réponse efficace aux problèmes de chômage  des jeunes",
            speaker: "Dr KETE D. Colomb Consultant",
            time: ""
          },
          {
            id: 16,
            title: "De l’idée à l’entreprise : base sur une fondation solide",
            speaker: "Dr KETE D. Colomb Consultant",
            time: ""
          },
          {
            id: 17,
            title: "L’intérêt de l’expérimentation dans la médecine traditionnelle",
            speaker: "Prof. AKPO ANNE-MARIE née AKELE",
            time: ""
          },
        //   {
        //     id: 18,
        //     title: "",
        //     speaker: "",
        //     time: ""
        //   },
        // Ajoutez les autres éléments ici
      ];
    
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Thèmes de Conférences</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-3 px-4 font-semibold text-sm border-r border-gray-200">N°</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm border-r border-gray-200">Titre de la Communication</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm border-r border-gray-200">Nom et Prénoms des Communicateurs</th>
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