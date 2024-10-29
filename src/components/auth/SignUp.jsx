import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription réussie avec :", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
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
      >
        S&apos;inscrire
      </button>
    </form>
  );
};

export default SignUp;
