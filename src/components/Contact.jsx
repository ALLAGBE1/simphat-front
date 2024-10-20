
const Contact = () => {
  return (
    <div className="container mx-auto py-16 px-8">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Image de la carte à gauche */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://via.placeholder.com/600x400" // Remplace par l'URL de l'image de la carte
            alt="Carte de localisation"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Informations de contact à droite */}
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nous Contacter</h2>
          <p className="text-lg text-gray-600 mb-8">
            Vous pouvez nous contacter en utilisant les informations ci-dessous ou en remplissant le formulaire de contact.
          </p>

          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Nom de l'entreprise */}
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700">Entreprise :</span>
              <p className="ml-4 text-gray-600">Simphat</p>
            </div>

            {/* Adresse */}
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700">Adresse :</span>
              <p className="ml-4 text-gray-600">123 Rue Exemple, Paris, France</p>
            </div>

            {/* Numéro 1 */}
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700">Téléphone :</span>
              <p className="ml-4 text-gray-600">+33 1 23 45 67 89</p>
            </div>

            {/* Numéro 2 */}
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700">Autre numéro :</span>
              <p className="ml-4 text-gray-600">+33 6 12 34 56 78</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
