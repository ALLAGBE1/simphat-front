// import { Link } from 'react-router-dom';
import salle1 from "../../assets/forPages/salle1.png";
import salle2 from "../../assets/forPages/salle2.png";
import salle3 from "../../assets/forPages/salle3.png";
import { Link } from 'react-router-dom';




const Participer = () => {
  return (
    <div className="container mx-auto ">
        <h2 className="text-customGreen text-4xl font-bold text-center mb-12">Participer</h2>
        <h2 className="text-black text-4xl font-bold text-center mb-12">Aux différentes conférences</h2>
        <div className="flex flex-col md:flex-row mb-5">
            <div className=" w-full md:w-1/3 flex justify-center mb-3 md:mb-0">
                <img src={salle1} alt="" className="w-[400px] h-[275px]" />
            </div>

            <div className="w-full md:w-1/3 flex justify-center mb-3 md:mb-0">
                <img src={salle2} alt="" className="w-[400px] h-[275px]" />
            </div>

            <div className=" w-full md:w-1/3 flex justify-center mb-3 md:mb-0">
                <img src={salle3} alt="" className="w-[400px] h-[275px]" />
            </div>

        </div>

        <div className="">
            <Link to="/themeConferences" className='hover:text-gray-400 text-black'>
                <div className="flex justify-center">
                    <span 
                        className="bg-customGreen text-white font-bold mb-20 tracking-tight py-2 px-4 cursor-pointer transition lg:items-start" style={{fontSize: 18}}>
                        CONSULTER LES THEMES DE CONFERENCES
                    </span>
                </div>
            </Link>
        </div>
    </div>
  );
};

export default Participer;



