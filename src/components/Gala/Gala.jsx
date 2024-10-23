// import TicketGala from "../assets/forPages/ticketGala.png"
import TicketGala from "../../assets/ticketGala.png"
import iconLocalisation from "../../assets/iconLocalisation.svg"
import iconWhatsapp from "../../assets/iconWhatsapp.svg"
import iconTelephone from "../../assets/iconTelephone.svg"
import bgImage from "../../assets/forPages/backgroundImage.png"



const Gala = () => {
  return (
    <div className="container mx-auto py-20 " style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
            <div className="flex justify-center mb-8">
                <img
                    src={TicketGala}
                    alt=""
                    className="rounded object-cover mb-8 md:mb-0 "
                />
            </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
            <div className="flex flex-col">
                <h2 className="flex justify-center text-customGreen font-bold text-4xl mb-5">DINER DE GALA</h2>

                <div className="flex justify-center mb-5">
                    <span 
                        className="bg-customGreen text-white text-3xl tracking-tight py-2 px-4 lg:items-start">
                        SAMEDI 30 NOVEMBRE 2024
                    </span>
                </div>

                <p className="flex justify-center text-customGreen font-bold text-4xl mb-5">À 20H PRÉCISES</p>

                <div className="flex flex-row justify-center">
                    <div className="">
                        <img src={iconLocalisation} alt="" className="" style={{width: 61, height: 61}} />
                    </div>
                    <div className=" flex items-center">
                        <h3 className="text-customBlack font-bold  " style={{fontSize: 24}}>SALLE DES FÊTES DE CHANT D’OISEAU, COTONOU, BÉNIN</h3>
                    </div>
                </div>

                <div className="flex justify-center mb-8">
                    <h3 
                        className="bg-customGreen text-customYellow text-center text-3xl tracking-tight py-2 px-4 cursor-pointer">
                        COMMANDEZ VOS TICKETS
                    </h3>
                </div>

                <div className="flex flex-row gap-2 justify-center">                    
                    <img src={iconWhatsapp} alt="" className="" />
                    <img src={iconTelephone} alt="" className="" />
                    <p className="text-customGreen font-bold flex items-center text-3xl" >
                        <span className="mr-2 " style={{fontSize: 16}} >+229 </span> 98 82 63 63 / 47 47 47 39
                    </p>
                </div>
            </div>
        </div>

        
      </div>
    </div>
  );
};

export default Gala;