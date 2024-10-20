import presidentTalon from "../assets/forPages/presidentTalon.png"
import { motion } from "framer-motion"


const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className="container lg:mb-35">
        <div className="max-w-7xl mx-auto p-10">
            <div className="flex flex-col sm:flex-row items-start">

                <div className="w-full md:w-1/9 p-4 mb-4 sm:mb-0">
                    <div className="flex flex-col mb-2 ">

                        <div className="mb-12">
                            <motion.span 
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="bg-green-500 text-white text-4xl tracking-tight py-2 px-4 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out lg:items-start">
                                À PROPOS DE NOUS
                            </motion.span>
                        </div>

                        {/* <p className="text-customBlack font-bold  max-w-xl py-6 tracking-tighter text-2xl sm:text-3xl md:text-3xl lg:text-3xl"> */}
                        <p className="text-customBlack italic font-light py-6 text-[32px]">
                            Le Bénin possède un potentiel inexploité dans le domaine
                            de l&apos;industrie pharmaceutique, malgré un constat alarmant :
                            la production locale de médicaments est presque inexistante,
                            avec moins de trois laboratoires fonctionnels et plus de 95% des
                            médicaments importés. Face à cette situation, nous avons... 
                        </p>

                    </div>
                </div>


                <div className="w-full md:w-1/2 p-4">
                    <div className="flex flex-col mb-2">
                        <img 
                            src={presidentTalon} alt="Kevin Rush" className="w-534 h-auto md:w-32 " />
                        <h2 className="text-center">SEM PATRICE A. G. TALON</h2>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero


/////////////////////

// import presidentTalon from "../assets/forPages/presidentTalon.png"
// import { motion } from "framer-motion"


// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {duration: 0.5, delay: delay}
//     }
// })

// const Hero = () => {
//   return (
//     <div className="container lg:mb-35">
//         <div className="max-w-7xl mx-auto p-10">
//             <div className="flex flex-col sm:flex-row items-start">

//                 <div className="w-full sm:w-1/2 p-4 mb-4 sm:mb-0">
//                     <div className="flex flex-col mb-2 ">

//                         <div className="mb-12">
//                             <motion.span 
//                                 variants={container(0.5)}
//                                 initial="hidden"
//                                 animate="visible"
//                                 className="bg-green-500 text-white text-4xl tracking-tight py-2 px-4 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out lg:items-start">
//                                 À PROPOS DE NOUS
//                             </motion.span>
//                         </div>

//                         {/* <p className="text-customBlack font-bold  max-w-xl py-6 tracking-tighter text-2xl sm:text-3xl md:text-3xl lg:text-3xl"> */}
//                         <p className="text-customBlack italic font-light  max-w-[1069px] py-6 text-[32px]">
//                             Le Bénin possède un potentiel inexploité dans le domaine
//                             de l&apos;industrie pharmaceutique, malgré un constat alarmant :
//                             la production locale de médicaments est presque inexistante,
//                             avec moins de trois laboratoires fonctionnels et plus de 95% des
//                             médicaments importés. Face à cette situation, nous avons... 
//                         </p>

//                     </div>
//                 </div>


//                 <div className="w-full sm:w-1/3 p-4">
//                     <motion.img 
//                         initial={{ x: 100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 1, delay: 1.2 }}
//                         src={presidentTalon} alt="Kevin Rush" className="max-w-[534px] h-[640px] " style={{borderRadius: '40px'}} />
//                 </div>


//                 {/* <div className="w-full sm:w-1/3 p-4">
//                     <div className="flex justify-center">
//                         <motion.img 
//                             initial={{ x: 100, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             transition={{ duration: 1, delay: 1.2 }}
//                             src={presidentTalon} alt="Kevin Rush" className="max-w-[534px] h-[640px] " style={{borderRadius: '40px'}} />
//                     </div>
//                 </div> */}

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero



/////////////


// import profilePic from "../assets/forPages/patriceTalon.png"
// import { motion } from "framer-motion"
// import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaXingSquare, FaTiktok} from "react-icons/fa";


// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {duration: 0.5, delay: delay}
//     }
// })

// const Hero = () => {
//   return (
//     // <div className="w-full lg:mb-35 bg-gray-100">
//     <div className="container lg:mb-35 bg-gray-100">
//         <div className="max-w-7xl mx-auto p-10">
//             <div className="flex flex-col sm:flex-row items-start">

//                 <div className="w-full sm:w-1/2 p-4 mb-4 sm:mb-0">
//                     <div className="flex flex-col mb-2 ">
//                         <p className="text-green-500 font-bold  max-w-xl py-6 tracking-tighter text-2xl sm:text-3xl md:text-3xl lg:text-3xl">
//                             SALON INTERNATIONAL DE LA MEDECINE ET 
//                             DE LA PHARMACOPEE TRADITIONNELLE <br />
//                             <span className="text-black">(SIMPHAT 2024)</span>
//                         </p>

//                         <div className="mb-12">
//                             <motion.span 
//                                 variants={container(0.5)}
//                                 initial="hidden"
//                                 animate="visible"
//                                 className="bg-green-500 text-white text-4xl tracking-tight py-2 px-4 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out lg:items-start">
//                                 CONTACTS-NOUS
//                             </motion.span>
//                         </div>

//                         <div className="flex space-x-4 my-4 md:my-0">
//                             <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
//                                 <FaLinkedin />
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
//                                 <FaWhatsapp />
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
//                                 <FaFacebook />
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
//                                 <FaInstagram />
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
//                                 <FaTwitter />
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
//                                 <FaXingSquare />
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
//                                 <FaTiktok />
//                             </a>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="w-full sm:w-1/2 p-4">
//                     <div className="flex justify-center">
//                         <motion.img 
//                             initial={{ x: 100, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             transition={{ duration: 1, delay: 1.2 }}
//                             src={profilePic} alt="Kevin Rush" className="p-4 object-cover rounded-md " style={{borderRadius: '40px'}} />
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero


