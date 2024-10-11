import { motion } from "framer-motion"
import ProfilComite from "./ProfilComite"
// import ProfilComite from "./ProfilComite"
// import Hounkpatin from "../assets/forPages/benjaminHounkpatin.png"


const Committee = () => {
  return (
    <div className="container mx-auto">
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl text-black font-bold">
            Comité d&apos;Honneur
        </motion.h1>

        <div className="container mx-auto mb-10 flex justify-center items-center " >
            <div className="flex flex-col sm:flex-row sm:space-x-6  " >

                <div className="w-full sm:w-1/3 mb-5 sm:mb-0"> 
                    <div className="rounded-lg bg-white h-[350px] w-[450px] border border-collapse">
                        <ProfilComite  />
                    </div>
                </div>
                
                {/* <div className="w-full sm:w-1/3 mb-5 sm:mb-0"> 
                    <div className="rounded-lg bg-white h-[350px] w-[450px] border border-collapse">
                        <ProfilComite  />
                    </div>
                </div>

                <div className="w-full sm:w-1/3"> 
                    <div className="rounded-lg bg-white h-[350px] w-[450px] border border-collapse">
                        <ProfilComite  />
                    </div>
                </div> */}
                
            </div> 
        </div>

            
    </div>
  )
}

export default Committee



//////////////

// import { motion } from "framer-motion"
// import ProfilComite from "./ProfilComite"
// // import ProfilComite from "./ProfilComite"


// const Manager = () => {
//   return (
//     <div className="container mx-auto">
//         <motion.h1 
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 1.5 }}
//             className="my-20 text-center text-4xl text-black font-bold">
//             Comité d&apos;Honneur
//         </motion.h1>

//         <div className="container mx-auto mb-10 flex justify-center items-center " >
//             <div className="flex flex-col sm:flex-row sm:space-x-6  " >

//                 {/* <div className=" w-full sm:w-1/3 mb-5 sm:mb-0"> 
//                     <div className="rounded-lg bg-red-500 h-[300px] w-[450px]">
//                         <p className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-3xl">
//                             Dr Justin NOUDEDJI <br />
//                             <span className="text-black">PHARMACIEN DIRECTEUR GÉNÉRAL</span>
//                         </p>
//                     </div>
//                 </div> */}

//                 <div className="w-full sm:w-1/3 mb-5 sm:mb-0"> 
//                     <div className="rounded-lg bg-white h-[350px] w-[450px] border border-collapse">
//                         <ProfilComite  />
//                     </div>
//                 </div>
                
//                 <div className="w-full sm:w-1/3 mb-5 sm:mb-0"> 
//                     <div className="rounded-lg bg-white h-[350px] w-[450px] border border-collapse">
//                         <ProfilComite  />
//                     </div>
//                 </div>

//                 <div className="w-full sm:w-1/3"> 
//                     <div className="rounded-lg bg-white h-[350px] w-[450px] border border-collapse">
//                         <ProfilComite  />
//                     </div>
//                 </div>
                
//             </div> 
//         </div>

            
//     </div>
//   )
// }

// export default Manager



///////


// import { motion } from "framer-motion"
// import ProfilComite from "./ProfilComite"
// // import DrNoudedji from "../assets/DrNoudedji.png"
// // import BioTchane from "../assets/BioTchane.png"
// // import Hounkpatin from "../assets/Hounkpatin.png"


// const Manager = () => {
//   return (
//     <div className="container mx-auto px-8">
//         <motion.h1 
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 1.5 }}
//             className="my-20 text-center text-4xl text-black font-bold">
//             Comité d&apos;Honneur
//         </motion.h1>

//         <div className="container bg-red-500 mb-10 p-10 flex justify-end max-w-xl">
//             <ProfilComite />
//         </div>

//         <div className="container bg-red-500 mb-10 p-10 flex justify-start max-w-xl">
//             <ProfilComite />     
//         </div>

