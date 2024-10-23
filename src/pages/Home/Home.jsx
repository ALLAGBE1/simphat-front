import Hero from "../../components/Hero"
import Info from "../../components/Info"
import Hounkpatin from "../../assets/forPages/benjaminHounkpatin.png"
import Justin from "../../assets/forPages/Justin.png"
import Bio from "../../assets/forPages/Bio.png"
// import RenderCommittee from "../../components/RenderCommittee"
import '../../App.css';
import Partenaires from "../../components/Partenaires"
// import ExpositionTicket from "../../components/ExpositionTicket"
// import Participer from "../../components/Participer"
// import Gala from "../../components/Gala"



function Home() {
    return (
        <div className="container mx-auto">
            <Info />
            <Hero />

            <div className="" id="comiteHonneur">
                <div className="mb-8">
                    <h1 
                        className="text-center text-4xl text-black font-bold">
                        COMITÉ D&apos;HONNEUR
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row bg-customGreen bg-opacity-20 rounded-tl-[40px] rounded-br-[40px] ">
                    {/* <div className="w-full md:w-1/2 bg-customYellow flex justify-end "> */}
                    <div className="w-full md:w-1/2 flex justify-end ">
                        <img src={Bio} alt="" className="" />
                    </div>
                    {/* <div className="w-full md:w-2/3 font-bold flex items-end bg-red-600 "> */}
                    <div className="w-full md:w-2/3 font-bold flex items-end ">
                        {/* <div className="flex flex-col max-w-[600px] md:ml-20 md:mb-20 bg-red-200"> */}
                        <div className="flex flex-col max-w-[600px] md:ml-20 md:mb-20">
                            <div className="">
                                <h2 className="text-customGreen">SEM Abdoulaye Bio TCHANE</h2>
                            </div>
                            <div className="">
                                <p className="text-customBlack">
                                    Ministre d’Etat chargé du Développement et de la
                                    Coordination de l’Action Gouvernementale, Parrain du Salon
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="flex flex-col-reverse md:flex-row ">
                    {/* <div className="w-full md:w-2/3 font-bold flex md:items-center md:justify-center bg-red-600 "> */}
                    <div className="w-full md:w-2/3 font-bold flex md:items-center md:justify-center  ">
                        {/* <div className="flex flex-col max-w-[600px] md:ml-20 md:mb-20 bg-red-200"> */}
                        {/* <div className="flex flex-col bg-red-200 "> */}
                        <div className="flex flex-col ">
                            <div className="">
                                <h2 className="text-customGreen">SEM BENJAMIN HOUNKPATIN</h2>
                            </div>
                            <div className="">
                                <p className="text-customBlack">
                                    MINISTRE DE LA SANTÉ
                                </p>
                            </div>

                        </div>
                    </div>
                    {/* <div className="w-full md:w-1/2 bg-customYellow flex "> */}
                    <div className="w-full md:w-1/2 flex ">
                        <img src={Hounkpatin} alt="" className="" />
                    </div>
                    
                </div>

                <div className="flex flex-col md:flex-row bg-customGreen bg-opacity-20 rounded-tl-[40px] rounded-br-[40px] ">
                    {/* <div className="w-full md:w-1/2 bg-customYellow flex justify-end "> */}
                    <div className="w-full md:w-1/2 flex justify-end ">
                        <img src={Justin} alt="" className="" />
                    </div>
                    {/* <div className="w-full md:w-2/3 font-bold flex items-end bg-red-600 "> */}
                    <div className="w-full md:w-2/3 font-bold flex items-end ">
                        {/* <div className="flex flex-col max-w-[600px] md:ml-20 md:mb-20 bg-red-200"> */}
                        <div className="flex flex-col max-w-[600px] md:ml-20 md:mb-20 ">
                            <div className="">
                                <h2 className="text-customGreen">Dr Justin NOUDEDJI</h2>
                            </div>
                            <div className="">
                                <p className="text-customBlack">
                                    Initiateur & Manager du Projet SIMPHAT
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                




            </div>

            <Partenaires />
            {/* <Participer />
            <ExpositionTicket />
            <Gala /> */}


            

        </div>
    )
}

export default Home

/////////////////

// import { motion } from "framer-motion"
// import Hero from "../../components/Hero"
// import Info from "../../components/Info"
// import Hounkpatin from "../../assets/forPages/benjaminHounkpatin.png"
// import Justin from "../../assets/forPages/Justin.png"
// import Bio from "../../assets/forPages/Bio.png"
// import RenderCommittee from "../../components/RenderCommittee"
// import '../../App.css';
// import Partenaires from "../../components/Partenaires"
// import ExpositionTicket from "../../components/ExpositionTicket"
// import Participer from "../../components/Participer"
// import Gala from "../../components/Gala"



// function Home() {
//     return (
//         <div className="container mx-auto">
//             <Info />
//             <Hero />

//             <div className="">
//                 <motion.h1 
//                     whileInView={{ opacity: 1, y: 0 }}
//                     initial={{ opacity: 0, y: -100 }}
//                     transition={{ duration: 1.5 }}
//                     className="my-20 text-center text-4xl text-black font-bold">
//                     COMITÉ D&apos;HONNEUR
//                 </motion.h1>

//                 <div className="container mx-auto mb-10 flex justify-center items-center " >
//                     <div className="flex flex-col sm:flex-row sm:space-x-6 ">

//                         <div className="w-full sm:w-1/3 mb-5 sm:mb-0"> 
//                             <RenderCommittee imgSrc={Justin} title="Dr Justin NOUDEDJI"
//                                 text="PHARMACIEN DIRECTEUR GÉNÉRAL"
//                                     /> 
//                         </div>
                        
//                         <div className="w-full sm:w-1/3 mb-5 sm:mb-0"> 
//                             <RenderCommittee imgSrc={Bio} title="Abdoulaye Bio Tchané"
//                                 text="Ministre d'Etat, Ministre du Développement et de la Coordination de l'action gouvernementale du Benin"
//                                     /> 
//                         </div>

//                         <div className="w-full sm:w-1/3"> 
//                             <RenderCommittee imgSrc={Hounkpatin} title="Prof Benjamin HOUNKPATIN"
//                                 text="Ministre de la santé du Bénin"
//                                     /> 
//                         </div>
                        
//                     </div> 
//                 </div>
//             </div>

//             <Partenaires />
//             <Participer />
//             <ExpositionTicket />
//             <Gala />


            

//         </div>
//     )
// }

// export default Home
