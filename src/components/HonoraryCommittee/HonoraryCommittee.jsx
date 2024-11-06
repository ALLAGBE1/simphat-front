import Hounkpatin from "../../assets/forPages/benjaminHounkpatin.png"
import Bio3 from "../../assets/forPages/Bio3.png"
import '../../App.css';
import DrJustin from "../../assets/forPages/DrJustin.png";

const HonoraryCommittee = () => {
  return (
    <div className="container mx-auto p-10" >
          <div className="" id="comiteHonneur">
                <div className="mb-10">
                    <h1 
                        className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-bold">
                        COMITÉ D&apos;HONNEUR
                    </h1>
                </div>

                <div className="flex flex-col sm:flex-row bg-customGreen bg-opacity-20 rounded-tl-[40px] rounded-br-[40px] mb-5 sm:mb-10">
        
                    <div className="w-full md:w-1/2">
                        <img src={Bio3} alt="" className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" />
                    </div>

                    <div className="w-full md:w-4/5 font-bold flex items-center ">
                        <div className="flex flex-col max-w-[600px] ">
                            <div className="">
                                <h2 className="text-customGreen">SEM Abdoulaye Bio TCHANE</h2>
                            </div>
                            <div className="mb-5 sm:mb-10">
                                <p className="text-customBlack">
                                    Ministre d’Etat chargé du Développement et de la
                                    Coordination de l’Action Gouvernementale, Parrain du SIMPHAT
                                </p>
                            </div>

                            <div className="">
                                <p className="text-customBlack">
                                    PRIX “ABDOULAYE BIO TCHANE” POUR L’INNOVATION ET LA RECHERCHE D’UNE VALEUR DE 1.800.000F CFA
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-customGreen bg-opacity-20 rounded-tl-[40px] rounded-br-[40px] mb-5 sm:mb-10">
        
                    <div className="w-full md:w-1/2">
                        <img src={Hounkpatin} alt="" className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" />
                    </div>

                    <div className="w-full md:w-4/5 font-bold flex items-center ">
                        <div className="flex flex-col max-w-[600px] ">
                            <div className="">
                                <h2 className="text-customGreen">SEM BENJAMIN HOUNKPATIN</h2>
                            </div>
                            <div className="mb-5 sm:mb-10">
                                <p className="text-customBlack">
                                    MINISTRE DE LA SANTÉ
                                </p>
                            </div>

                            <div className="">
                                <p className="text-customBlack">
                                    PRIX SPÉCIAL PROF BENJAMIN HOUNKPATIN D’UNE VALEUR DE 500.000F CFA
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-customGreen bg-opacity-20 rounded-tl-[40px] rounded-br-[40px] ">
        
                    <div className="w-full md:w-1/2">
                        <img src={DrJustin} alt="" className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" />
                    </div>

                    <div className="w-full md:w-4/5 font-bold flex items-center ">
                        <div className="flex flex-col max-w-[600px] ">
                            <div className="">
                                <h2 className="text-customGreen">Dr Justin NOUDEDJI</h2>
                            </div>
                            <div className="mb-5 sm:mb-10">
                                <p className="text-customBlack">
                                    Initiateur et Coordonnateur Général du SIMPHAT
                                </p>
                            </div>

                            <div className="">
                                <p className="text-customBlack">
                                    PRIX SPÉCIAL D’UNE VALEUR DE 200.000F CFA
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
    </div>
  )
}

export default HonoraryCommittee