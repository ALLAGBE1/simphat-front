import TicketGala from "../assets/forPages/ticketGala.png"
import { FaMapMarkerAlt} from "react-icons/fa";


const Gala = () => {
  return (
    <div className="container mx-auto text-white py-20" id="diner">
      <div className="px-8 md:px-16 lg:px-24">
        <h2 className="text-customGreen text-4xl font-bold text-center mb-12">DINER DE GALA</h2>
        {/* <div className="flex flex-col md:flex-row  md:space-x-12 items-start"> */}
        <div className="flex flex-col md:flex-row items-start">

            <div className="w-full md:w-1/2">
                <div className="flex flex-col">
                    <div className="mb-12">
                        <span 
                            className="bg-customGreen text-white mb-20 text-4xl tracking-tight py-2 px-4 lg:items-start">
                            SAMEDI 30 NOVEMBRE 2024
                        </span>
                    </div>

                    <p className="text-customGreen font-bold text-4xl mb-5">A 20H PRECISES</p>


                    <div className="flex items-center mb-8">
                        <FaMapMarkerAlt className="text-red-500 mr-2" />
                        <p className="text-black font-bold">SALLE DES FÊTES DE L’HÔTEL CHANT D’OISEAU, COTONOU, BÉNIN</p>
                    </div>

                    <div className=" ">
                        <span 
                            className="bg-customGreen text-white mb-20 text-4xl tracking-tight py-2 px-4 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out lg:items-start">
                            COMMANDEZ VOS TICKETS
                        </span>
                    </div>

                </div>
            </div>

            <div className="w-full md:w-1/2">
                <img
                    src={TicketGala}
                    alt=""
                    className="rounded object-cover mb-8 md:mb-0"
                />
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default Gala;