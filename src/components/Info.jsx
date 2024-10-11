import { useState, useEffect } from "react";

const Info = () => {
  // État pour stocker les jours, heures, minutes et secondes restants
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fonction pour calculer le temps restant
    const calculateTimeLeft = () => {
      const today = new Date(); // Date actuelle
      const eventDate = new Date("2024-11-25T00:00:00"); // Date cible (25 novembre 2024 à minuit)

      // Calculer la différence en millisecondes
      const timeDifference = eventDate - today;

      // Si la date de l'événement est passée, arrêter le compteur
      if (timeDifference > 0) {
        // Calcul des jours, heures, minutes et secondes
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Mettre à jour l'état
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Si la date est passée, on peut afficher un message personnalisé
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculer immédiatement le temps restant
    calculateTimeLeft();

    // Mettre à jour chaque seconde
    const intervalId = setInterval(calculateTimeLeft, 1000);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto p-4 mb-3">
      <p className="text-lg font-bold text-center text-green-500">
        L&apos;événement commence dans {timeLeft.days} jour{timeLeft.days !== 1 ? "s" : ""}, 
         {timeLeft.hours} heure{timeLeft.hours !== 1 ? "s" : ""}, 
        {timeLeft.minutes} minute{timeLeft.minutes !== 1 ? "s" : ""} et 
        {timeLeft.seconds} seconde{timeLeft.seconds !== 1 ? "s" : ""} !
      </p>
    </div>
  );
};

export default Info;

//////////////


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



// const Info = () => {
//   return (
//     // <div className="pd-4 lg:mb-35 flex flex-col text-end">
//     //     <p className="text-green-900 font-light tracking-tighter my-10 text-4xl text-end ">
//     //         SALON INTERNATIONAL DE LA MEDECINE ET <br /> DE LA PHARMACOPEE TRADITIONNELLE <br />
//     //         <span className="text-black  ">(SIMPHAT 2024)</span>
//     //     </p>
//     // </div>
//     <div className="container mx-auto p-4">
//       <p className=""></p>
//     </div>
//   )
// }

// export default Info