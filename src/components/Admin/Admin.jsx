import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";

const EspaceAdmin = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Non Validé"); // Onglet actif
  const [userCount, setUserCount] = useState(0); // État pour le nombre d'utilisateurs

  // Fonction pour charger les activités en fonction de l'onglet actif
  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      const status = activeTab === "Non Validé" ? "false" : "true";
      try {
        const response = await fetch(`https://simphat-api.vercel.app/registerActivity/status/${status}`);
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [activeTab]);

  // Fonction pour valider une activité
  const handleValidation = async (id) => {
    try {
      // Appel API pour valider l'activité
      const response = await fetch(`https://simphat-api.vercel.app/registerActivity/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: true }),
      });

      if (response.ok) {
        // Mise à jour de la liste d'activités en retirant l'activité validée
        setActivities((prevActivities) => prevActivities.filter((activity) => activity._id !== id));
      } else {
        console.error("Erreur lors de la validation de l'activité :", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la validation :", error);
    }
  };

  // Fonction pour récupérer le nombre d'utilisateurs
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch("https://simphat-api.vercel.app/users/count");
        const data = await response.json();
        setUserCount(data.count); // Assurez-vous que la réponse a bien une clé `count`
      } catch (error) {
        console.error("Erreur lors de la récupération du nombre d'utilisateurs :", error);
      }
    };

    fetchUserCount();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Barre latérale gauche */}
      <aside className="w-1/5 bg-green-100 flex flex-col items-center p-4">
        <div className="mb-1">
          {/* Logo */}
          <img src={logo} alt="Logo SIMPHAT" className="w-32 h-auto" />
        </div>
        <h2 className="text-center text-xs mt-2"></h2>
      </aside>

      {/* Contenu principal */}
      <main className="w-3/5 p-8">
        {/* Barre de navigation des onglets */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("Non Validé")}
            className={`px-4 py-2 font-semibold ${activeTab === "Non Validé" ? "text-white bg-green-600" : "text-green-600 bg-white"} border rounded`}
          >
            Non Validé
          </button>
          <button
            onClick={() => setActiveTab("Validé")}
            className={`px-4 py-2 font-semibold ${activeTab === "Validé" ? "text-white bg-green-600" : "text-green-600 bg-white"} border rounded`}
          >
            Validé
          </button>
        </div>

        {/* Affichage des activités en fonction de l'onglet sélectionné */}
        <section>
          <h2 className="text-xl font-semibold text-center mb-4">
            {activeTab === "Non Validé" ? "Activités en attente de validation" : "Activités validées"}
          </h2>
          {loading ? (
            <p className="text-center">Chargement des données...</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Nom</th>
                  <th className="py-2 px-4 border-b">Numéro</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Activité</th>
                  <th className="py-2 px-4 border-b">Montant</th>
                  <th className="py-2 px-4 border-b">Statut</th>
                  {activeTab === "Non Validé" && <th className="py-2 px-4 border-b">Action</th>}
                </tr>
              </thead>
              <tbody>
                {activities.map((item) => (
                  <tr key={item._id} className="text-center">
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">{item.number}</td>
                    <td className="py-2 px-4 border-b">{item.email}</td>
                    <td className="py-2 px-4 border-b">{item.activitySimphat.activitySimphat}</td>
                    <td className="py-2 px-4 border-b">{item.activitySimphat.amount}</td>
                    <td className="py-2 px-4 border-b text-red-500 font-semibold">
                      {item.status ? "Validé" : "Non Validé"}
                    </td>
                    {activeTab === "Non Validé" && (
                      <td className="py-2 px-4 border-b">
                        <button
                          onClick={() => handleValidation(item._id)}
                          className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                        >
                          Valider
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>

      {/* Conteneur principal pour les deux parties */}
      <aside className="w-1/5 flex flex-col items-center">
        {/* Partie 1 : Profil admin */}
        <div className="w-full bg-green-800 text-white p-4 flex flex-col items-center">
          <div className="text-center">
            {/* Image circulaire pour l'avatar */}
            <div className="bg-white rounded-full w-16 h-16 mx-auto mb-2"></div>
            <h3 className="text-yellow-400">simphatinfo@.com</h3>
            <p className="text-sm">PAGE MANAGER</p>
            <button className="text-white mt-4 underline">DÉCONNECTER</button>
          </div>
        </div>

        {/* Partie 2 : Statistiques */}
        <div className="w-full bg-green-200 text-white p-4 flex flex-col items-center">
          <div className="space-y-8 text-center">
            {/* Bloc Utilisateurs */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
                <p className="text-xl text-green-900">{userCount}</p> {/* Affichage du nombre d'utilisateurs */}
              </div>
              <p className="mt-2 text-sm font-semibold text-green-900">UTILISATEURS</p>
            </div>

            {/* Bloc En Ligne */}

            <div className="flex flex-col items-center">
              {/* <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
                <p className="text-xl text-green-900">0</p>
              </div>
              <p className="mt-2 text-sm font-semibold text-green-900">EN LIGNE</p> */}
            </div>

            {/* Bloc Événements en cours */}

            <div className="flex flex-col items-center">
              {/* <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
                <p className="text-xl text-green-900">0</p>
              </div>
              <p className="mt-2 text-sm font-semibold text-green-900">ÉVÉNEMENTS EN COURS</p> */}
            </div>

            {/* Bloc Produits Commandés */}
            
            <div className="flex flex-col items-center">
              {/* <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
                <p className="text-xl text-green-900">0</p>
              </div>
              <p className="mt-2 text-sm font-semibold text-green-900">PRODUITS COMMANDÉS</p> */}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default EspaceAdmin;


///

// import { useEffect, useState } from "react";
// import logo from "../../assets/logo/logo.png";

// const EspaceAdmin = () => {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("Non Validé"); // Onglet actif

//   // Fonction pour charger les données en fonction de l'onglet actif
//   useEffect(() => {
//     const fetchActivities = async () => {
//       setLoading(true);
//       const status = activeTab === "Non Validé" ? "false" : "true";
//       try {
//         const response = await fetch(`https://simphat-api.vercel.app/registerActivity/status/${status}`);
//         const data = await response.json();
//         setActivities(data);
//       } catch (error) {
//         console.error("Erreur lors du chargement des données :", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchActivities();
//   }, [activeTab]);

//   // Fonction pour valider une activité
//   const handleValidation = async (id) => {
//     try {
//       // Appel API pour valider l'activité
//       const response = await fetch(`https://simphat-api.vercel.app/registerActivity/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status: true }),
//       });

//       if (response.ok) {
//         // Mise à jour de la liste d'activités en retirant l'activité validée
//         setActivities((prevActivities) => prevActivities.filter((activity) => activity._id !== id));
//       } else {
//         console.error("Erreur lors de la validation de l'activité :", response.statusText);
//       }
//     } catch (error) {
//       console.error("Erreur lors de la validation :", error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Barre latérale gauche */}
//       <aside className="w-1/5 bg-green-100 flex flex-col items-center p-4">
//         <div className="mb-1">
//           {/* Logo */}
//           <img src={logo} alt="Logo SIMPHAT" className="w-32 h-auto" />
//         </div>
//         <h2 className="text-center text-xs mt-2"></h2>
//       </aside>

//       {/* Contenu principal */}
//       <main className="w-3/5 p-8">
//         {/* Barre de navigation des onglets */}
//         <div className="flex justify-center space-x-4 mb-6">
//           <button
//             onClick={() => setActiveTab("Non Validé")}
//             className={`px-4 py-2 font-semibold ${activeTab === "Non Validé" ? "text-white bg-green-600" : "text-green-600 bg-white"} border rounded`}
//           >
//             Non Validé
//           </button>
//           <button
//             onClick={() => setActiveTab("Validé")}
//             className={`px-4 py-2 font-semibold ${activeTab === "Validé" ? "text-white bg-green-600" : "text-green-600 bg-white"} border rounded`}
//           >
//             Validé
//           </button>
//         </div>

//         {/* Affichage des activités en fonction de l'onglet sélectionné */}
//         <section>
//           <h2 className="text-xl font-semibold text-center mb-4">
//             {activeTab === "Non Validé" ? "Activités en attente de validation" : "Activités validées"}
//           </h2>
//           {loading ? (
//             <p className="text-center">Chargement des données...</p>
//           ) : (
//             <table className="min-w-full bg-white border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="py-2 px-4 border-b">Nom</th>
//                   <th className="py-2 px-4 border-b">Numéro</th>
//                   <th className="py-2 px-4 border-b">Email</th>
//                   <th className="py-2 px-4 border-b">Activité</th>
//                   <th className="py-2 px-4 border-b">Montant</th>
//                   <th className="py-2 px-4 border-b">Statut</th>
//                   {activeTab === "Non Validé" && <th className="py-2 px-4 border-b">Action</th>}
//                 </tr>
//               </thead>
//               <tbody>
//                 {activities.map((item) => (
//                   <tr key={item._id} className="text-center">
//                     <td className="py-2 px-4 border-b">{item.name}</td>
//                     <td className="py-2 px-4 border-b">{item.number}</td>
//                     <td className="py-2 px-4 border-b">{item.email}</td>
//                     <td className="py-2 px-4 border-b">{item.activitySimphat.activitySimphat}</td>
//                     <td className="py-2 px-4 border-b">{item.activitySimphat.amount}</td>
//                     <td className="py-2 px-4 border-b text-red-500 font-semibold">
//                       {item.status ? "Validé" : "Non Validé"}
//                     </td>
//                     {activeTab === "Non Validé" && (
//                       <td className="py-2 px-4 border-b">
//                         <button
//                           onClick={() => handleValidation(item._id)}
//                           className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
//                         >
//                           Valider
//                         </button>
//                       </td>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </section>
//       </main>

//       {/* Conteneur principal pour les deux parties */}
//       <aside className="w-1/5 flex flex-col items-center">
//         {/* Partie 1 : Profil admin */}
//         <div className="w-full bg-green-800 text-white p-4 flex flex-col items-center">
//           <div className="text-center">
//             {/* Image circulaire pour l'avatar */}
//             <div className="bg-white rounded-full w-16 h-16 mx-auto mb-2"></div>
//             <h3 className="text-yellow-400">simphatinfo@.com</h3>
//             <p className="text-sm">PAGE MANAGER</p>
//             <button className="text-white mt-4 underline">DÉCONNECTER</button>
//           </div>
//         </div>

//         {/* Partie 2 : Statistiques */}
//         <div className="w-full bg-green-200 text-white p-4 flex flex-col items-center">
//           <div className="space-y-8 text-center">
//             {/* Bloc Utilisateurs */}
//             <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">UTILISATEURS</p>
//             </div>

//             {/* Bloc En Ligne */}

//             {/* <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">EN LIGNE</p>
//             </div> */}

//             {/* Bloc Événements en cours */}

//             {/* <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">ÉVÉNEMENTS EN COURS</p>
//             </div> */}

//             {/* Bloc Produits Commandés */}

//             {/* <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">PRODUITS COMMANDÉS</p>
//             </div> */}
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default EspaceAdmin;



///////////////


// import { useEffect, useState } from "react";
// import logo from "../../assets/logo/logo.png";

// const EspaceAdmin = () => {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("Non Validé"); // Onglet actif

//   // Fonction pour charger les données en fonction de l'onglet actif
//   useEffect(() => {
//     const fetchActivities = async () => {
//       setLoading(true);
//       const status = activeTab === "Non Validé" ? "false" : "true";
//       try {
//         const response = await fetch(`https://simphat-api.vercel.app/registerActivity/status/${status}`);
//         const data = await response.json();
//         setActivities(data);
//       } catch (error) {
//         console.error("Erreur lors du chargement des données :", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchActivities();
//   }, [activeTab]);

//   // Fonction pour valider une activité
//   const handleValidation = async (id) => {
//     try {
//       await fetch(`https://simphat-api.vercel.app/registerActivity/validate/${id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       // Mettre à jour la liste en supprimant l'élément validé
//       setActivities(activities.filter((activity) => activity._id !== id));
//     } catch (error) {
//       console.error("Erreur lors de la validation :", error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Barre latérale gauche */}
//       <aside className="w-1/5 bg-green-100 flex flex-col items-center p-4">
//         <div className="mb-1">
//           {/* Logo */}
//           <img src={logo} alt="Logo SIMPHAT" className="w-32 h-auto" />
//         </div>
//         <h2 className="text-center text-xs mt-2"></h2>
//       </aside>

//       {/* Contenu principal */}
//       <main className="w-3/5 p-8">
//         {/* Barre de navigation des onglets */}
//         <div className="flex justify-center space-x-4 mb-6">
//           <button
//             onClick={() => setActiveTab("Non Validé")}
//             className={`px-4 py-2 font-semibold ${activeTab === "Non Validé" ? "text-white bg-green-600" : "text-green-600 bg-white"} border rounded`}
//           >
//             Non Validé
//           </button>
//           <button
//             onClick={() => setActiveTab("Validé")}
//             className={`px-4 py-2 font-semibold ${activeTab === "Validé" ? "text-white bg-green-600" : "text-green-600 bg-white"} border rounded`}
//           >
//             Validé
//           </button>
//         </div>

//         {/* Affichage des activités en fonction de l'onglet sélectionné */}
//         <section>
//           <h2 className="text-xl font-semibold text-center mb-4">
//             {activeTab === "Non Validé" ? "Activités en attente de validation" : "Activités validées"}
//           </h2>
//           {loading ? (
//             <p className="text-center">Chargement des données...</p>
//           ) : (
//             <table className="min-w-full bg-white border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="py-2 px-4 border-b">Nom</th>
//                   <th className="py-2 px-4 border-b">Numéro</th>
//                   <th className="py-2 px-4 border-b">Email</th>
//                   <th className="py-2 px-4 border-b">Activité</th>
//                   <th className="py-2 px-4 border-b">Montant</th>
//                   <th className="py-2 px-4 border-b">Statut</th>
//                   {activeTab === "Non Validé" && <th className="py-2 px-4 border-b">Action</th>}
//                 </tr>
//               </thead>
//               <tbody>
//                 {activities.map((item) => (
//                   <tr key={item._id} className="text-center">
//                     <td className="py-2 px-4 border-b">{item.name}</td>
//                     <td className="py-2 px-4 border-b">{item.number}</td>
//                     <td className="py-2 px-4 border-b">{item.email}</td>
//                     <td className="py-2 px-4 border-b">{item.activitySimphat.activitySimphat}</td>
//                     <td className="py-2 px-4 border-b">{item.activitySimphat.amount}</td>
//                     <td className="py-2 px-4 border-b text-red-500 font-semibold">
//                       {item.status ? "Validé" : "Non Validé"}
//                     </td>
//                     {activeTab === "Non Validé" && (
//                       <td className="py-2 px-4 border-b">
//                         <button
//                           onClick={() => handleValidation(item._id)}
//                           className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
//                         >
//                           Valider
//                         </button>
//                       </td>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </section>
//       </main>

//       {/* Conteneur principal pour les deux parties */}
//       <aside className="w-1/5 flex flex-col items-center">
//         {/* Partie 1 : Profil admin */}
//         <div className="w-full bg-green-800 text-white p-4 flex flex-col items-center">
//           <div className="text-center">
//             {/* Image circulaire pour l'avatar */}
//             <div className="bg-white rounded-full w-16 h-16 mx-auto mb-2"></div>
//             <h3 className="text-yellow-400">simphatinfo@.com</h3>
//             <p className="text-sm">PAGE MANAGER</p>
//             <button className="text-white mt-4 underline">DÉCONNECTER</button>
//           </div>
//         </div>

//         {/* Partie 2 : Statistiques */}
//         <div className="w-full bg-green-200 text-white p-4 flex flex-col items-center">
//           <div className="space-y-8 text-center">
//             {/* Bloc Utilisateurs */}
//             <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">UTILISATEURS</p>
//             </div>

//             {/* Bloc En Ligne */}
//             <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">EN LIGNE</p>
//             </div>

//             {/* Bloc Événements en cours */}
//             <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">ÉVÉNEMENTS EN COURS</p>
//             </div>

//             {/* Bloc Produits Commandés */}
//             <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">PRODUITS COMMANDÉS</p>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default EspaceAdmin;





// import { useEffect, useState } from "react";
// import logo from "../../assets/logo/logo.png";

// const EspaceAdmin = () => {
//   const [statusFalseData, setStatusFalseData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fonction pour charger les données ayant le statut false
//   useEffect(() => {
//     const fetchStatusFalseData = async () => {
//       try {
//         const response = await fetch("https://simphat-api.vercel.app/registerActivity/status/false");
//         const data = await response.json();
//         setStatusFalseData(data);
//       } catch (error) {
//         console.error("Erreur lors du chargement des données :", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStatusFalseData();
//   }, []);

//   // Fonction pour valider une activité
//   const handleValidation = async (id) => {
//     try {
//       await fetch(`https://simphat-api.vercel.app/registerActivity/validate/${id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       // Mettre à jour la liste en supprimant l'élément validé
//       setStatusFalseData(statusFalseData.filter((activity) => activity._id !== id));
//     } catch (error) {
//       console.error("Erreur lors de la validation :", error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Barre latérale gauche */}
//       <aside className="w-1/5 bg-green-100 flex flex-col items-center p-4">
//         <div className="mb-1">
//           {/* Logo */}
//           <img src={logo} alt="Logo SIMPHAT" className="w-32 h-auto" />
//         </div>
//         <h2 className="text-center text-xs mt-2"></h2>
//       </aside>

//       {/* Contenu principal */}
//       <main className="w-3/5 p-8">
//         {/* Barre de navigation */}
//         <nav className="flex justify-around bg-black text-white py-2">
//           <a href="#" className="text-yellow-400">ACCUEIL</a>
//           <a href="#">CLIENTS</a>
//           <a href="#">INVENTAIRE</a>
//         </nav>

//         {/* Section centrale */}
//         <div className="text-center my-8">
//           <h1 className="text-2xl font-bold text-green-800">INTERFACE ADMINISTRATEUR</h1>
//         </div>

//         {/* Status false */}
//         <section>
//           <h2 className="text-xl font-semibold text-center mb-4">Activités en attente de validation</h2>
//           {loading ? (
//             <p className="text-center">Chargement des données...</p>
//           ) : (
//             <table className="min-w-full bg-white border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="py-2 px-4 border-b">Nom</th>
//                   <th className="py-2 px-4 border-b">Numéro</th>
//                   <th className="py-2 px-4 border-b">Email</th>
//                   <th className="py-2 px-4 border-b">Activité</th>
//                   <th className="py-2 px-4 border-b">Montant</th>
//                   <th className="py-2 px-4 border-b">Statut</th>
//                   <th className="py-2 px-4 border-b">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {statusFalseData.map((item) => (
//                   <tr key={item._id} className="text-center">
//                     <td className="py-2 px-4 border-b">{item.name}</td>
//                     <td className="py-2 px-4 border-b">{item.number}</td>
//                     <td className="py-2 px-4 border-b">{item.email}</td>
//                     <td className="py-2 px-4 border-b">{item.activitySimphat.activitySimphat}</td>
//                     <td className="py-2 px-4 border-b">{item.activitySimphat.amount}</td>
//                     <td className="py-2 px-4 border-b text-red-500 font-semibold">
//                       {item.status ? "Validé" : "Non Validé"}
//                     </td>
//                     <td className="py-2 px-4 border-b">
//                       {!item.status && (
//                         <button
//                           onClick={() => handleValidation(item._id)}
//                           className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
//                         >
//                           Valider
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </section>
//       </main>

//       {/* Conteneur principal pour les deux parties */}
//       <aside className="w-1/5 flex flex-col items-center">
//         {/* Partie 1 : Profil admin */}
//         <div className="w-full bg-green-800 text-white p-4 flex flex-col items-center">
//           <div className="text-center">
//             {/* Image circulaire pour l'avatar */}
//             <div className="bg-white rounded-full w-16 h-16 mx-auto mb-2"></div>
//             <h3 className="text-yellow-400">simphatinfo@.com</h3>
//             <p className="text-sm">PAGE MANAGER</p>
//             <button className="text-white mt-4 underline">DÉCONNECTER</button>
//           </div>
//         </div>

//         {/* Partie 2 : Statistiques */}
//         <div className="w-full bg-green-200 text-white p-4 flex flex-col items-center">
//           <div className="space-y-8 text-center">
//             {/* Bloc Utilisateurs */}
//             <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">UTILISATEURS</p>
//             </div>

//             {/* Bloc En Ligne */}
//             <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">EN LIGNE</p>
//             </div>

//             {/* Bloc Événements en cours */}
//             <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">ÉVÉNEMENTS EN COURS</p>
//             </div>

//             {/* Bloc Produits Commandés */}
//             <div className="flex flex-col items-center">
//               <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                 <p className="text-xl text-green-900">0</p>
//               </div>
//               <p className="mt-2 text-sm font-semibold text-green-900">PRODUITS COMMANDÉS</p>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default EspaceAdmin;



/////


// import logo from "../../assets/logo/logo.png";


// const EspaceAdmin = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Barre latérale gauche */}
//       <aside className="w-1/5 bg-green-100 flex flex-col items-center p-4">
//         <div className="mb-1">
//           {/* Logo */}
//           <img src={logo} alt="Logo SIMPHAT" className="w-32 h-auto" />
//         </div>
//         <h2 className="text-center text-xs mt-2"></h2>
//       </aside>

//       {/* Contenu principal */}
//       <main className="w-3/5 p-8">
//         {/* Barre de navigation */}
//         <nav className="flex justify-around bg-black text-white py-2">
//           <a href="#" className="text-yellow-400">ACCUEIL</a>
//           <a href="#">CLIENTS</a>
//           <a href="#">INVENTAIRE</a>
//         </nav>

//         {/* Section centrale */}
//         <div className="text-center my-8">
//           <h1 className="text-2xl font-bold text-green-800">INTERFACE ADMINISTRATEUR</h1>
//         </div>

        
//         {/* Status false */}





//         {/* Status true */}


//       </main>

//         {/* Conteneur principal pour les deux parties */}
//         <aside className="w-1/5 flex flex-col items-center">
            
//             {/* Partie 1 : Profil admin */}
//             <div className="w-full bg-green-800 text-white p-4 flex flex-col items-center">
//                 <div className="text-center">
//                     {/* Image circulaire pour l'avatar */}
//                     <div className="bg-white rounded-full w-16 h-16 mx-auto mb-2"></div>
//                     <h3 className="text-yellow-400">simphatinfo@.com</h3>
//                     <p className="text-sm">PAGE MANAGER</p>
//                     <button className="text-white mt-4 underline">DÉCONNECTER</button>
//                 </div>
//             </div>    

//             {/* Partie 2 : Statistiques */}
//             <div className="w-full bg-green-200 text-white p-4 flex flex-col items-center">
//                 <div className="space-y-8 text-center">
//                     {/* Bloc Utilisateurs */}
//                     <div className="flex flex-col items-center">
//                         <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                             <p className="text-xl text-green-900">0</p>
//                         </div>
//                         <p className="mt-2 text-sm font-semibold text-green-900">UTILISATEURS</p>
//                     </div>

//                     {/* Bloc En Ligne */}
//                     <div className="flex flex-col items-center">
//                         <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                             <p className="text-xl text-green-900">0</p>
//                         </div>
//                         <p className="mt-2 text-sm font-semibold text-green-900">EN LIGNE</p>
//                     </div>

//                     {/* Bloc Événements en cours */}
//                     <div className="flex flex-col items-center">
//                         <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                             <p className="text-xl text-green-900">0</p>
//                         </div>
//                         <p className="mt-2 text-sm font-semibold text-green-900">ÉVÉNEMENTS EN COURS</p>
//                     </div>

//                     {/* Bloc Produits Commandés */}
//                     <div className="flex flex-col items-center">
//                         <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
//                             <p className="text-xl text-green-900">0</p>
//                         </div>
//                         <p className="mt-2 text-sm font-semibold text-green-900">PRODUITS COMMANDÉS</p>
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     </div>
//   );
// };

// export default EspaceAdmin;
