import { useState } from "react";
import PropTypes from "prop-types"; // Ajoutez cette ligne pour les PropTypes


const SignUp = ({ onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = {
      name: formData.fullName,
      number: formData.phone,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:3000/users/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage("Inscription réussie !");
        setTimeout(() => {
          onSignUpSuccess(); // Appel la fonction pour basculer sur le formulaire de connexion
        }, 1000);
      } else {
        throw new Error(result.message || "Une erreur s'est produite lors de l'inscription.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
      {loading && <p className="text-center mb-4">Chargement...</p>}
      {message && !loading && <p className="text-center mb-4">{message}</p>}
      <label className="block mb-4">
        <span className="text-gray-700">Nom Complet</span>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Numéro</span>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Mot de passe</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-customGreen text-white p-2 rounded-lg hover:bg-green-600 transition"
        disabled={loading}
      >
        {loading ? "Chargement..." : "S'inscrire"}
      </button>
    </form>
  );
};

SignUp.propTypes = {
    onSignUpSuccess: PropTypes.func.isRequired, // Indique que cette prop est une fonction requise
  };
  

export default SignUp;


////////////

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate(); // Hook pour la redirection
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false); // État de chargement
//   const [message, setMessage] = useState(null);
//   const [redirect, setRedirect] = useState(false); // État pour gérer la redirection

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Démarre le chargement

//     const dataToSend = {
//       name: formData.fullName,
//       number: formData.phone,
//       email: formData.email,
//       password: formData.password,
//     };

//     try {
//       const response = await fetch("http://localhost:3000/users/register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       const result = await response.json();

//       // Vérifie si l'inscription est réussie
//       if (response.ok && result.success) {
//         setMessage("Inscription réussie !");
//         setRedirect(true); // Change l'état pour activer la redirection
//       } else {
//         throw new Error(result.message || "Une erreur s'est produite lors de l'inscription.");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
//     } finally {
//       setLoading(false); // Arrête le chargement
//     }
//   };

//   // Gère la redirection vers la page de connexion après une inscription réussie
//   useEffect(() => {
//     if (redirect) {
//       const timer = setTimeout(() => {
//         navigate("/auth"); // Change "/auth" par le chemin de ta page de connexion
//       }, 2000); // Redirige après 2 secondes (ajuste comme tu le souhaites)

//       return () => clearTimeout(timer); // Nettoie le timer à la destruction du composant
//     }
//   }, [redirect, navigate]);

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
//       {loading && <p className="text-center mb-4">Chargement...</p>} {/* Indicateur de chargement */}
//       {message && !loading && <p className="text-center mb-4">{message}</p>}
//       <label className="block mb-4">
//         <span className="text-gray-700">Nom Complet</span>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Numéro</span>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Email</span>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-6">
//         <span className="text-gray-700">Mot de passe</span>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <button
//         type="submit"
//         className="w-full bg-customGreen text-white p-2 rounded-lg hover:bg-green-600 transition"
//         disabled={loading} // Désactive le bouton pendant le chargement
//       >
//         S&apos;inscrire
//       </button>
//     </form>
//   );
// };

// export default SignUp;




/////////////

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate(); // Hook pour la redirection
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     password: "",
//   });
//   const [message, setMessage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const dataToSend = {
//       name: formData.fullName,
//       number: formData.phone,
//       email: formData.email,
//       password: formData.password,
//     };

//     try {
//       const response = await fetch("http://localhost:3000/users/register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       const result = await response.json();

//       // Vérifie si l'inscription est réussie
//       if (response.ok && result.success) {
//         setMessage("Inscription réussie !");
//         // Redirection vers la page de connexion
//         setTimeout(() => {
//           navigate("/auth"); // Change "/auth" par le chemin de ta page de connexion
//         }, 2000); // Redirige après 2 secondes (ajuste comme tu le souhaites)
//       } else {
//         throw new Error(result.message || "Une erreur s'est produite lors de l'inscription.");
//       }

//     } catch (error) {
//       console.error(error);
//       setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
//       {message && <p className="text-center mb-4">{message}</p>}
//       <label className="block mb-4">
//         <span className="text-gray-700">Nom Complet</span>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Numéro</span>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Email</span>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-6">
//         <span className="text-gray-700">Mot de passe</span>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <button
//         type="submit"
//         className="w-full bg-customGreen text-white p-2 rounded-lg hover:bg-green-600 transition"
//       >
//         S&apos;inscrire
//       </button>
//     </form>
//   );
// };

// export default SignUp;



/////////////

// import { useState } from "react";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     password: "",
//   });
//   const [message, setMessage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const dataToSend = {
//       name: formData.fullName,
//       number: formData.phone,
//       email: formData.email,
//       password: formData.password,
//     };

//     try {
//       const response = await fetch("http://localhost:3000/users/register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       if (!response.ok) {
//         throw new Error("Une erreur s'est produite lors de l'inscription.");
//       }

//       const result = await response.json();
//       setMessage("Inscription réussie !");
//       console.log("Inscription réussie avec :", result);

//     } catch (error) {
//       console.error(error);
//       setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
//       {message && <p className="text-center mb-4">{message}</p>}
//       <label className="block mb-4">
//         <span className="text-gray-700">Nom Complet</span>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Numéro</span>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Email</span>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-6">
//         <span className="text-gray-700">Mot de passe</span>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <button
//         type="submit"
//         className="w-full bg-customGreen text-white p-2 rounded-lg hover:bg-green-600 transition"
//       >
//         S&apos;inscrire
//       </button>
//     </form>
//   );
// };

// export default SignUp;


/////////////

// import { useState } from "react";

// const SignUp = () => {
    
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Inscription réussie avec :", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
//       <label className="block mb-4">
//         <span className="text-gray-700">Nom Complet</span>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Numéro</span>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Email</span>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <label className="block mb-6">
//         <span className="text-gray-700">Mot de passe</span>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
//         />
//       </label>
//       <button
//         type="submit"
//         className="w-full bg-customGreen text-white p-2 rounded-lg hover:bg-green-600 transition"
//       >
//         S&apos;inscrire
//       </button>
//     </form>
//   );
// };

// export default SignUp;
