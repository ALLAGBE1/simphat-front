import { useState, useEffect } from "react";

const Info = () => {
  // État pour stocker les jours restants
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Fonction pour calculer les jours restants
    const calculateDaysLeft = () => {
      const today = new Date(); // Date actuelle
      const eventDate = new Date("2024-11-27T00:00:00"); // Date cible (25 novembre 2024 à minuit)

      // Calculer la différence en millisecondes
      const timeDifference = eventDate - today;

      // Si la date de l'événement est passée, on n'affiche plus de compteur
      if (timeDifference > 0) {
        // Calcul des jours restants
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Mettre à jour l'état
        setDaysLeft(days);
      } else {
        // Si la date est passée, on peut afficher "JOUR J"
        setDaysLeft(0);
      }
    };

    // Calculer immédiatement le temps restant
    calculateDaysLeft();

    // Mettre à jour chaque jour (intervalle fixé à 24 heures)
    const intervalId = setInterval(calculateDaysLeft, 1000 * 60 * 60 * 24); // Met à jour chaque jour

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto p-4 mb-3">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <p className="text-[48px] font-bold text-center text-customGreen animate-blink">
            {daysLeft > 0 ? `JOUR J - ${daysLeft}` : "JOUR J"}
          </p>
        </div>
        <div className="w-full md:w-1/2">

        </div>
      </div>
    </div>
  );
};

export default Info;


///////////

// import { useState, useEffect } from "react";

// const Info = () => {
//   // État pour stocker les jours restants
//   const [daysLeft, setDaysLeft] = useState(0);

//   useEffect(() => {
//     // Fonction pour calculer les jours restants
//     const calculateDaysLeft = () => {
//       const today = new Date(); // Date actuelle
//       const eventDate = new Date("2024-11-25T00:00:00"); // Date cible (25 novembre 2024 à minuit)

//       // Calculer la différence en millisecondes
//       const timeDifference = eventDate - today;

//       // Si la date de l'événement est passée, on n'affiche plus de compteur
//       if (timeDifference > 0) {
//         // Calcul des jours restants
//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//         // Mettre à jour l'état
//         setDaysLeft(days);
//       } else {
//         // Si la date est passée, on peut afficher "JOUR J"
//         setDaysLeft(0);
//       }
//     };

//     // Calculer immédiatement le temps restant
//     calculateDaysLeft();

//     // Mettre à jour chaque jour (intervalle fixé à 24 heures)
//     const intervalId = setInterval(calculateDaysLeft, 1000 * 60 * 60 * 24); // Met à jour chaque jour

//     // Nettoyage de l'intervalle lorsque le composant est démonté
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="container mx-auto p-4 mb-3">
//       <p className="text-lg font-bold text-center text-green-500">
//         {daysLeft > 0 ? `JOUR J - ${daysLeft}` : "JOUR J"}
//       </p>
//     </div>
//   );
// };

// export default Info;


/////////////

// import { useState, useEffect } from "react";

// const Info = () => {
//   // État pour stocker les jours, heures, minutes et secondes restants
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     // Fonction pour calculer le temps restant
//     const calculateTimeLeft = () => {
//       const today = new Date(); // Date actuelle
//       const eventDate = new Date("2024-11-25T00:00:00"); // Date cible (25 novembre 2024 à minuit)

//       // Calculer la différence en millisecondes
//       const timeDifference = eventDate - today;

//       // Si la date de l'événement est passée, arrêter le compteur
//       if (timeDifference > 0) {
//         // Calcul des jours, heures, minutes et secondes
//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//           (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         // Mettre à jour l'état
//         setTimeLeft({ days, hours, minutes, seconds });
//       } else {
//         // Si la date est passée, on peut afficher un message personnalisé
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     // Calculer immédiatement le temps restant
//     calculateTimeLeft();

//     // Mettre à jour chaque seconde
//     const intervalId = setInterval(calculateTimeLeft, 1000);

//     // Nettoyage de l'intervalle lorsque le composant est démonté
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="container mx-auto p-4 mb-3">
//       <p className="text-lg font-bold text-center text-green-500">
//         L&apos;événement commence dans {timeLeft.days} jour{timeLeft.days !== 1 ? "s" : ""}, 
//          {timeLeft.hours} heure{timeLeft.hours !== 1 ? "s" : ""}, 
//         {timeLeft.minutes} minute{timeLeft.minutes !== 1 ? "s" : ""} et 
//         {timeLeft.seconds} seconde{timeLeft.seconds !== 1 ? "s" : ""} !
//       </p>
//     </div>
//   );
// };

// export default Info;
