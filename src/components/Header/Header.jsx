import logo from "../../assets/logo/logo.png"
import barreBarre from "../../assets/header/barre-menu.svg"

export const Header = () => {
  return (
    <div className="bg-customGreen py-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4 ">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          {/* <img src={logo} alt="logo" className="w-24 h-auto md:w-32" /> */}
          <img src={logo} alt="logo" className="object-cover" />
        </div>

        {/* Textes */}
        <div className="text-center md:text-left">
          <h1 className="text-white font-bold text-xl md:text-2xl leading-snug">
            SALON INTERNATIONAL DE LA MÉDECINE ET DE LA PHARMACOPÉE TRADITIONNELLES
          </h1>
          <h2 className="text-customYellow font-bold text-lg md:text-xl mt-2 text-center">
            (SIMPHAT) PREMIÈRE ÉDITION
          </h2>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center text-white mt-4 md:mt-0 md:px-4">
          <img src={barreBarre} alt="MENU" className="w-8 h-auto" />
          <p className="text-lg font-bold">MENU</p>
        </div>

      </div>
    </div>
  )
}



/////////////

// import logo from "../../assets/logo/logo.png"
// import barreBarre from "../../assets/header/barre-menu.svg"


// export const Header = () => {
//   return (
//     <div className="bg-customGreen">
//         <div className="flex flex-col md:flex-row">
//             <div className="">
//                 <img src={logo} alt="logo" className="" />
//             </div>

//             <div className="text-white font-bold">
//                 <div className="">
//                     <h1 className="">SALON INTERNATIONAL DE LA MÉDECINE ET DE LA PHARMACOPÉE TRADITIONNELLES</h1>
//                 </div>

//                 <div className="text-customYellow">
//                     <h1 className="">(SIMPHAT) PREMIÈRE ÉDITION</h1>
//                 </div>

//             </div>

//             <div className="text-customWhite">
//                 <div className="flex flex-col">
//                     <img src={barreBarre} alt="MENU" className="" />
//                     <p className=" text-24px">MENU</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }


 
