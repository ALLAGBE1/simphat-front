import profilePic from "../assets/forPages/patriceTalon.png"
import { motion } from "framer-motion"
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaXingSquare, FaTiktok} from "react-icons/fa";


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
    // <div className="w-full lg:mb-35 bg-gray-100">
    <div className="container lg:mb-35 bg-gray-100">
        <div className="max-w-7xl mx-auto p-10">
            <div className="flex flex-col sm:flex-row items-start">

                <div className="w-full sm:w-1/2 p-4 mb-4 sm:mb-0">
                    <div className="flex flex-col mb-2 ">
                        <p className="text-green-500 font-bold  max-w-xl py-6 tracking-tighter text-2xl sm:text-3xl md:text-3xl lg:text-3xl">
                            SALON INTERNATIONAL DE LA MEDECINE ET 
                            DE LA PHARMACOPEE TRADITIONNELLE <br />
                            <span className="text-black">(SIMPHAT 2024)</span>
                        </p>

                        <div className="mb-12">
                            <motion.span 
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="bg-green-500 text-white text-4xl tracking-tight py-2 px-4 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out lg:items-start">
                                CONTACTS-NOUS
                            </motion.span>
                        </div>

                        <div className="flex space-x-4 my-4 md:my-0">
                            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
                                <FaWhatsapp />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
                                <FaXingSquare />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
                                <FaTiktok />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="w-full sm:w-1/2 p-4">
                    <div className="flex justify-center">
                        <motion.img 
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic} alt="Kevin Rush" className="p-4 object-cover rounded-md " style={{borderRadius: '40px'}} />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero


