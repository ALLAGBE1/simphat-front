import { motion } from "framer-motion"
import Hero from "../../components/Hero"
import Info from "../../components/Info"
import Hounkpatin from "../../assets/forPages/benjaminHounkpatin.png"
import Justin from "../../assets/forPages/Justin.png"
import Bio from "../../assets/forPages/Bio.png"
import RenderCommittee from "../../components/RenderCommittee"
import '../../App.css';
import Partenaires from "../../components/Partenaires"
import ExpositionTicket from "../../components/ExpositionTicket"



function Home() {
    return (
        <div className="container mx-auto">
            <Info />
            <Hero />

            <div className="">
                <motion.h1 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl text-black font-bold">
                    Comité d&apos;Honneur
                </motion.h1>

                <div className="container mx-auto mb-10 flex justify-center items-center " >
                    <div className="flex flex-col sm:flex-row sm:space-x-6 ">

                        <div className="w-full sm:w-1/3 mb-5 sm:mb-0"> 
                            <RenderCommittee imgSrc={Justin} title="Dr Justin NOUDEDJI"
                                text="PHARMACIEN DIRECTEUR GÉNÉRAL"
                                    /> 
                        </div>
                        
                        <div className="w-full sm:w-1/3 mb-5 sm:mb-0"> 
                            <RenderCommittee imgSrc={Bio} title="Abdoulaye Bio Tchané"
                                text="Ministre d'Etat, Ministre du Développement et de la Coordination de l'action gouvernementale du Benin"
                                    /> 
                        </div>

                        <div className="w-full sm:w-1/3"> 
                            <RenderCommittee imgSrc={Hounkpatin} title="Prof Benjamin HOUNKPATIN"
                                text="Ministre de la santé du Bénin"
                                    /> 
                        </div>
                        
                    </div> 
                </div>
            </div>

            <Partenaires />

            <ExpositionTicket />

        </div>
    )
}

export default Home


//////////////

// import { motion } from "framer-motion"
// import Hero from "../../components/Hero"
// import Info from "../../components/Info"
// import Hounkpatin from "../../assets/forPages/benjaminHounkpatin.png"
// import Justin from "../../assets/forPages/Justin.png"
// import Bio from "../../assets/forPages/Bio.png"
// import ABMed from "../../assets/partenaires/ABMed.png"
// import boutiqueLogo from "../../assets/partenaires/boutiqueLogo.png"
// import ms1 from "../../assets/partenaires/ms1.png"
// import pharmacieLogo from "../../assets/partenaires/pharmacieLogo.png"
// import uacLogo from "../../assets/partenaires/uacLogo.png"
// import RenderCommittee from "../../components/RenderCommittee"
// import '../../App.css';

// const partners = [
//     { name: "Partner 1", logo: ABMed },
//     { name: "Partner 2", logo: boutiqueLogo },
//     { name: "Partner 3", logo: ms1 },
//     { name: "Partner 4", logo: pharmacieLogo },
//     { name: "Partner 5", logo: uacLogo },
//     { name: "Partner 6", logo: "https://via.placeholder.com/150x100?text=Logo+6" },
//   ];

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
//                     Comité d&apos;Honneur
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

//             <div className="grid-container">
//                 {partners.map((partner, index) => (
//                 <motion.div
//                     key={index}
//                     className="partner-card"
//                     whileHover={{ scale: 1.1, rotate: 1 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                 >
//                     <img src={partner.logo} alt={partner.name} className="partner-logo" />
//                     <motion.div
//                     className="partner-info"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     >
//                     <h3>{partner.name}</h3>
//                     </motion.div>
//                 </motion.div>
//                 ))}
//             </div>


//         </div>
//     )
// }

// export default Home



