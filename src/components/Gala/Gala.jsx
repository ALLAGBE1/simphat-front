import { useState, } from "react";
import bgImage from "../../assets/forPages/backgroundImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Gala = () => {
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
    <div className="container mx-auto py-20 " style={{ 
        backgroundImage: `url(${bgImage})` ,
        backgroundSize: 'cover',
    }}>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                text-customGreen text-center font-bold mb-4 sm:mb-8 underline">DINER DE GALA - REMISE DES PRIX</h2>

        <div className="flex flex-col">
            <div className="flex justify-center items-center mt-4">
                <span 
                    className="bg-customGreen text-white tracking-tight py-2 px-4 lg:items-start
                        text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                    ">
                    SAMEDI 30 NOVEMBRE 2024
                </span>
            </div>

            <p className="text-center text-customGreen font-bold 
                text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5
            ">À 20H PRÉCISES</p>

            <div className="flex flex-row gap-2 items-center justify-start mt-6
                mx-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-1xl xl:max-w-1xl
            ">
                <div className=" ">
                    <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
                </div>
                <div className=" ">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                    text-customBlack font-bold">SALLE DES FÊTES DE CHANT D’OISEAU, COTONOU, BÉNIN</h3>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center  ">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
                    <h2 className="">ENTRÉE GALA: 10.000F</h2>
                    <h2 className="">TICKET TOMBOLA: 1.000F, 2.000F</h2>
                    <h2 className="">INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
                </div>
            </div>

            {/* <div className="flex mt-8 justify-center items-center">
                <h3 
                    onClick={openModal}
                    className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer">
                    COMMANDEZ VOS TICKETS
                </h3>
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
                {/* Icône WhatsApp en vert */}
                <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
                {/* Icône d'appel en noir */}
                <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                    text-customGreen font-bold flex items-center" >
                    <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
                </p>
            </div>
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

export default Gala;



///////

// import bgImage from "../../assets/forPages/backgroundImage.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";



// const Gala = () => {
//   return (
//     <div className="container mx-auto py-20 " style={{ 
//         backgroundImage: `url(${bgImage})` ,
//         backgroundSize: 'cover',
//     }}>
        
//         <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                 text-customGreen text-center font-bold mb-4 sm:mb-8 underline">DINER DE GALA - REMISE DES PRIX</h2>

//                 <div className="flex flex-col">
               
//                <div className="flex justify-center items-center mt-4">
//                    <span 
//                        className="bg-customGreen text-white tracking-tight py-2 px-4 lg:items-start
//                            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                        ">
//                        SAMEDI 30 NOVEMBRE 2024
//                    </span>
//                </div>

//                <p className="text-center text-customGreen font-bold 
//                    text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5
//                ">À 20H PRÉCISES</p>

//                <div className="flex flex-row gap-2 items-center justify-start mt-6
//                    mx-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-1xl xl:max-w-1xl
//                ">
//                    <div className=" ">
//                        <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//                    </div>
//                    <div className=" ">
//                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
//                        text-customBlack font-bold">SALLE DES FÊTES DE CHANT D’OISEAU, COTONOU, BÉNIN</h3>
//                    </div>
//                </div>

               
//              <div className="flex flex-col justify-center items-center  ">
//                     <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//                         <h2 className="">ENTRÉE GALA: 10.000F</h2>
//                         <h2 className="">TICKET TOMBOLA: 1.000F, 2.000F</h2>
//                         <h2 className="">INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//                     </div>
//                 </div>

               

//             <div className="flex mt-8 justify-center items-center">
//                 <h3 
//                     className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer">
//                     COMMANDEZ VOS TICKETS
//                 </h3>
//             </div>

//             <div className="flex flex-row gap-2 items-center justify-center mt-8">                    
//                    {/* Icône WhatsApp en vert */}
//                    <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />

//                    {/* Icône d'appel en noir */}
//                    <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
//                        text-customGreen font-bold flex items-center" >
//                        <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//                    </p>
//             </div>
        
//       </div>
//     </div>
//   );
// };

// export default Gala;




//////////////////


// import bgImage from "../../assets/forPages/backgroundImage.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";



// const Gala = () => {
//   return (
//     <div className="container mx-auto py-20 " style={{ 
//         backgroundImage: `url(${bgImage})` ,
//         backgroundSize: 'cover',
//         // backgroundBlendMode: 'darken',
//     }}>
        
