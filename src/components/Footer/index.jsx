import { Heading } from "../Heading";
import { Img } from "../Img";



export default function Footer() {
  return (
    <footer className=" bg-[#021f20]">
      <div className="flex flex-col md:flex-row items-start p-8">
        <div className="w-full md:w-1/2">
            <Heading className="text-[16px] font-bold uppercase text-[#ffffff] lg:text-[13px] mb-3">
                Événements
            </Heading>
            <ul className="flex flex-col items-start gap-2">
                <li>
                    <a href="#" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium uppercase text-[#ffffff]">
                        Exposition / Ventes
                    </Heading>
                    </a>
                </li>
                <li>
                    <a href="Conférences" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium uppercase text-[#ffffff]">
                        Conférences
                    </Heading>
                    </a>
                </li>
                <li>
                    <a href="#" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium uppercase text-[#ffffff]">
                        Dîner de Gala
                    </Heading>
                    </a>
                </li>
            </ul>
        </div>
        <div className="w-full md:w-1/2">
            <Heading className="text-[16px] font-bold uppercase text-[#ffffff] lg:text-[13px] mb-3">
                Partenaires
            </Heading>
            <ul className="flex flex-col items-start gap-2">
                <li>
                    <a href="#" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium uppercase text-[#ffffff]">
                        BOUTIQUE “SANTÉ PAR LES PLANTES”
                    </Heading>
                    </a>
                </li>
                <li>
                    <a href="Conférences" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium uppercase text-[#ffffff]">
                        Sponsors
                    </Heading>
                    </a>
                </li>
            </ul>
        </div>
        <div className="w-full md:w-1/2">
            <Heading className="text-[16px] font-bold uppercase text-[#ffffff] lg:text-[13px] mb-3">
                à propos de nous
            </Heading>
            <ul className="flex flex-col items-start gap-2">
                <li>
                    <a href="#" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium uppercase text-[#ffffff]">
                        Vision, Mission & valeurs
                    </Heading>
                    </a>
                </li>
                <li>
                    <a href="Conférences" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium uppercase text-[#ffffff]">
                        Comité d’honneur
                    </Heading>
                    </a>
                </li>
            </ul>
        </div>
        <div className="w-full md:w-1/2">
            <Heading className="text-[16px] font-bold uppercase text-[#ffffff] lg:text-[13px] mb-3">
                Contacts
            </Heading>
            <ul className="flex flex-col items-start gap-2">
                <li>
                    <a href="#" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium uppercase text-[#ffffff]">
                        Nos coordonnées
                    </Heading>
                    </a>
                </li>
                <li>
                    <a href="Conférences" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium uppercase text-[#ffffff]">
                        Université d’Abomey-Calavi
                    </Heading>
                    </a>
                </li>
                
            </ul>
        </div>
        
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

