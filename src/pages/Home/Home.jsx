import { motion } from "framer-motion"
import PropTypes from "prop-types"
import Hero from "../../components/Hero"
import Info from "../../components/Info"
import Hounkpatin from "../../assets/forPages/benjaminHounkpatin.png"


function RenderCommittee ({ imgSrc, title, subtitle, text }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imgSrc} alt="Card image cap" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      {subtitle && (
        <div className="px-6 pt-4 pb-2">
          <span className="text-gray-500">{subtitle}</span>
        </div>
      )}
    </div>
  );
};

// Ajout des propTypes pour valider les props
RenderCommittee.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired,
}


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
                            <RenderCommittee imgSrc={Hounkpatin} title="Dr Justin NOUDEDJI"
                                text="PHARMACIEN DIRECTEUR GÉNÉRAL"
                                    /> 
                        </div>
                        
                        <div className="w-full sm:w-1/3 mb-5 sm:mb-0"> 
                            <RenderCommittee imgSrc={Hounkpatin} title="Abdoulaye Bio Tchané"
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




// function RenderCommittee() {
//     return(
//         <Card>

//         </Card>
//     );
// }