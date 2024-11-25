import { Img } from "../Img";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="container mx-auto bg-[#021f20]">
      <div className="flex flex-col sm:flex-row p-8">
        <div className="w-full sm:w-1/3 flex justify-center mb-3 sm:md-0">
            <div className="flex flex-col gap-2">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-bold uppercase text-[#ffffff]  mb-1">
                    Événements
                </h2>
                <Link to="/" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        ACCUEIL
                    </h2>
                </Link>
                <Link to="/honoraryCommittee"  rel="noreferrer" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        COMITÉ D’HONNEUR
                    </h2>
                </Link>
                {/* <Link to="/sponsors" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        SPONSORS
                    </h2>
                </Link> */}
                <Link to="/participer" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        PARTICIPER
                    </h2>
                </Link>
            </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center mb-3 sm:md-0">
            <div className="flex flex-col gap-2">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-bold uppercase text-[#ffffff]  mb-1">
                    ACTIVITÉ
                </h2>
                <Link to="/expositionVentes" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        EXPOSITION-VENTES
                    </h2>
                </Link>
                <Link to="/programmesConferences" rel="noreferrer" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        CONFÉRENCES-DÉBATS 
                    </h2>
                </Link>
                <Link to="/dinergala" rel="noreferrer" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        DE GALA-REMISE DE PRIX
                    </h2>
                </Link>
            </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center mb-3 sm:md-0">  
            <ul className="flex flex-col gap-2">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-bold uppercase text-[#ffffff]  mb-1">
                    À PROPOS DU SIMPHAT
                </h2>
                <Link to="/#" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        VISION, MISSION & VALEURS
                    </h2>
                </Link>
                {/* <Link to="/sponsors" rel="noreferrer" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        SPONSORS 
                    </h2>
                </Link> */}
                <Link to="/contact" rel="noreferrer" className="">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-medium uppercase text-[#ffffff]">
                        CONTACTS
                    </h2>
                </Link>
            </ul>
        </div>   
      </div>

      <div className="">
        <h5 className="text-customWhite text-center">@SIMPHAT 2024 Tous droits réservés</h5>
      </div>

      <div className="">
            <Img 
                src="images/img_flag_1.png"
                alt="Flag Image"
                className="w-full object-cover lg:h-auto md:h-auto"
            />
      </div>
    </footer>
  );
}

//////


// import { Img } from "../Img";
// import { Link } from 'react-router-dom';



// export default function Footer() {
//   return (
//     <footer className="container mx-auto bg-[#021f20]">
//       <div className="flex flex-col sm:flex-row justify-center p-8">
//         <div className="w-full sm:w-1/3 flex justify-center">
            
//             <ul className="flex flex-col gap-2">
//                 <h3 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-1xl font-bold uppercase text-[#ffffff]  mb-1">
//                     Événements
//                 </h3>
//                 <li>
//                     <Link to="/expositionVentes" className="">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         ACCUEIL
//                     </h3>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/participer"  rel="noreferrer" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         COMITÉ D’HONNEUR
//                     </h3>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/dinergala" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         SPONSORS
//                     </h3>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/dinergala" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         PARTICIPER
//                     </h3>
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//         <div className="w-full sm:w-1/3 flex justify-center">
            
//             <ul className="flex flex-col gap-2">
//                 <h3 className="text-[16px] font-bold uppercase text-[#ffffff] lg:text-[13px] mb-1">
//                     ACTIVITÉ
//                 </h3>
//                 <li>
//                     {/* <Link to="/#" className="lg:text-[13px]"> */}
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         EXPOSITION-VENTES
//                     </h3>
//                     {/* </Link> */}
//                 </li>
//                 <li>
//                     <Link to="/sponsors" rel="noreferrer" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         CONFÉRENCES-DÉBATS 
//                     </h3>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/sponsors" rel="noreferrer" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         DE GALA-REMISE DE PRIX
//                     </h3>
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//         <div className="w-full sm:w-1/3 flex justify-center">
            
//             <ul className="flex flex-col gap-2">
//                 <h3 className="text-[16px] font-bold uppercase text-[#ffffff] lg:text-[13px] mb-1">
//                     À PROPOS DU SIMPHAT
//                 </h3>
//                 <li>
//                     {/* <Link to="/#" className="lg:text-[13px]"> */}
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         VISION, MISSION & VALEURS
//                     </h3>
//                     {/* </Link> */}
//                 </li>
//                 <li>
//                     {/* <Link to="/#/comiteHonneur" rel="noreferrer" className="lg:text-[13px]"> */}
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         SPONSORS 
//                     </h3>
//                     {/* </Link> */}
//                 </li>
//                 <li>
//                     {/* <Link to="/#/comiteHonneur" rel="noreferrer" className="lg:text-[13px]"> */}
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         CONTACTS
//                     </h3>
//                     {/* </Link> */}
//                 </li>
//             </ul>
//         </div>   
//       </div>

//       <div className="">
//         <h5 className="text-customWhite text-center">@SIMPHAT 2024 Tous droits réservés</h5>
//       </div>

//       <div className="">
//             <Img 
//                 src="images/img_flag_1.png"
//                 alt="Flag Image"
//                 className="w-full object-cover lg:h-auto md:h-auto"
//             />
//       </div>
//     </footer>
//   );
// }


//////////////////

// // import { h3 } from "../h3";
// import { Img } from "../Img";
// import { Link } from 'react-router-dom';




// export default function Footer() {
//   return (
//     <footer className="container mx-auto bg-[#021f20]">
//       <div className="flex flex-col sm:flex-row  items-center bg-yellow-600">
//         <div className="w-full sm:w-1/3 ">
//             <h3 className="text-[16px] font-bold uppercase text-[#ffffff] lg:text-[13px] mb-3">
//                 Événements
//             </h3>
//             <ul className="flex flex-col gap-2">
//                 <li>
//                     <Link to="/expositionVentes" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         ACCUEIL
//                     </h3>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/participer"  rel="noreferrer" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         COMITÉ D’HONNEUR
//                     </h3>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/dinergala" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         SPONSORS
//                     </h3>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/dinergala" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         PARTICIPER
//                     </h3>
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//         <div className="w-full sm:w-1/3">
//             <h3 className="text-[16px] font-bold uppercase text-[#ffffff] lg:text-[13px] mb-3">
//                 ACTIVITÉ
//             </h3>
//             <ul className="flex flex-col gap-2">
//                 <li>
//                     {/* <Link to="/#" className="lg:text-[13px]"> */}
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         {/* BOUTIQUE “LA MAISON DES PLANTES” */}
//                         EXPOSITION-VENTES
//                     </h3>
//                     {/* </Link> */}
//                 </li>
//                 <li>
//                     <Link to="/sponsors" rel="noreferrer" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         CONFÉRENCES-DÉBATS 
//                     </h3>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/sponsors" rel="noreferrer" className="lg:text-[13px]">
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         DE GALA-REMISE DE PRIX
//                     </h3>
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//         <div className="w-full sm:w-1/3">
//             <h3 className="text-[16px] font-bold uppercase text-[#ffffff] lg:text-[13px] mb-3">
//                 À PROPOS DU SIMPHAT
//             </h3>
//             <ul className="flex flex-col gap-2">
//                 <li>
//                     {/* <Link to="/#" className="lg:text-[13px]"> */}
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         VISION, MISSION & VALEURS
//                     </h3>
//                     {/* </Link> */}
//                 </li>
//                 <li>
//                     {/* <Link to="/#/comiteHonneur" rel="noreferrer" className="lg:text-[13px]"> */}
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         SPONSORS 
//                     </h3>
//                     {/* </Link> */}
//                 </li>
//                 <li>
//                     {/* <Link to="/#/comiteHonneur" rel="noreferrer" className="lg:text-[13px]"> */}
//                     <h3 className="text-[16px] font-medium uppercase text-[#ffffff]">
//                         CONTACTS
//                     </h3>
//                     {/* </Link> */}
//                 </li>
//             </ul>
//         </div>   
//       </div>

//       <div className="">
//         <h5 className="text-customWhite text-center">@SIMPHAT 2024 Tous droits réservés</h5>
//       </div>

//       <div className="">
//             <Img 
//                 src="images/img_flag_1.png"
//                 alt="Flag Image"
//                 className="w-full object-cover lg:h-auto md:h-auto"
//             />
//       </div>
//     </footer>
//   );
// }
