
import DrJustin2 from "../../assets/forPages/DrJustin2.png"
// import Info from "./Info"

const AboutUs = () => {
  return (
    <div className="container mx-auto p-10" >
        <div className="flex flex-col sm:flex-row text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            
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
                        src={DrJustin2} 
                        alt="Dr Justin" 
                        className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" 
                        />
                    <h2 className="text-customGreen text-center">Dr Justin NOUDEDJI</h2>
                    <h3 className="text-customBlack text-center">Initiateur et Coordonnateur Général du SIMPHAT</h3>

                </div>
            </div>
            <div className="w-full sm:w-4/5 p-8">
                <p className="mb-3">
                Le Salon International de la Médecine et de la Pharmacopée Traditionnelles
                </p>
                
            </div>

            {/* <div className="w-full sm:w-1/5 hidden sm:flex ">
                <div className="flex flex-col items-center">
                    
                </div>
            </div>  */}
        </div>
    </div>
  )
}

export default AboutUs



