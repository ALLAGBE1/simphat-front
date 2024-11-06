import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import bgImage from "../../assets/forPages/exposerVente.png"


const Contact = () => {

  return (
    <div className="container mx-auto py-20" style={{ 
        backgroundImage: `url(${bgImage})` ,
        backgroundSize: 'cover',
    }}>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
        SECRÉTARIAT PERMANENT DU SIMPHAT
      </h2>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen text-center font-bold mb-8 underline">
        “LA MAISON DES PLANTES”
      </h2>
      {/* <div className="flex flex-col sm:flex-row"> */}
      <div className="flex flex-col ">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customBlack font-bold text-center">
            EN FACE DE LA STATION BÉNIN PÉTRO <br />
            SURU-LÉRÉ, COTONOU, BÉNIN
          </h3>

          <div className="flex flex-row gap-2 items-center justify-center mt-8">
            <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
            <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold flex items-center">
              <span className="mr-2">(+229) </span> 98 82 63 63 / 47 47 47 39 / 67 78 78 06
            </p>
          </div>

      </div>
     
    </div>
  );
};

export default Contact;

