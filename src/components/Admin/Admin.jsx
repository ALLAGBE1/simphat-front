
const EspaceAdmin = () => {
  return (
    <div className="flex min-h-screen">
      {/* Barre latérale gauche */}
      <aside className="w-1/5 bg-green-100 flex flex-col items-center justify-center p-4">
        <div className="mb-1">
          {/* Logo */}
          <img src="logo.png" alt="Logo SIMPHAT" className="w-32 h-auto" />
        </div>
        <h2 className="text-center text-xs mt-2"></h2>
      </aside>

      {/* Contenu principal */}
      <main className="w-3/5 p-8">
        {/* Barre de navigation */}
        <nav className="flex justify-around bg-black text-white py-2">
          <a href="#" className="text-yellow-400">ACCUEIL</a>
          <a href="#">CLIENTS</a>
          <a href="#">INVENTAIRE</a>
        </nav>

        {/* Section centrale */}
        <div className="text-center my-8">
          <h1 className="text-2xl font-bold text-green-800">INTERFACE ADMINISTRATEUR</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Carte de Produits */}
          <div className="bg-green-100 p-8 rounded-lg flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4">PRODUITS</h2>
            <button className="text-green-800 font-bold">GÉRER STOCK</button>
          </div>
          
          {/* Carte d'Événements */}
          <div className="bg-green-100 p-8 rounded-lg flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4">ÉVÉNEMENTS</h2>
            <button className="text-green-800 font-bold">PUBLIER</button>
          </div>
        </div>

        {/* Barre de recherche */}
        <div className="my-8 flex justify-center">
          <input 
            type="text" 
            placeholder="Rechercher" 
            className="border border-gray-400 p-2 w-1/2"
          />
          <button className="bg-green-700 text-white p-2">RECHERCHER</button>
        </div>
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
                            <p className="text-xl text-green-900">0</p>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-green-900">UTILISATEURS</p>
                    </div>

                    {/* Bloc En Ligne */}
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
                            <p className="text-xl text-green-900">0</p>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-green-900">EN LIGNE</p>
                    </div>

                    {/* Bloc Événements en cours */}
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
                            <p className="text-xl text-green-900">0</p>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-green-900">ÉVÉNEMENTS EN COURS</p>
                    </div>

                    {/* Bloc Produits Commandés */}
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center border-2 border-green-900">
                            <p className="text-xl text-green-900">0</p>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-green-900">PRODUITS COMMANDÉS</p>
                    </div>
                </div>
            </div>
        </aside>
    </div>
  );
};

export default EspaceAdmin;
