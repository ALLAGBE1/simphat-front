// import profilePic from "../assets/forPages/benjaminHounkpatin.png"
import { COMITES } from "../constants"

export const ProfilComite = () => {
  return (
    <div className="flex flex-col">
        {COMITES.map((comite, index) => {
          <div key={index} className="">
            <img src={comite.image} alt="" className="object-cover rounded-lg" />
            <div className="">
              <p className="p-2 mb-2 font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl">
                  Dr Justin NOUDEDJI <br />
                  <span className="text-black">PHARMACIEN DIRECTEUR GÉNÉRAL</span>
              </p>
            </div>
          </div>
        })}
        {/* <img src={profilePic} alt="" className="object-cover rounded-lg" />
        <div className="">
          <p className="p-2 mb-2 font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl">
              Dr Justin NOUDEDJI <br />
              <span className="text-black">PHARMACIEN DIRECTEUR GÉNÉRAL</span>
          </p>
        </div> */}
    </div>
  )
}

export default ProfilComite