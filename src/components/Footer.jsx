import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-[#4CAF50] py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">SIMPHAT 2024</h3>
            <p className="text-white">
              Salon International de la Médecine et de la Pharmacopée 
              Traditionnelle (SIMPHAT 2024)
            </p>
          </div>
          <div className="flex-1 w-full">
            {/* <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                CONTACTS-NOUS
              </button>
            </form> */}
            <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              ></button>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4CAF50]">
              <FaGithub />
            </a>
          </div>

          <p className="text-gray-400">
            &copy; SIMPHAT {new Date().getFullYear()}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




///////////

// import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#ECF0F1] text-white py-8">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
//           <div className="flex-1 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">SIMPHAT 2024</h3>
//             <p className="text-gray-400">
//               Salon International de la Médecine et de la Pharmacopée 
//               Traditionnelle (SIMPHAT 2024)
//             </p>
//           </div>
//           <div className="flex-1 w-full">
//             <form className="flex items-center justify-center">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
//                 focus:outline-none focus:border-green-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
//                 py-2 rounded-r-lg"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div
//           className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
//           justify-between items-center"
//         >
//           <div className="flex space-x-4 my-4 md:my-0">
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaFacebook />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaTwitter />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaLinkedin />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaGithub />
//             </a>
//           </div>

//           <p className="text-gray-400">
//             &copy; SIMPHAT {new Date().getFullYear()}. Tous droits réservés.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
