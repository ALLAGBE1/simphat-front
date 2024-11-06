
import DrJustin3 from "../../assets/forPages/DrJustin3.png"
import AfficheSimphat from "../../assets/forPages/AfficheSimphat.png"
import ms from "../../assets/partenaires/ms.png";
import abrp from "../../assets/partenaires/abrp.png";
import uac from "../../assets/partenaires/uac.png";
import urmapha from "../../assets/partenaires/urmapha.png";
import lbtmm from "../../assets/partenaires/lbtmm.png";
import participants from "../../assets/forPages/participants.png";

import reunion1 from "../../assets/forPages/reunion1.png";
import reunion3 from "../../assets/forPages/reunion3.png";

import boutique1 from "../../assets/forPages/boutique1.png";
import boutique2 from "../../assets/forPages/boutique2.png";
import boutique3 from "../../assets/forPages/boutique3.png";
import boutique4 from "../../assets/forPages/boutique4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// import paticipants from "../../assets/forPages/participants.png";
// import Info from "./Info"

const AboutUs = () => {
  return (
    <div className="container mx-auto p-10" >
        <div className="flex flex-col sm:flex-row text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
            
            <div className="w-full flex justify-center">
                <div              
                    className="
                    inline-block
                    text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                    bg-customGreen text-white tracking-tight 
                    py-2 px-4 rounded-lg mb-2
                    max-w-lg
                    "
                >
                    À PROPOS DU SIMPHAT
                </div>
            </div>

        </div>


        <div className="flex flex-col-reverse sm:flex-row text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl">
            <div className="w-full sm:w-1/3">
                <div className="flex flex-col items-center">
                    <img 
                        src={DrJustin3} 
                        alt="Dr Justin" 
                        className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" 
                        />
                    <h2 className="text-customGreen text-center">Dr Justin NOUDEDJI</h2>
                    <h3 className="text-customBlack text-center">Initiateur et Coordonnateur Général du SIMPHAT</h3>

                </div>
            </div>
            <div className="w-full sm:w-2/5 p-8">
                <div className="flex flex-col items-center">
                    <img 
                        src={AfficheSimphat} 
                        alt="Dr Justin" 
                        className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" 
                        />
                </div>
                
            </div>

            {/* <div className="w-full sm:w-1/5 hidden sm:flex bg-pink-700">
                <div className="flex flex-col items-center">
                    
                </div>
            </div>  */}
        </div>

        <div className="m-0 sm:m-10">
            <div className="mt-8">
                <h2 className="font-bold">
                🟢 <span className=" underline ">PARTENAIRES ET INSTITUTIONS</span>
                </h2>
            </div>
            <div className="text-center mt-10">
                {/* <h2 className="text-xl font-bold text-green-900">PARTENAIRES ET INSTITUTIONS</h2> */}
                <img 
                src={ms} alt="Lolo Andoche" 
                className="w-5/6 sm:w-1/6 mx-auto " />

                <p>Programme National de la Pharmacopée et <br /> de la Médecine Traditionnelle (PNPMT)</p>

            </div>

        {/* <div className="flex justify-center space-x-4 mt-4 mx-auto"> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex justify-center">
            <img 
                src={abrp} 
                alt="Lolo Andoche" 
                className=""
                
            />

            </div>
            <div className="flex justify-center">
            <img 
                src={uac} 
                alt="Lolo Andoche" 
                className="" 
                width="170" 
                height="80" 
            />
            </div>
            <div className="flex justify-center">
            <img 
                src={urmapha} 
                alt="Lolo Andoche" 
                className="" 
                width="170" 
                height="80" 
            />
            </div>
            <div className="flex justify-center">
            <img 
                src={lbtmm} 
                alt="Lolo Andoche" 
                className="" 
                width="170" 
                height="80" 
            />
            </div>
        </div>

        </div>

        <div className="m-0 sm:m-10">
            <div className="mt-5">
                <h2 className="font-bold">
                🟢 <span className=" underline ">LES ORGANISMES DES TRADIPRATICIENS</span>
                </h2>
            </div>

            <div className="flex justify-center mt-8">
                <div className="text-base sm:text-lg md:text-xl xl:text-2xl lg:text-3xl">
                    <p className="">1- Association Nationale de Tradipraticiens de la Médecine traditionnelle du Bénin <br /> <span className="font-bold">(ANaPraMeTraB) : Prophète Gabriel SALAVI</span></p>
                    <p className="">2- La Fédération des Associations Nationnales des Acteurs de la Médécine Traditionnelle du Bénin <br /> <span className="font-bold">(FANAMeTraB) : Dah BADJITO Kitcè Basile</span></p>
                    <p className="">3- Union des Organisations de Santé en Médecine Traditionnelle <br /><span className="font-bold">(UOSMT) : Dah KOUGLO Hontonyon Augustin</span></p>
                    <p className="">4- Fédération Nationale de la Médecine Traditionnelle du Bénin <br /> <span className="font-bold">(FeNaMeTraB) : Professeur AZIADOME Kogblevi</span></p>
                    <p className="">5- Syndicat National des Médécins Intellectuels Traditionnels et Assimilés du Bénin <br /> <span className="font-bold">(SyNaMITrAB) : Alphonse DANSOU</span></p>
                    <p className="">6- Association des Praticiens de la Médecine Naturelle et Assimilés au Bénin <br /> <span className="font-bold">(APraMeNAB) : Vincent KOUDOGBO</span></p>
                </div>
            </div>
        </div>

        <div className="m-0 sm:m-10">
            <div className="mt-5">
                <h2 className="font-bold">
                🟢 <span className=" underline ">LE COMITÉ D’ORGANISATION DU SIMPHAT</span>
                </h2>
            </div>

            <div className="flex flex-col sm:flex-row mb-5 justify-center mt-5">
                <div className="w-full sm:w-4/5 flex justify-center mb-3 sm:mb-0">
                    <div className="">
                        <img src={reunion1} alt="Réunion 1" className="max-w-full h-auto mx-auto sm:w-834 sm:h-32 md:w-834 md:h-48 lg:w-834 lg:h-64 xl:w-834 xl:h-834" />
                    </div>
                </div>

                <div className="w-full sm:w-1/2 flex mb-3 sm:mb-0">
                    <div className="flex items-start">
                        <img src={reunion3} alt="Réunion 2" className="max-w-full h-auto mx-auto sm:w-443 sm:h-32 md:w-443 md:h-48 lg:w-443 lg:h-64 xl:w-443 xl:h-443" />
                    </div>
                </div>    
            </div>

            <div className="mt-3">
                <p className="text-center font-bold">Réunion préparatoire avec les fédérations des tradipraticiens</p>
            </div>

            <div className="flex items-center justify-center mt-5">
                <div className="">
                    <div className="">
                        <img src={participants} alt="Réunion 1" className="max-w-full h-auto mx-auto sm:w-834 sm:h-32 md:w-834 md:h-48 lg:w-834 lg:h-64 xl:w-834 xl:h-834" />
                    </div>
                </div>  
            </div>

            <div className="mt-3">
                <p className="text-center font-bold">Réunion du Comité d’organisation du SIMPHAT</p>
            </div>
        </div>

        <div className="m-0 sm:m-10">
            <div className="mt-5">
                <h2 className="font-bold">
                🟢 <span className=" underline ">LE SECRÉTARIAT PERMANENT DU SIMPHAT</span>
                </h2>
            </div>

            <div className="flex flex-col sm:flex-row mb-5 justify-center gap-4 mt-5">
                <div className="w-full sm:w-1/4 flex justify-center mb-3 sm:mb-0">
                    <div className="">
                        <img src={boutique1} alt="Réunion 1" className="max-w-full h-auto mx-auto sm:w-834 sm:h-32 md:w-834 md:h-48 lg:w-834 lg:h-64 xl:w-834 xl:h-834" />
                    </div>
                </div>

                <div className="w-full sm:w-1/4 flex mb-3 sm:mb-0">
                    <div className="flex items-start">
                        <img src={boutique2} alt="Réunion 2" className="max-w-full h-auto mx-auto sm:w-443 sm:h-32 md:w-443 md:h-48 lg:w-443 lg:h-64 xl:w-443 xl:h-443" />
                    </div>
                </div> 

                <div className="w-full sm:w-1/4 flex mb-3 sm:mb-0">
                    <div className="flex items-start">
                        <img src={boutique3} alt="Réunion 2" className="max-w-full h-auto mx-auto sm:w-443 sm:h-32 md:w-443 md:h-48 lg:w-443 lg:h-64 xl:w-443 xl:h-443" />
                    </div>
                </div> 

                <div className="w-full sm:w-1/4 flex mb-3 sm:mb-0">
                    <div className="flex items-start">
                        <img src={boutique4} alt="Réunion 2" className="max-w-full h-auto mx-auto sm:w-443 sm:h-32 md:w-443 md:h-48 lg:w-443 lg:h-64 xl:w-443 xl:h-443" />
                    </div>
                </div>    
            </div>
        </div>

        <div className="mt-10">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-customGreen text-center font-bold mb-8">
                “LA MAISON DES PLANTES”
            </h2>
            <div className="flex flex-col ">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-customBlack font-bold text-center">
                EN FACE DE LA STATION BÉNIN PÉTRO <br />
                SURU-LÉRÉ, COTONOU, BÉNIN
            </h3>

            <div className="flex flex-row gap-2 items-center justify-center mt-8">
                <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />
                <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-customGreen font-bold flex items-center">
                <span className="mr-2">(+229) </span> 98 82 63 63 / 47 47 47 39 / 67 78 78 06
                </p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default AboutUs



