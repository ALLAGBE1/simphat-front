
import iconLocalisation from "../../assets/iconLocalisation.svg"
import iconWhatsapp from "../../assets/iconWhatsapp.svg"
import iconTelephone from "../../assets/iconTelephone.svg"
import ticketExposition from "../../assets/ticketExposition.png"

const ExpositionVentes = () => {
  return (
    <div className="container mx-auto py-20">
        <div className="flex flex-col ">
            <h2 className="text-customGreen text-center text-4xl font-bold mb-12 underline">Exposition / Ventes</h2>

            <h2 className="text-customBlack text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
                DU 27 AU 30 NOVEMBRE
            </h2>
            <div className="flex flex-row justify-center">
                <div className="">
                    <img src={iconLocalisation} alt="" className="" />
                </div>
                <div className=" flex items-center">
                    <h3 className="text-customBlack font-bold text-2xl ">CHANT D’OISEAU, COTONOU, BÉNIN</h3>
                </div>
            </div>

            <div className="flex justify-center mb-8">
                <img
                    src={ticketExposition}
                    alt=""
                    className="rounded object-cover mb-8 md:mb-0 "
                />
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
                    <span className="mr-2 " style={{fontSize: 16}} >+229 </span> 47 47 47 32 / 67 78 78 06
                </p>
            </div>

        </div>
    </div>
  );
};

export default ExpositionVentes;
