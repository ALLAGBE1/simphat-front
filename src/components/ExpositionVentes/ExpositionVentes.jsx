import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ExpositionVentes = () => {
  return (
    <div className="container mx-auto py-20">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                text-customGreen text-center font-bold mb-8 underline">Exposition-Ventes</h2>

        <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 p-4">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                    text-customBlack font-bold text-center">
                    DU 27 AU 30 NOVEMBRE
                </h2>

                <div className="flex flex-row gap-2 items-center justify-center mt-2">
                    <div className=" ">
                        <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
                    </div>
                    <div className=" ">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                        text-customBlack font-bold">CHANT D’OISEAU, COTONOU, BÉNIN</h3>
                    </div>
                </div>

                <div className="flex flex-row gap-2 items-center justify-center mt-4">                    
                    {/* Icône WhatsApp en vert */}
                    <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />

                    {/* Icône d'appel en noir */}
                    <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                        text-customGreen font-bold flex items-center" >
                        <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
                    </p>
                </div>
     
            </div>

            <div className="w-full sm:w-1/2 p-4 items-start">

                <div className="flex flex-col  ">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
                        <h2 className="">ENTRÉE GALA: 10.000F</h2>
                        <h2 className="">TICKET TOMBOLA: 1.000F, 2.000F</h2>
                        <h2 className="">TICKET STAND: 20.000F</h2>
                        <h2 className="">INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
                    </div>
                </div>

                <div className="flex  mt-4">
                    <h3 
                        className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer">
                        COMMANDEZ VOS TICKETS
                    </h3>
                </div>

            </div>
        </div>
    </div>
  );
};

export default ExpositionVentes;

//////////////


// // import iconLocalisation from "../../assets/iconLocalisation.svg"
// // import iconWhatsapp from "../../assets/iconWhatsapp.svg"
// // import iconTelephone from "../../assets/iconTelephone.svg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

// const ExpositionVentes = () => {
//   return (
//     <div className="container mx-auto py-20">
//         <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                 text-customGreen text-center font-bold mb-8 underline">Exposition-Ventes</h2>

//         <div className="flex flex-col sm:flex-row">
//             <div className="w-full sm:w-1/2 bg-red-600 ">
//                 <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                     text-customBlack font-bold ">
//                     DU 27 AU 30 NOVEMBRE
//                 </h2>

//                 <div className="flex flex-row gap-2">
//                     <div className=" ">
//                         <FontAwesomeIcon icon={faMapMarkerAlt} color="black" size="2x" />
//                     </div>
//                     <div className=" ">
//                         <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
//                         text-customBlack font-bold">CHANT D’OISEAU, COTONOU, BÉNIN</h3>
//                     </div>
//                 </div>

//                 <div className="flex flex-row gap-2">                    
//                     {/* <img src={iconWhatsapp} alt="" className=""  />
//                     <img src={iconTelephone} alt="" className="" /> */}
//                     {/* Icône WhatsApp en vert */}
//                     <FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />

//                     {/* Icône d'appel en noir */}
//                     <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
//                     <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
//                         text-customGreen font-bold flex items-center" >
//                         <span className="mr-2">+229 </span> 98 82 63 63 / 47 47 47 39
//                     </p>
//                 </div>
     
//             </div>

//             <div className="w-full sm:w-1/2 bg-customYellow">

//                 <div className="flex flex-col items-center md-5">
//                     <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//                         <h2 className="">ENTRÉE GALA: 10.000F</h2>
//                         <h2 className="">TICKET TOMBOLA: 1.000F, 2.000F</h2>
//                         <h2 className="">TICKET STAND: 20.000F</h2>
//                         <h2 className="">INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//                     </div>
//                 </div>

//                 <div className="flex justify-center mb-5">
//                     <h3 
//                         className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer">
//                         COMMANDEZ VOS TICKETS
//                     </h3>
//                 </div>

//             </div>
//         </div>
//     </div>
//   );
// };

// export default ExpositionVentes;




////////////////


// import iconLocalisation from "../../assets/iconLocalisation.svg"
// import iconWhatsapp from "../../assets/iconWhatsapp.svg"
// import iconTelephone from "../../assets/iconTelephone.svg"

// const ExpositionVentes = () => {
//   return (
//     <div className="container mx-auto py-20">
//         <div className="flex flex-col">
//             <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                 text-customGreen text-center font-bold mb-8 underline">Exposition-Ventes</h2>

//             <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
//                 text-customBlack text-center font-bold mb-8">
//                 DU 27 AU 30 NOVEMBRE
//             </h2>

//             <div className="flex flex-row justify-center mb-5">
//                 <div className="">
//                     <img src={iconLocalisation} alt="" className="" />
//                 </div>
//                 <div className=" flex items-center">
//                     <h3 className="text-customBlack font-bold text-2xl ">CHANT D’OISEAU, COTONOU, BÉNIN</h3>
//                 </div>
//             </div>

//             <div className="flex flex-col items-center md-5">
//                 <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ">
//                     <h2 className="">ENTRÉE GALA: 10.000F</h2>
//                     <h2 className="">TICKET TOMBOLA: 1.000F, 2.000F</h2>
//                     <h2 className="">TICKET STAND: 20.000F</h2>
//                     <h2 className="">INSCRIPTION POUR LE CONCOURS: 15.000F</h2>
//                 </div>
//             </div>

//             <div className="flex justify-center mb-5">
//                 <h3 
//                     className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer">
//                     COMMANDEZ VOS TICKETS
//                 </h3>
//             </div>


//             <div className="flex flex-row gap-2 justify-center">                    
//                 <img src={iconWhatsapp} alt="" className="" />
//                 <img src={iconTelephone} alt="" className="" />
//                 <p className="text-customGreen font-bold flex items-center text-3xl" >
//                     <span className="mr-2 " style={{fontSize: 16}} >+229 </span> 98 82 63 63 / 47 47 47 39
//                 </p>
//             </div>

//         </div>
//     </div>
//   );
// };

// export default ExpositionVentes;