//         <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                 text-customGreen text-center font-bold mb-4 sm:mb-8 underline">DINER DE GALA - REMISE DES PRIX</h2>

//       <div className="flex flex-col md:flex-row">

//         <div className="w-full md:w-2/3 flex justify-center p-4">
//             <div className="flex flex-col">
               
//                 <div className="flex justify-start mt-4">
//                     <span 
//                         className="bg-customGreen text-white tracking-tight py-2 px-4 lg:items-start
//                             text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                         ">
//                         SAMEDI 30 NOVEMBRE 2024
//                     </span>
//                 </div>

//                 <p className="flex justify-start text-customGreen font-bold 
//                     text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5
//                 ">À 20H PRÉCISES</p>

//                 <div className="flex flex-row gap-2 items-center justify-start mt-6
//                     mx-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-1xl xl:max-w-1xl
//                 ">
//                     <div className=" ">
//                         <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//                     </div>
//                     <div className=" ">
//                         <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
//                         text-customBlack font-bold">SALLE DES FÊTES DE CHANT D’OISEAU, COTONOU, BÉNIN</h3>
//                     </div>
//                 </div>

//                 <div className="flex flex-row gap-2 items-center justify-center mt-6">                    
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
//         </div>

//         <div className="w-full md:w-1/2 p-4 items-start">
//             <div className="flex flex-col  ">
//                 <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//                     <h2 className="">ENTRÉE GALA: 10.000F</h2>
//                     <h2 className="">TICKET TOMBOLA: 1.000F, 2.000F</h2>
//                     {/* <h2 className="">TICKET STAND: 20.000F</h2> */}
//                     <h2 className="">INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//                 </div>
//             </div>

//             <div className="flex  mt-4">
//                 <h3 
//                     className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer">
//                     COMMANDEZ VOS TICKETS
//                 </h3>
//             </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default Gala;

////////////////


// import TicketGala from "../../assets/ticketGala.png"
// import iconLocalisation from "../../assets/iconLocalisation.svg"
// import iconWhatsapp from "../../assets/iconWhatsapp.svg"
// import iconTelephone from "../../assets/iconTelephone.svg"
// import bgImage from "../../assets/forPages/backgroundImage.png"



// const Gala = () => {
//   return (
//     <div className="container mx-auto py-20 " style={{ backgroundImage: `url(${bgImage})` }}>
//       <div className="flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2">
//             <div className="flex justify-center mb-8">
//                 <img
//                     src={TicketGala}
//                     alt=""
//                     className="rounded object-cover mb-8 md:mb-0 "
//                 />
//             </div>
//         </div>

//         <div className="w-full md:w-1/2 flex justify-center">
//             <div className="flex flex-col">
//                 <h2 className="flex justify-center text-customGreen font-bold text-4xl mb-5">DINER DE GALA</h2>

//                 <div className="flex justify-center mb-5">
//                     <span 
//                         className="bg-customGreen text-white text-3xl tracking-tight py-2 px-4 lg:items-start">
//                         SAMEDI 30 NOVEMBRE 2024
//                     </span>
//                 </div>

//                 <p className="flex justify-center text-customGreen font-bold text-4xl mb-5">À 20H PRÉCISES</p>

//                 <div className="flex flex-row justify-center">
//                     <div className="">
//                         <img src={iconLocalisation} alt="" className="" style={{width: 61, height: 61}} />
//                     </div>
//                     <div className=" flex items-center">
//                         <h3 className="text-customBlack font-bold  " style={{fontSize: 24}}>SALLE DES FÊTES DE CHANT D’OISEAU, COTONOU, BÉNIN</h3>
//                     </div>
//                 </div>

//                 <div className="flex justify-center mb-8">
//                     <h3 
//                         className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer">
//                         COMMANDEZ VOS TICKETS
//                     </h3>
//                 </div>

//                 <div className="flex flex-row gap-2 justify-center">                    
//                     <img src={iconWhatsapp} alt="" className="" />
//                     <img src={iconTelephone} alt="" className="" />
//                     <p className="text-customGreen font-bold flex items-center text-3xl" >
//                         <span className="mr-2 " style={{fontSize: 16}} >+229 </span> 98 82 63 63 / 47 47 47 39
//                     </p>
//                 </div>
//             </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default Gala;