import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null); // Réinitialise le message d'erreur

    const dataToSend = {
      number: formData.phone,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:3000/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log("Connexion réussie :", result);

        // Stockage des informations utilisateur dans le localStorage
        localStorage.setItem("token", result.token);
        localStorage.setItem("userName", result.user.name);
        localStorage.setItem("userEmail", result.user.email);
        localStorage.setItem("userNumber", result.user.number);

        // Redirige vers la page d'accueil en cas de succès
        navigate("/");
      } else {
        throw new Error(result.status || "Échec de la connexion. Veuillez vérifier vos identifiants.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
      {loading && <p className="text-center mb-4">Connexion en cours...</p>}
      {errorMessage && <p className="text-center text-red-500 mb-4">{errorMessage}</p>}
      
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
        {loading ? "Connexion en cours..." : "Se connecter"}
      </button>
    </form>
  );
};

export default Login;



///////////

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     phone: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage(null); // Réinitialise le message d'erreur

//     const dataToSend = {
//       number: formData.phone,
//       password: formData.password,
//     };

//     try {
//       const response = await fetch("http://localhost:3000/users/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       const result = await response.json();

//       if (response.ok && result.success) {
//         console.log("Connexion réussie :", result);
//         navigate("/"); // Redirige vers la page d'accueil en cas de succès
//       } else {
//         throw new Error(result.message || "Échec de la connexion. Veuillez vérifier vos identifiants.");
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage("Erreur de connexion. Veuillez réessayer.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
//       {loading && <p className="text-center mb-4">Connexion en cours...</p>}
//       {errorMessage && <p className="text-center text-red-500 mb-4">{errorMessage}</p>}
      
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
//         disabled={loading}
//       >
//         {loading ? "Connexion en cours..." : "Se connecter"}
//       </button>
//     </form>
//   );
// };

// export default Login;


////////////

// import { useState } from "react";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     phone: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Connexion avec :", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
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
//         Se connecter
//       </button>
//     </form>
//   );
// };

// export default Login;
