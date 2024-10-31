import Hero from "../../components/Hero"
// import Info from "../../components/Info"
// import Hounkpatin from "../../assets/forPages/benjaminHounkpatin.png"
// import Bio from "../../assets/forPages/Bio.png"
import '../../App.css';
// import Partenaires from "../../components/Partenaires"
// import DrJustin from "../../assets/forPages/DrJustin.png";





function Home() {
    return (
        <div className="container mx-auto">
            {/* <Info /> */}
            <Hero />

            {/* <div className="" id="comiteHonneur">
                <div className="mb-10">
                    <h1 
                        className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-bold">
                        COMITÉ D&apos;HONNEUR
                    </h1>
                </div>

                <div className="flex flex-col sm:flex-row bg-customGreen bg-opacity-20 rounded-tl-[40px] rounded-br-[40px] mb-5 sm:mb-10">
        
                    <div className="w-full md:w-1/2">
                        <img src={Bio} alt="" className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" />
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


            </div> */}

            {/* <Partenaires /> */}
        </div>
    )
}

export default Home



////////////////////

// import Hero from "../../components/Hero"
// import Info from "../../components/Info"
// import Hounkpatin from "../../assets/forPages/benjaminHounkpatin.png"
// import Justin from "../../assets/forPages/Justin.png"
// import Bio from "../../assets/forPages/Bio.png"
// import '../../App.css';
// import Partenaires from "../../components/Partenaires"




// function Home() {
//     return (
//         <div className="container mx-auto">
//             <Info />
//             <Hero />

//             <div className="" id="comiteHonneur">
//                 <div className="mb-10">
//                     <h1 
//                         className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-bold">
//                         COMITÉ D&apos;HONNEUR
//                     </h1>
//                 </div>

//                 <div className="flex flex-col sm:flex-row bg-customGreen bg-opacity-20 rounded-tl-[40px] rounded-br-[40px] ">
//                     {/* <div className="w-full md:w-1/2 flex justify-end ">
//                         <img src={Bio} alt="" className="" />
//                     </div> */}
//                     <div className="w-full md:w-1/2">
//                         <img src={Bio} alt="" className="max-w-full h-auto mx-auto sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80" />
//                     </div>
//                     {/* <div className="w-full md:w-2/3 font-bold flex items-end "> */}
//                     <div className="w-full md:w-4/5 font-bold flex items-end ">
//                         {/* <div className="flex flex-col max-w-[600px] md:ml-20 md:mb-20 bg-red-200"> */}
//                         <div className="flex flex-col max-w-[600px] md:ml-20 md:mb-20">
//                             <div className="">
//                                 <h2 className="text-customGreen">SEM Abdoulaye Bio TCHANE</h2>
//                             </div>
//                             <div className="">
//                                 <p className="text-customBlack">
//                                     Ministre d’Etat chargé du Développement et de la
//                                     Coordination de l’Action Gouvernementale, Parrain du Salon
//                                 </p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>


//                 <div className="flex flex-col-reverse md:flex-row ">
//                     <div className="w-full md:w-2/3 font-bold flex md:items-center md:justify-center  ">
//                         <div className="flex flex-col ">
//                             <div className="">
//                                 <h2 className="text-customGreen">SEM BENJAMIN HOUNKPATIN</h2>
//                             </div>
//                             <div className="">
//                                 <p className="text-customBlack">
//                                     MINISTRE DE LA SANTÉ
//                                 </p>
//                             </div>

//                         </div>
//                     </div>
//                     <div className="w-full md:w-1/2 flex ">
//                         <img src={Hounkpatin} alt="" className="" />
//                     </div>
                    
//                 </div>

//                 <div className="flex flex-col md:flex-row bg-customGreen bg-opacity-20 rounded-tl-[40px] rounded-br-[40px] ">
//                     {/* <div className="w-full md:w-1/2 bg-customYellow flex justify-end "> */}
//                     <div className="w-full md:w-1/2 flex justify-end ">
//                         <img src={Justin} alt="" className="" />
//                     </div>
//                     {/* <div className="w-full md:w-2/3 font-bold flex items-end bg-red-600 "> */}
//                     <div className="w-full md:w-2/3 font-bold flex items-end ">
//                         {/* <div className="flex flex-col max-w-[600px] md:ml-20 md:mb-20 bg-red-200"> */}
//                         <div className="flex flex-col max-w-[600px] md:ml-20 md:mb-20 ">
//                             <div className="">
//                                 <h2 className="text-customGreen">Dr Justin NOUDEDJI</h2>
//                             </div>
//                             <div className="">
//                                 <p className="text-customBlack">
//                                     Initiateur & Manager du Projet SIMPHAT
//                                 </p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

                




//             </div>

//             <Partenaires />
//             {/* <Participer />
//             <ExpositionTicket />
//             <Gala /> */}


            

//         </div>
//     )
// }

// export default Home