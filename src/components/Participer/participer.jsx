
import reunion1 from "../../assets/forPages/reunion1.png";
import reunion2 from "../../assets/forPages/reunion2.png";
import { Link } from 'react-router-dom';




const Participer = () => {
  return (
    <div className="container mx-auto p-10">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-customGreen font-bold text-center mb-8">Participer</h2>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-bold text-center mb-8">Aux différentes conférences</h2>
        <div className="flex flex-col sm:flex-row mb-5 justify-center">
            <div className="w-full sm:w-4/5 flex justify-center mb-3 sm:mb-0">
                <div className="">
                    <img src={reunion1} alt="Réunion 1" className="max-w-full h-auto mx-auto sm:w-834 sm:h-32 md:w-834 md:h-48 lg:w-834 lg:h-64 xl:w-834 xl:h-834" />
                </div>
            </div>

            <div className="w-full sm:w-1/2 flex mb-3 sm:mb-0">
                <div className="flex items-start">
                    <img src={reunion2} alt="Réunion 2" className="max-w-full h-auto mx-auto sm:w-443 sm:h-32 md:w-443 md:h-48 lg:w-443 lg:h-64 xl:w-443 xl:h-443" />
                </div>
            </div>

        </div>

        <div className="">
            <Link to="/themeConferences">
                <div className="flex justify-center">
                    <h2 
                        className="inline-block
                            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                            bg-customGreen text-white font-bold tracking-tight py-2 px-4 cursor-pointer
                            
                        ">
                        CONSULTER LES THEMES DE CONFERENCES
                    </h2>
                </div>
            </Link>
        </div>
    </div>
  );
};

export default Participer;


///////////////

// import salle1 from "../../assets/forPages/salle1.png";
// import salle2 from "../../assets/forPages/salle2.png";
// import salle3 from "../../assets/forPages/salle3.png";
// import reunion1 from "../../assets/forPages/salle3.png";
// import reunion2 from "../../assets/forPages/salle3.png";
// import { Link } from 'react-router-dom';




// const Participer = () => {
//   return (
//     <div className="container mx-auto ">
//         <h2 className="text-customGreen text-4xl font-bold text-center mb-12">Participer</h2>
//         <h2 className="text-black text-4xl font-bold text-center mb-12">Aux différentes conférences</h2>
//         <div className="flex flex-col md:flex-row mb-5">
//             <div className=" w-full md:w-1/3 flex justify-center mb-3 md:mb-0">
//                 <img src={salle1} alt="" className="w-[400px] h-[275px]" />
//             </div>

//             <div className="w-full md:w-1/3 flex justify-center mb-3 md:mb-0">
//                 <img src={salle2} alt="" className="w-[400px] h-[275px]" />
//             </div>

//             <div className=" w-full md:w-1/3 flex justify-center mb-3 md:mb-0">
//                 <img src={salle3} alt="" className="w-[400px] h-[275px]" />
//             </div>

//         </div>

//         <div className="">
//             <Link to="/themeConferences" className='hover:text-gray-400 text-black'>
//                 <div className="flex justify-center">
//                     <span 
//                         className="bg-customGreen text-white font-bold mb-20 tracking-tight py-2 px-4 cursor-pointer transition lg:items-start" style={{fontSize: 18}}>
//                         CONSULTER LES THEMES DE CONFERENCES
//                     </span>
//                 </div>
//             </Link>
//         </div>
//     </div>
//   );
// };

// export default Participer;



