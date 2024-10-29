import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion avec :", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
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
      >
        Se connecter
      </button>
    </form>
  );
};

export default Login;
