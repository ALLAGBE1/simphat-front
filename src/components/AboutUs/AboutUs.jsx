
import DrJustin3 from "../../assets/forPages/DrJustin3.png"
import AfficheSimphat from "../../assets/forPages/AfficheSimphat.png"
import ms from "../../assets/partenaires/ms.png";
import abrp from "../../assets/partenaires/abrp.png";
import uac from "../../assets/partenaires/uac.png";
import urmapha from "../../assets/partenaires/urmapha.png";
import lbtmm from "../../assets/partenaires/lbtmm.png";
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
                    <p className="">1- Association Nationale de Tradipraticiens de la Médecine traditionnelle du Bénin <br /> (ANaPraMeTraB) : Prophète Gabriel SALAVI</p>
                    <p className="">2- La Fédération des Associations Nationnales des Acteurs de la Médécine <br />Traditionnelle du Bénin (FANAMeTraB) : Dah Badjito Kitcè Basile</p>
                    <p className="">3- Union des Organisations de Santé en Médecine Traditionnelle <br />(UOSMT) : Dah Kouglo Hontonyon Augustin</p>
                    <p className="">4- Fédération Nationale de la Médecine Traditionnelle du Bénin <br /> (FeNaMeTraB) : Professeur AZIADOME Kogblevi</p>
                    <p className="">5- Syndicat National des Médécins Intellectuels Traditionnels et assimilés du Bénin <br />(SyNaMITrAB) : Alphonse DANSOU</p>
                    <p className="">6- Association des Praticiens de la Médecine Naturelle et Assimilés au Bénin <br /> (APraMeNAB) : Vincent KOUDOGBO</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutUs



