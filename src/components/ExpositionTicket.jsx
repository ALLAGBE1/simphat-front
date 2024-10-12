import TicketExposition from "../assets/forPages/ticketExposition.png"
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

const ExpositionTicket = () => {
  return (
    <div className="container mx-auto text-white py-20" id="exposition">
      <div className="px-8 md:px-16 lg:px-24">
        <h2 className="text-customGreen text-4xl font-bold text-center mb-12">Exposition / Ventes</h2>
        <div className="flex flex-col md:flex-row  md:space-x-12 items-start">
            <div className="">
                <img
                    src={TicketExposition}
                    alt=""
                    className="rounded object-cover mb-8 md:mb-0"
                />
            </div>

            <div className="">
                <div className="mb-12">
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-customGreen text-white mb-20 text-4xl tracking-tight py-2 px-4 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out lg:items-start">
                        CONTACTS-NOUS
                    </motion.span>
                </div>

                <div className="flex space-x-4 my-4 mb-8">
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

                <div className="md:my-0">
                    <p className="text-customGreen font-bold " style={{fontSize: 64}}>
                        <span className="" style={{fontSize: 24}}>+229</span> 67 78 78 06
                    </p>
                </div>
            </div>

       
        </div>
      </div>
    </div>
  );
};

export default ExpositionTicket;



//////////////////


// import AboutImage from "../assets/react.svg";

// const About = () => {
//   return (
//     <div className="bg-black text-white py-20" id="exposition">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <img
//             src={AboutImage}
//             alt=""
//             className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
//           />
//           <div className="flex-1">
//             <p className="text-lg mb-8">
//               I am a passionate full-stack developer with a focus on building
//               modern and responsive web applications. With a strong foundation
//               in both frontend and backend technologies, I strive to create
//               seamless and efficient user experiences.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   HTML & CSS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
//                     transform transition-transform duration-300 hover:scale-105 w-10/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   React JS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
//                     transform transition-transform duration-300 hover:scale-105 w-11/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   Node JS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
//                     transform transition-transform duration-300 hover:scale-105 w-9/12"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-12 flex justify-between text-center">
//                 <div>
//                     <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//                         3+
//                     </h3>
//                     <p>Years Experience</p>
//                 </div>
//                 <div>
//                     <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//                         50+
//                     </h3>
//                     <p>Projects Completed</p>
//                 </div>
//                 <div>
//                     <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//                         10+
//                     </h3>
//                     <p>Happy Clients</p>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;