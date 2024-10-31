import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import bgImage from "../../assets/forPages/exposerVente.png"
import { Link,  } from 'react-router-dom';


const ExpositionVentes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    fetchActivities();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
    setSelectedAmount(null);
  };

  const fetchActivities = async () => {
    try {
      const response = await fetch("https://simphatnodejs.onrender.com/activitySimphat/");
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des activités :", error);
    }
  };

  const handleActivityChange = (event) => {
    const activityId = event.target.value;
    const activity = activities.find((act) => act._id === activityId);
    setSelectedActivity(activityId);
    setSelectedAmount(activity ? activity.amount : null);
  };

  const handleRegister = async () => {
    const user = localStorage.getItem("token");
    if (!user) {
      alert("Utilisateur non connecté");
      return;
    }

    const registrationData = {
      name: localStorage.getItem("userName"),
      email: localStorage.getItem("userEmail"),
      number: localStorage.getItem("userNumber"),
      activitySimphat: selectedActivity,
    };

    try {
      setIsRegistering(true);
      const response = await fetch("https://simphatnodejs.onrender.com/registerActivity/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(registrationData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Inscription réussie !");
      } else {
        alert(`Erreur lors de l'inscription: ${result.message}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Une erreur s'est produite, veuillez réessayer.");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="container mx-auto py-20" style={{ 
        backgroundImage: `url(${bgImage})` ,
        backgroundSize: 'cover',
    }}>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
        Exposition-Ventes-CONCOURS PRIX DU MEILLEUR PRODUIT CONCOURS
      </h2>
      {/* <div className="flex flex-col sm:flex-row"> */}
      <div className="flex flex-col ">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
            DU 27 AU 30 NOVEMBRE
          </h2>
          <div className="flex flex-row gap-2 items-center justify-center mt-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold">
              CHANT D’OISEAU, COTONOU, BÉNIN
            </h3>
          </div>

          <div className="flex justify-center items-center mt-8">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
                <h2>ENTRÉE GALA: 10.000F</h2>
                <h2>TICKET TOMBOLA: 1.000F, 2.000F</h2>
                <h2>TICKET STAND: 20.000F</h2>
                <h2>INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
            </div>
          </div>

          {/* <div className="flex justify-center items-center mt-8">
            <button
              onClick={openModal}
              className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer"
            >
              COMMANDEZ VOS TICKETS
            </button>
          </div> */}
 
          <div className="flex flex-col sm:flex-row text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-8">
            
            <div className="w-full flex justify-center">
                <div              
                    className="
                    inline-block
                    text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                    bg-customGreen text-white tracking-tight 
                    py-2 px-4 mb-2
                    max-w-lg
                    "
                >
                    <button
                        onClick={openModal}
                        className="bg-customGreen text-customYellow  tracking-tight cursor-pointer"
                        >
                        COMMANDEZ VOS TICKETS
                    </button>
                </div>
            </div>

          </div>

          <div className="flex flex-row gap-2 items-center justify-center mt-8">
            <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
            <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
              <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
            </p>
          </div>

        <Link to="/criteres">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold text-center underline">
                <h3 className="">Voir les critères de sélection du meilleur produit</h3>
            </div>
        </Link>
          

      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-8 w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Choisissez votre activité</h2>
            <select
              value={selectedActivity || ""}
              onChange={handleActivityChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            >
              <option value="">-- Sélectionnez une activité --</option>
              {activities.map((activity) => (
                <option key={activity._id} value={activity._id}>
                  {activity.activitySimphat}
                </option>
              ))}
            </select>
            {selectedAmount && (
              <p className="text-center font-semibold text-lg mt-2">
                Montant: {selectedAmount} F
              </p>
            )}
            <div className="flex justify-end mt-6">
              <button
                onClick={handleRegister}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                disabled={!selectedActivity || isRegistering}
              >
                {isRegistering ? "Inscription en cours..." : "S'inscrire"}
              </button>
              <button
                onClick={closeModal}
                className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpositionVentes;




////////////////


// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import bgImage from "../../assets/forPages/exposerVente.png"

// const ExpositionVentes = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activities, setActivities] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [isRegistering, setIsRegistering] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//     fetchActivities();
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedActivity(null);
//     setSelectedAmount(null);
//   };

//   const fetchActivities = async () => {
//     try {
//       const response = await fetch("https://simphatnodejs.onrender.com/activitySimphat/");
//       const data = await response.json();
//       setActivities(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des activités :", error);
//     }
//   };

//   const handleActivityChange = (event) => {
//     const activityId = event.target.value;
//     const activity = activities.find((act) => act._id === activityId);
//     setSelectedActivity(activityId);
//     setSelectedAmount(activity ? activity.amount : null);
//   };

//   const handleRegister = async () => {
//     const user = localStorage.getItem("token");
//     if (!user) {
//       alert("Utilisateur non connecté");
//       return;
//     }

//     const registrationData = {
//       name: localStorage.getItem("userName"),
//       email: localStorage.getItem("userEmail"),
//       number: localStorage.getItem("userNumber"),
//       activitySimphat: selectedActivity,
//     };

//     try {
//       setIsRegistering(true);
//       const response = await fetch("https://simphatnodejs.onrender.com/registerActivity/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify(registrationData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("Inscription réussie !");
//       } else {
//         alert(`Erreur lors de l'inscription: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'inscription :", error);
//       alert("Une erreur s'est produite, veuillez réessayer.");
//     } finally {
//       setIsRegistering(false);
//     }
//   };

//   return (
//     <div className="container mx-auto py-20" style={{ 
//         backgroundImage: `url(${bgImage})` ,
//         backgroundSize: 'cover',
//     }}>
//       <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
//         Exposition-Ventes-CONCOURS PRIX DU MEILLEUR PRODUIT CONCOURS
//       </h2>
//       <div className="flex flex-col sm:flex-row">
//         <div className="w-full sm:w-1/2 p-4">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
//             DU 27 AU 30 NOVEMBRE
//           </h2>
//           <div className="flex flex-row gap-2 items-center justify-center mt-2">
//             <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold">
//               CHANT D’OISEAU, COTONOU, BÉNIN
//             </h3>
//           </div>
//           <div className="flex flex-row gap-2 items-center justify-center mt-4">
//             <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
//             <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
//               <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//             </p>
//           </div>
//         </div>
//         <div className="w-full sm:w-1/2 p-4 items-start">
//           <div className="flex flex-col">
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//               <h2>ENTRÉE GALA: 10.000F</h2>
//               <h2>TICKET TOMBOLA: 1.000F, 2.000F</h2>
//               <h2>TICKET STAND: 20.000F</h2>
//               <h2>INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//             </div>
//           </div>
//           <div className="flex mt-4">
//             <button
//               onClick={openModal}
//               className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer"
//             >
//               COMMANDEZ VOS TICKETS
//             </button>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg p-8 w-80"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center">Choisissez votre activité</h2>
//             <select
//               value={selectedActivity || ""}
//               onChange={handleActivityChange}
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//             >
//               <option value="">-- Sélectionnez une activité --</option>
//               {activities.map((activity) => (
//                 <option key={activity._id} value={activity._id}>
//                   {activity.activitySimphat}
//                 </option>
//               ))}
//             </select>
//             {selectedAmount && (
//               <p className="text-center font-semibold text-lg mt-2">
//                 Montant: {selectedAmount} F
//               </p>
//             )}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={handleRegister}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 disabled={!selectedActivity || isRegistering}
//               >
//                 {isRegistering ? "Inscription en cours..." : "S'inscrire"}
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//               >
//                 Fermer
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpositionVentes;



/////////////////

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// // var api = "pk_live_L_waJFcUXdbt2eYxWxq4hu_6";


// const ExpositionVentes = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activities, setActivities] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [paymentUrl, setPaymentUrl] = useState(null);

//   const openModal = () => {
//     setIsModalOpen(true);
//     fetchActivities();
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedActivity(null);
//     setSelectedAmount(null);
//   };

//   const fetchActivities = async () => {
//     try {
//       const response = await fetch("https://simphatnodejs.onrender.com/activitySimphat/");
//       const data = await response.json();
//       setActivities(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des activités :", error);
//     }
//   };

//   const handleActivityChange = (event) => {
//     const activityId = event.target.value;
//     const activity = activities.find((act) => act._id === activityId);
//     setSelectedActivity(activityId);
//     setSelectedAmount(activity ? activity.amount : null);
//   };

//   const handleRegister = async () => {
//     const user = localStorage.getItem("token");
//     if (!user) {
//       alert("Utilisateur non connecté");
//       return;
//     }

//     const registrationData = {
//       name: localStorage.getItem("userName"),
//       email: localStorage.getItem("userEmail"),
//       number: localStorage.getItem("userNumber"),
//       activitySimphat: selectedActivity,
//     };

//     try {
//       setIsRegistering(true);
//       const response = await fetch("https://simphatnodejs.onrender.com/registerActivity/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify(registrationData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("Inscription réussie !");
        
//         // Initiation du paiement avec token FedaPay
//         const paymentResponse = await fetch("https://simphatnodejs.onrender.com/payment/initiate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}` // Remplacez par votre token réel
//           },
//           body: JSON.stringify({
//             amount: selectedAmount,
//             name: localStorage.getItem("userName"),
//             email: localStorage.getItem("userEmail"),
//             number: localStorage.getItem("userNumber"),
//           }),
//         });

//         const paymentResult = await paymentResponse.json();

//         if (paymentResponse.ok) {
//           setPaymentUrl(paymentResult.payment_url);
//         } else {
//           alert("Erreur lors de l'initialisation du paiement");
//         }
//       } else {
//         alert(`Erreur lors de l'inscription: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'inscription :", error);
//       alert("Une erreur s'est produite, veuillez réessayer.");
//     } finally {
//       setIsRegistering(false);
//     }
//   };

//   if (paymentUrl) {
//     window.location.href = paymentUrl;
//   }



//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
//         Exposition-Ventes
//       </h2>
//       <div className="flex flex-col sm:flex-row">
//         <div className="w-full sm:w-1/2 p-4">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
//             DU 27 AU 30 NOVEMBRE
//           </h2>
//           <div className="flex flex-row gap-2 items-center justify-center mt-2">
//             <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold">
//               CHANT D’OISEAU, COTONOU, BÉNIN
//             </h3>
//           </div>
//           <div className="flex flex-row gap-2 items-center justify-center mt-4">
//             <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
//             <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
//               <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//             </p>
//           </div>
//         </div>
//         <div className="w-full sm:w-1/2 p-4 items-start">
//           <div className="flex flex-col">
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//               <h2>ENTRÉE GALA: 10.000F</h2>
//               <h2>TICKET TOMBOLA: 1.000F, 2.000F</h2>
//               <h2>TICKET STAND: 20.000F</h2>
//               <h2>INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//             </div>
//           </div>
//           <div className="flex mt-4">
//             <button
//               onClick={openModal}
//               className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer"
//             >
//               COMMANDEZ VOS TICKETS
//             </button>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg p-8 w-80"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center">Choisissez votre activité</h2>
//             <select
//               value={selectedActivity || ""}
//               onChange={handleActivityChange}
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//             >
//               <option value="">-- Sélectionnez une activité --</option>
//               {activities.map((activity) => (
//                 <option key={activity._id} value={activity._id}>
//                   {activity.activitySimphat}
//                 </option>
//               ))}
//             </select>
//             {selectedAmount && (
//               <p className="text-center font-semibold text-lg mt-2">
//                 Montant: {selectedAmount} F
//               </p>
//             )}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={handleRegister}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 disabled={!selectedActivity || isRegistering}
//               >
//                 {isRegistering ? "Inscription en cours..." : "S'inscrire"}
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//               >
//                 Fermer
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpositionVentes;



//////////////////////


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { useState, } from "react";

// const ExpositionVentes = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activities, setActivities] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [isRegistering, setIsRegistering] = useState(false);

//   // Ouvrir le modal et charger les activités
//   const openModal = () => {
//     setIsModalOpen(true);
//     fetchActivities();
//   };

//   // Fermer le modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedActivity(null);
//     setSelectedAmount(null);
//   };

//   // Charger les activités depuis l'API
//   const fetchActivities = async () => {
//     try {
//       const response = await fetch("https://simphatnodejs.onrender.com/activitySimphat/");
//       const data = await response.json();
//       setActivities(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des activités :", error);
//     }
//   };

//   // Gérer la sélection d'une activité et afficher le montant
//   const handleActivityChange = (event) => {
//     const activityId = event.target.value;
//     const activity = activities.find((act) => act._id === activityId);
//     setSelectedActivity(activityId);
//     setSelectedAmount(activity ? activity.amount : null);
//   };

//   // Envoyer la requête d'inscription
//   const handleRegister = async () => {
//     // Récupérer les informations utilisateur depuis le localStorage
//     const user = localStorage.getItem("token");
//     console.log("Je veux voir", user)
//     if (!user) {
//       alert("Utilisateur non connecté");
//       return;
//     }


//     // Préparer les données pour la requête
//     const registrationData = {
//         name: localStorage.getItem("userName"),
//         email: localStorage.getItem("userEmail"),
//         number: localStorage.getItem("userNumber"),
//         activitySimphat: selectedActivity,
//     };
//     console.log("Je veux aussi voir ça :", registrationData)

//     try {
//       setIsRegistering(true); // Indicateur de chargement
//       const response = await fetch("https://simphatnodejs.onrender.com/registerActivity/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Token pour l'authentification
//         },
//         body: JSON.stringify(registrationData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("Inscription réussie !");
//         closeModal(); // Fermer le modal après l'inscription
//       } else {
//         alert(`Erreur lors de l'inscription: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'inscription :", error);
//       alert("Une erreur s'est produite, veuillez réessayer.");
//     } finally {
//       setIsRegistering(false);
//     }
//   };

//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
//         Exposition-Ventes
//       </h2>

//       <div className="flex flex-col sm:flex-row">
//         <div className="w-full sm:w-1/2 p-4">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
//             DU 27 AU 30 NOVEMBRE
//           </h2>

//           <div className="flex flex-row gap-2 items-center justify-center mt-2">
//             <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold">
//               CHANT D’OISEAU, COTONOU, BÉNIN
//             </h3>
//           </div>

//           <div className="flex flex-row gap-2 items-center justify-center mt-4">
//             <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
//             <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
//               <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//             </p>
//           </div>
//         </div>

//         <div className="w-full sm:w-1/2 p-4 items-start">
//           <div className="flex flex-col">
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//               <h2>ENTRÉE GALA: 10.000F</h2>
//               <h2>TICKET TOMBOLA: 1.000F, 2.000F</h2>
//               <h2>TICKET STAND: 20.000F</h2>
//               <h2>INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//             </div>
//           </div>

//           <div className="flex mt-4">
//             <button
//               onClick={openModal}
//               className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer"
//             >
//               COMMANDEZ VOS TICKETS
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal pour sélectionner une activité */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg p-8 w-80">
//             <h2 className="text-2xl font-bold mb-4 text-center">Choisissez votre activité</h2>
//             <select
//               value={selectedActivity || ""}
//               onChange={handleActivityChange}
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//             >
//               <option value="">-- Sélectionnez une activité --</option>
//               {activities.map((activity) => (
//                 <option key={activity._id} value={activity._id}>
//                   {activity.activitySimphat}
//                 </option>
//               ))}
//             </select>
//             {selectedAmount && (
//               <p className="text-center font-semibold text-lg mt-2">
//                 Montant: {selectedAmount} F
//               </p>
//             )}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={handleRegister}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 disabled={!selectedActivity || isRegistering}
//               >
//                 {isRegistering ? "Inscription en cours..." : "S'inscrire"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpositionVentes;


/////////////////


// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// // var api = "pk_live_L_waJFcUXdbt2eYxWxq4hu_6";


// const ExpositionVentes = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activities, setActivities] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [paymentUrl, setPaymentUrl] = useState(null);

//   const openModal = () => {
//     setIsModalOpen(true);
//     fetchActivities();
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedActivity(null);
//     setSelectedAmount(null);
//   };

//   const fetchActivities = async () => {
//     try {
//       const response = await fetch("https://simphatnodejs.onrender.com/activitySimphat/");
//       const data = await response.json();
//       setActivities(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des activités :", error);
//     }
//   };

//   const handleActivityChange = (event) => {
//     const activityId = event.target.value;
//     const activity = activities.find((act) => act._id === activityId);
//     setSelectedActivity(activityId);
//     setSelectedAmount(activity ? activity.amount : null);
//   };

//   const handleRegister = async () => {
//     const user = localStorage.getItem("token");
//     if (!user) {
//       alert("Utilisateur non connecté");
//       return;
//     }

//     const registrationData = {
//       name: localStorage.getItem("userName"),
//       email: localStorage.getItem("userEmail"),
//       number: localStorage.getItem("userNumber"),
//       activitySimphat: selectedActivity,
//     };

//     try {
//       setIsRegistering(true);
//       const response = await fetch("https://simphatnodejs.onrender.com/registerActivity/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify(registrationData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("Inscription réussie !");
        
//         // Initiation du paiement avec token FedaPay
//         const paymentResponse = await fetch("https://simphatnodejs.onrender.com/payment/initiate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}` // Remplacez par votre token réel
//           },
//           body: JSON.stringify({
//             amount: selectedAmount,
//             name: localStorage.getItem("userName"),
//             email: localStorage.getItem("userEmail"),
//             number: localStorage.getItem("userNumber"),
//           }),
//         });

//         const paymentResult = await paymentResponse.json();

//         if (paymentResponse.ok) {
//           setPaymentUrl(paymentResult.payment_url);
//         } else {
//           alert("Erreur lors de l'initialisation du paiement");
//         }
//       } else {
//         alert(`Erreur lors de l'inscription: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'inscription :", error);
//       alert("Une erreur s'est produite, veuillez réessayer.");
//     } finally {
//       setIsRegistering(false);
//     }
//   };

//   if (paymentUrl) {
//     window.location.href = paymentUrl;
//   }



//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
//         Exposition-Ventes
//       </h2>
//       <div className="flex flex-col sm:flex-row">
//         <div className="w-full sm:w-1/2 p-4">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
//             DU 27 AU 30 NOVEMBRE
//           </h2>
//           <div className="flex flex-row gap-2 items-center justify-center mt-2">
//             <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold">
//               CHANT D’OISEAU, COTONOU, BÉNIN
//             </h3>
//           </div>
//           <div className="flex flex-row gap-2 items-center justify-center mt-4">
//             <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
//             <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
//               <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//             </p>
//           </div>
//         </div>
//         <div className="w-full sm:w-1/2 p-4 items-start">
//           <div className="flex flex-col">
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//               <h2>ENTRÉE GALA: 10.000F</h2>
//               <h2>TICKET TOMBOLA: 1.000F, 2.000F</h2>
//               <h2>TICKET STAND: 20.000F</h2>
//               <h2>INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//             </div>
//           </div>
//           <div className="flex mt-4">
//             <button
//               onClick={openModal}
//               className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer"
//             >
//               COMMANDEZ VOS TICKETS
//             </button>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg p-8 w-80"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center">Choisissez votre activité</h2>
//             <select
//               value={selectedActivity || ""}
//               onChange={handleActivityChange}
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//             >
//               <option value="">-- Sélectionnez une activité --</option>
//               {activities.map((activity) => (
//                 <option key={activity._id} value={activity._id}>
//                   {activity.activitySimphat}
//                 </option>
//               ))}
//             </select>
//             {selectedAmount && (
//               <p className="text-center font-semibold text-lg mt-2">
//                 Montant: {selectedAmount} F
//               </p>
//             )}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={handleRegister}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 disabled={!selectedActivity || isRegistering}
//               >
//                 {isRegistering ? "Inscription en cours..." : "S'inscrire"}
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//               >
//                 Fermer
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpositionVentes;



//////////////


// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// const ExpositionVentes = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activities, setActivities] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [paymentUrl, setPaymentUrl] = useState(null);

//   const openModal = () => {
//     setIsModalOpen(true);
//     fetchActivities();
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedActivity(null);
//     setSelectedAmount(null);
//   };

//   const fetchActivities = async () => {
//     try {
//       const response = await fetch("https://simphatnodejs.onrender.com/activitySimphat/");
//       const data = await response.json();
//       setActivities(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des activités :", error);
//     }
//   };

//   const handleActivityChange = (event) => {
//     const activityId = event.target.value;
//     const activity = activities.find((act) => act._id === activityId);
//     setSelectedActivity(activityId);
//     setSelectedAmount(activity ? activity.amount : null);
//   };

//   const handleRegister = async () => {
//     const user = localStorage.getItem("token");
//     if (!user) {
//       alert("Utilisateur non connecté");
//       return;
//     }

//     const registrationData = {
//       name: localStorage.getItem("userName"),
//       email: localStorage.getItem("userEmail"),
//       number: localStorage.getItem("userNumber"),
//       activitySimphat: selectedActivity,
//     };

//     try {
//       setIsRegistering(true);
//       const response = await fetch("https://simphatnodejs.onrender.com/registerActivity/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify(registrationData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("Inscription réussie !");
//         const paymentResponse = await fetch("https://simphatnodejs.onrender.com/payment/initiate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//             body: JSON.stringify({
//                 amount: selectedAmount,
//                 name:  localStorage.getItem("userName"),
//                 email: localStorage.getItem("userEmail"),
//                 number: localStorage.getItem("userNumber"),
//           }),
//         });

//         const paymentResult = await paymentResponse.json();

//         if (paymentResponse.ok) {
//           setPaymentUrl(paymentResult.payment_url);
//         } else {
//           alert("Erreur lors de l'initialisation du paiement");
//         }
//       } else {
//         alert(`Erreur lors de l'inscription: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'inscription :", error);
//       alert("Une erreur s'est produite, veuillez réessayer.");
//     } finally {
//       setIsRegistering(false);
//     }
//   };

//   if (paymentUrl) {
//     window.location.href = paymentUrl;
//   }

//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
//         Exposition-Ventes
//       </h2>
//       <div className="flex flex-col sm:flex-row">
//         <div className="w-full sm:w-1/2 p-4">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
//             DU 27 AU 30 NOVEMBRE
//           </h2>
//           <div className="flex flex-row gap-2 items-center justify-center mt-2">
//             <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold">
//               CHANT D’OISEAU, COTONOU, BÉNIN
//             </h3>
//           </div>
//           <div className="flex flex-row gap-2 items-center justify-center mt-4">
//             <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
//             <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
//               <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//             </p>
//           </div>
//         </div>
//         <div className="w-full sm:w-1/2 p-4 items-start">
//           <div className="flex flex-col">
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//               <h2>ENTRÉE GALA: 10.000F</h2>
//               <h2>TICKET TOMBOLA: 1.000F, 2.000F</h2>
//               <h2>TICKET STAND: 20.000F</h2>
//               <h2>INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//             </div>
//           </div>
//           <div className="flex mt-4">
//             <button
//               onClick={openModal}
//               className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer"
//             >
//               COMMANDEZ VOS TICKETS
//             </button>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg p-8 w-80"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center">Choisissez votre activité</h2>
//             <select
//               value={selectedActivity || ""}
//               onChange={handleActivityChange}
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//             >
//               <option value="">-- Sélectionnez une activité --</option>
//               {activities.map((activity) => (
//                 <option key={activity._id} value={activity._id}>
//                   {activity.activitySimphat}
//                 </option>
//               ))}
//             </select>
//             {selectedAmount && (
//               <p className="text-center font-semibold text-lg mt-2">
//                 Montant: {selectedAmount} F
//               </p>
//             )}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={handleRegister}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 disabled={!selectedActivity || isRegistering}
//               >
//                 {isRegistering ? "Inscription en cours..." : "S'inscrire"}
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//               >
//                 Fermer
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpositionVentes;


/////////////////

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// const ExpositionVentes = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activities, setActivities] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [paymentUrl, setPaymentUrl] = useState(null);

//   const openModal = () => {
//     setIsModalOpen(true);
//     fetchActivities();
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedActivity(null);
//     setSelectedAmount(null);
//   };

//   const fetchActivities = async () => {
//     try {
//       const response = await fetch("https://simphatnodejs.onrender.com/activitySimphat/");
//       const data = await response.json();
//       setActivities(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des activités :", error);
//     }
//   };

//   const handleActivityChange = (event) => {
//     const activityId = event.target.value;
//     const activity = activities.find((act) => act._id === activityId);
//     setSelectedActivity(activityId);
//     setSelectedAmount(activity ? activity.amount : null);
//   };

//   const handleRegister = async () => {
//     const user = localStorage.getItem("token");
//     if (!user) {
//       alert("Utilisateur non connecté");
//       return;
//     }

//     const registrationData = {
//       name: localStorage.getItem("userName"),
//       email: localStorage.getItem("userEmail"),
//       number: localStorage.getItem("userNumber"),
//       activitySimphat: selectedActivity,
//     };

//     try {
//       setIsRegistering(true);
//       const response = await fetch("https://simphatnodejs.onrender.com/registerActivity/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify(registrationData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("Inscription réussie !");
//         const paymentResponse = await fetch("https://simphatnodejs.onrender.com/payment/initiate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         //   body: JSON.stringify({
//         //     amount: selectedAmount,
//         //     name: registrationData.name,
//         //     email: registrationData.email,
//         //     number: registrationData.number,
//         //   }),
//             body: JSON.stringify({
//                 amount: selectedAmount,
//                 name:  localStorage.getItem("userName"),
//                 email: localStorage.getItem("userEmail"),
//                 number: localStorage.getItem("userNumber"),
//           }),
//         });

//         const paymentResult = await paymentResponse.json();

//         if (paymentResponse.ok) {
//           setPaymentUrl(paymentResult.payment_url);
//         } else {
//           alert("Erreur lors de l'initialisation du paiement");
//         }
//       } else {
//         alert(`Erreur lors de l'inscription: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'inscription :", error);
//       alert("Une erreur s'est produite, veuillez réessayer.");
//     } finally {
//       setIsRegistering(false);
//     }
//   };

//   if (paymentUrl) {
//     window.location.href = paymentUrl;
//   }

//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
//         Exposition-Ventes
//       </h2>
//       <div className="flex flex-col sm:flex-row">
//         <div className="w-full sm:w-1/2 p-4">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
//             DU 27 AU 30 NOVEMBRE
//           </h2>
//           <div className="flex flex-row gap-2 items-center justify-center mt-2">
//             <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold">
//               CHANT D’OISEAU, COTONOU, BÉNIN
//             </h3>
//           </div>
//           <div className="flex flex-row gap-2 items-center justify-center mt-4">
//             <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
//             <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
//               <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//             </p>
//           </div>
//         </div>
//         <div className="w-full sm:w-1/2 p-4 items-start">
//           <div className="flex flex-col">
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//               <h2>ENTRÉE GALA: 10.000F</h2>
//               <h2>TICKET TOMBOLA: 1.000F, 2.000F</h2>
//               <h2>TICKET STAND: 20.000F</h2>
//               <h2>INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//             </div>
//           </div>
//           <div className="flex mt-4">
//             <button
//               onClick={openModal}
//               className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer"
//             >
//               COMMANDEZ VOS TICKETS
//             </button>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg p-8 w-80"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center">Choisissez votre activité</h2>
//             <select
//               value={selectedActivity || ""}
//               onChange={handleActivityChange}
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//             >
//               <option value="">-- Sélectionnez une activité --</option>
//               {activities.map((activity) => (
//                 <option key={activity._id} value={activity._id}>
//                   {activity.activitySimphat}
//                 </option>
//               ))}
//             </select>
//             {selectedAmount && (
//               <p className="text-center font-semibold text-lg mt-2">
//                 Montant: {selectedAmount} F
//               </p>
//             )}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={handleRegister}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 disabled={!selectedActivity || isRegistering}
//               >
//                 {isRegistering ? "Inscription en cours..." : "S'inscrire"}
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
//               >
//                 Fermer
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpositionVentes;




////////

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { useState, } from "react";

// const ExpositionVentes = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activities, setActivities] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [isRegistering, setIsRegistering] = useState(false);

//   // Ouvrir le modal et charger les activités
//   const openModal = () => {
//     setIsModalOpen(true);
//     fetchActivities();
//   };

//   // Fermer le modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedActivity(null);
//     setSelectedAmount(null);
//   };

//   // Charger les activités depuis l'API
//   const fetchActivities = async () => {
//     try {
//       const response = await fetch("https://simphatnodejs.onrender.com/activitySimphat/");
//       const data = await response.json();
//       setActivities(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des activités :", error);
//     }
//   };

//   // Gérer la sélection d'une activité et afficher le montant
//   const handleActivityChange = (event) => {
//     const activityId = event.target.value;
//     const activity = activities.find((act) => act._id === activityId);
//     setSelectedActivity(activityId);
//     setSelectedAmount(activity ? activity.amount : null);
//   };

//   // Envoyer la requête d'inscription
//   const handleRegister = async () => {
//     // Récupérer les informations utilisateur depuis le localStorage
//     const user = localStorage.getItem("token");
//     console.log("Je veux voir", user)
//     if (!user) {
//       alert("Utilisateur non connecté");
//       return;
//     }


//     // Préparer les données pour la requête
//     const registrationData = {
//         name: localStorage.getItem("userName"),
//         email: localStorage.getItem("userEmail"),
//         number: localStorage.getItem("userNumber"),
//         activitySimphat: selectedActivity,
//     };
//     console.log("Je veux aussi voir ça :", registrationData)

//     try {
//       setIsRegistering(true); // Indicateur de chargement
//       const response = await fetch("https://simphatnodejs.onrender.com/registerActivity/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Token pour l'authentification
//         },
//         body: JSON.stringify(registrationData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("Inscription réussie !");
//         closeModal(); // Fermer le modal après l'inscription
//       } else {
//         alert(`Erreur lors de l'inscription: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'inscription :", error);
//       alert("Une erreur s'est produite, veuillez réessayer.");
//     } finally {
//       setIsRegistering(false);
//     }
//   };

//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
//         Exposition-Ventes
//       </h2>

//       <div className="flex flex-col sm:flex-row">
//         <div className="w-full sm:w-1/2 p-4">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
//             DU 27 AU 30 NOVEMBRE
//           </h2>

//           <div className="flex flex-row gap-2 items-center justify-center mt-2">
//             <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold">
//               CHANT D’OISEAU, COTONOU, BÉNIN
//             </h3>
//           </div>

//           <div className="flex flex-row gap-2 items-center justify-center mt-4">
//             <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
//             <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
//               <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//             </p>
//           </div>
//         </div>

//         <div className="w-full sm:w-1/2 p-4 items-start">
//           <div className="flex flex-col">
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//               <h2>ENTRÉE GALA: 10.000F</h2>
//               <h2>TICKET TOMBOLA: 1.000F, 2.000F</h2>
//               <h2>TICKET STAND: 20.000F</h2>
//               <h2>INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//             </div>
//           </div>

//           <div className="flex mt-4">
//             <button
//               onClick={openModal}
//               className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer"
//             >
//               COMMANDEZ VOS TICKETS
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal pour sélectionner une activité */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg p-8 w-80">
//             <h2 className="text-2xl font-bold mb-4 text-center">Choisissez votre activité</h2>
//             <select
//               value={selectedActivity || ""}
//               onChange={handleActivityChange}
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//             >
//               <option value="">-- Sélectionnez une activité --</option>
//               {activities.map((activity) => (
//                 <option key={activity._id} value={activity._id}>
//                   {activity.activitySimphat}
//                 </option>
//               ))}
//             </select>
//             {selectedAmount && (
//               <p className="text-center font-semibold text-lg mt-2">
//                 Montant: {selectedAmount} F
//               </p>
//             )}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={handleRegister}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 disabled={!selectedActivity || isRegistering}
//               >
//                 {isRegistering ? "Inscription en cours..." : "S'inscrire"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpositionVentes;



//////////////


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { useState, } from "react";

// const ExpositionVentes = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activities, setActivities] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [selectedAmount, setSelectedAmount] = useState(null);

//   // Fonction pour ouvrir le modal et charger les activités
//   const openModal = () => {
//     setIsModalOpen(true);
//     fetchActivities();
//   };

//   // Fonction pour fermer le modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedActivity(null);
//     setSelectedAmount(null);
//   };

//   // Fonction pour récupérer les activités depuis l'API
//   const fetchActivities = async () => {
//     try {
//       const response = await fetch("https://simphatnodejs.onrender.com/activitySimphat/");
//       const data = await response.json();
//       setActivities(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des activités :", error);
//     }
//   };

//   // Fonction pour gérer la sélection d'une activité et afficher le montant correspondant
//   const handleActivityChange = (event) => {
//     const activityId = event.target.value;
//     const activity = activities.find(act => act._id === activityId);
//     setSelectedActivity(activityId);
//     setSelectedAmount(activity ? activity.amount : null);
//   };

//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
//         Exposition-Ventes
//       </h2>

//       <div className="flex flex-col sm:flex-row">
//         <div className="w-full sm:w-1/2 p-4">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
//             DU 27 AU 30 NOVEMBRE
//           </h2>

//           <div className="flex flex-row gap-2 items-center justify-center mt-2">
//             <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold">
//               CHANT D’OISEAU, COTONOU, BÉNIN
//             </h3>
//           </div>

//           <div className="flex flex-row gap-2 items-center justify-center mt-4">
//             <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
//             <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
//               <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//             </p>
//           </div>
//         </div>

//         <div className="w-full sm:w-1/2 p-4 items-start">
//           <div className="flex flex-col">
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//               <h2>ENTRÉE GALA: 10.000F</h2>
//               <h2>TICKET TOMBOLA: 1.000F, 2.000F</h2>
//               <h2>TICKET STAND: 20.000F</h2>
//               <h2>INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//             </div>
//           </div>

//           <div className="flex mt-4">
//             <button
//               onClick={openModal}
//               className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer"
//             >
//               COMMANDEZ VOS TICKETS
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal pour sélectionner une activité */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg p-8 w-80">
//             <h2 className="text-2xl font-bold mb-4 text-center">Choisissez votre activité</h2>
//             <select
//               value={selectedActivity || ""}
//               onChange={handleActivityChange}
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//             >
//               <option value="">-- Sélectionnez une activité --</option>
//               {activities.map((activity) => (
//                 <option key={activity._id} value={activity._id}>
//                   {activity.activitySimphat}
//                 </option>
//               ))}
//             </select>
//             {selectedAmount && (
//               <p className="text-center font-semibold text-lg mt-2">Montant: {selectedAmount} F</p>
//             )}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={closeModal}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//               >
//                 Fermer
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpositionVentes;



//////////////////

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

// const ExpositionVentes = () => {
//   return (
//     <div className="container mx-auto py-20">
//         <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                 text-customGreen text-center font-bold mb-8 underline">Exposition-Ventes</h2>

//         <div className="flex flex-col sm:flex-row">
//             <div className="w-full sm:w-1/2 p-4">
//                 <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                     text-customBlack font-bold text-center">
//                     DU 27 AU 30 NOVEMBRE
//                 </h2>

//                 <div className="flex flex-row gap-2 items-center justify-center mt-2">
//                     <div className=" ">
//                         <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//                     </div>
//                     <div className=" ">
//                         <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
//                         text-customBlack font-bold">CHANT D’OISEAU, COTONOU, BÉNIN</h3>
//                     </div>
//                 </div>

//                 <div className="flex flex-row gap-2 items-center justify-center mt-4">                    
//                     {/* Icône WhatsApp en vert */}
//                     <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />

//                     {/* Icône d'appel en noir */}
//                     <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//                     <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
//                         text-customGreen font-bold flex items-center" >
//                         <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//                     </p>
//                 </div>
     
//             </div>

//             <div className="w-full sm:w-1/2 p-4 items-start">

//                 <div className="flex flex-col  ">
//                     <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//                         <h2 className="">ENTRÉE GALA: 10.000F</h2>
//                         <h2 className="">TICKET TOMBOLA: 1.000F, 2.000F</h2>
//                         <h2 className="">TICKET STAND: 20.000F</h2>
//                         <h2 className="">INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//                     </div>
//                 </div>

//                 <div className="flex  mt-4">
//                     <h3 
//                         className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer">
//                         COMMANDEZ VOS TICKETS
//                     </h3>
//                 </div>

//             </div>
//         </div>
//     </div>
//   );
// };

// export default ExpositionVentes;