//         <div className="container bg-red-500 flex p-10 justify-end max-w-xl">
//             <ProfilComite />   
//         </div>
//     </div>
//     // <div className="border-neutral-800 pb-24">
//         // <motion.h1 
//         //     whileInView={{ opacity: 1, y: 0 }}
//         //     initial={{ opacity: 0, y: -100 }}
//         //     transition={{ duration: 1.5 }}
//         //     className="my-20 text-center text-4xl text-black font-bold">
//         //     Comité d&apos;Honneur
//         // </motion.h1>
//     //     <motion.div 
//     //         whileInView={{ opacity: 1, x: 0 }}
//     //         initial={{ opacity: 0, x: -100 }}
//     //         transition={{ duration: 1.5 }}
//     //         className="flex flex-wrap items-center justify-center gap-4">
//     //         <img 
//     //             src={DrNoudedji} 
//     //             alt="Dr NOUDEDJI" 
//     //             className=" p-4 w-72 h-96 object-cover" />
//     //             {/* className="rounded-2xl border-4 border-neutral-800 p-4 w-72 h-96 object-cover" /> */}
//     //         <img 
//     //             src={BioTchane} 
//     //             alt="Bio Tchane" 
//     //             className=" p-4 w-72 h-96 object-cover" />
//     //         <img 
//     //             src={Hounkpatin} 
//     //             alt="Hounkpatin" 
//     //             className=" p-4 w-72 h-96 object-cover" />
//     //     </motion.div>
//     // </div>
//   )
// }

// export default Manager



/////////////

// import { motion } from "framer-motion"
// import DrNoudedji from "../assets/DrNoudedji.png"
// import BioTchane from "../assets/BioTchane.png"
// import Hounkpatin from "../assets/Hounkpatin.png"


// const Manager = () => {
//   return (
//     <div className="border-neutral-800 pb-24">
//         <motion.h1 
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 1.5 }}
//             className="my-20 text-center text-4xl text-black font-bold">
//             Comité d&apos;Honneur
//         </motion.h1>
//         <motion.div 
//             whileInView={{ opacity: 1, x: 0 }}
//             initial={{ opacity: 0, x: -100 }}
//             transition={{ duration: 1.5 }}
//             className="flex flex-wrap items-center justify-center gap-4">
//             <img 
//                 src={DrNoudedji} 
//                 alt="Dr NOUDEDJI" 
//                 className=" p-4 w-72 h-96 object-cover" />
//                 {/* className="rounded-2xl border-4 border-neutral-800 p-4 w-72 h-96 object-cover" /> */}
//             <img 
//                 src={BioTchane} 
//                 alt="Bio Tchane" 
//                 className=" p-4 w-72 h-96 object-cover" />
//             <img 
//                 src={Hounkpatin} 
//                 alt="Hounkpatin" 
//                 className=" p-4 w-72 h-96 object-cover" />
//         </motion.div>
//     </div>
//   )
// }

// export default Manager




//////////////

// import { motion } from "framer-motion"
// import DrNoudedji from "../assets/DrNoudedji.png"
// import BioTchane from "../assets/BioTchane.png"
// import Hounkpatin from "../assets/Hounkpatin.png"


// const Manager = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//         <motion.h1 
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 1.5 }}
//             className="my-20 text-center text-4xl">
//             Manager
//         </motion.h1>
//         <motion.div 
//             whileInView={{ opacity: 1, x: 0 }}
//             initial={{ opacity: 0, x: -100 }}
//             transition={{ duration: 1.5 }}
//             className="flex flex-wrap items-center justify-center gap-4 ">
//             <img src={DrNoudedji} alt="Dr NOUDEDJI" className="rounded-2xl border-4 border-neutral-800 p-4" />
//             <img src={BioTchane} alt="Bio Tchane" className="rounded-2xl border-4 border-neutral-800 p-4" />
//             <img src={Hounkpatin} alt="Hounkpatin" className="rounded-2xl border-4 border-neutral-800 p-4" />
//         </motion.div>
//     </div>
//   )
// }

// export default Manager