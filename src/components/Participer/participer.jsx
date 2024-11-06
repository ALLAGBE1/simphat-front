import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";




const Participer = () => {
  return (
    <div className="container mx-auto p-10">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold text-center mb-8">PARTICIPER</h2>
        {/* <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-bold text-center mb-8">AUX DIFFÉRENTES CONFÉRENCES</h2> */}
        <p className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl text-black font-bold text-center mt-10">SI VOUS VOULEZ PARTICIPER AU CONCOURS DU<br /> MEILLEUR PRODUIT, CONTACTEZ</p>

        <div className="flex flex-row gap-2 items-center justify-center mt-8">
            <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
            <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
              <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39 / 67 78 78 06
            </p>
        </div>
        
        <div className="flex flex-col sm:flex-row text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-10">
            
            <div className="w-full flex justify-center">
                <div              
                    className="
                    inline-block
                    text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl 
                    bg-customGreen text-white tracking-tight 
                    py-2 px-4 mb-2
                    max-w-lg
                    font-bold
                    "
                >
                    <Link to="/themeConferences">
                        <h2 
                            >
                            CONSULTER LES THÈMES DE COMMUNICATION
                        </h2>
                    </Link>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Participer;

