import { motion } from "framer-motion"
import Hero from "../../components/Hero"
import Info from "../../components/Info"
import Hounkpatin from "../../assets/forPages/benjaminHounkpatin.png"
import Justin from "../../assets/forPages/Justin.png"
import Bio from "../../assets/forPages/Bio.png"
import RenderCommittee from "../../components/RenderCommittee"


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
        </div>
    )
}

export default Home



