// import

import Image from "next/image"
import Chanel from "/public/images/home/chanel.png"
import LV from "/public/images/home/lv.png"
import Prada from "/public/images/home/prada.png"
import CalvinKlein from "/public/images/home/calvin-klein.png"
import Denim from "/public/images/home/demin.png"

const Brands = () => {
  return (
    <div className="content-container items-center space-y-8 lg:space-y-0 mx-auto flex-col lg:flex-row flex md:justify-between md:py-12 py-10">
      <Image
        quality={100}
        width={200}
        height={36}
        alt=""
        src={Chanel.src}
        className="cursor-pointer hover:scale-110 duration-150 transition-all"
      />
      <Image
        quality={100}
        width={200}
        height={25}
        alt=""
        src={LV.src}
        className="cursor-pointer hover:scale-110 duration-150 transition-all"
      />
      <Image
        quality={100}
        width={200}
        height={32}
        alt=""
        src={Prada.src}
        className="cursor-pointer hover:scale-110 duration-150 transition-all"
      />
      <Image
        quality={100}
        width={200}
        height={33}
        alt=""
        src={CalvinKlein.src}
        className="cursor-pointer hover:scale-110 duration-150 transition-all"
      />
      <Image
        quality={100}
        width={200}
        height={30}
        alt=""
        src={Denim.src}
        className="cursor-pointer hover:scale-110 duration-150 transition-all"
      />
    </div>
  )
}

export default Brands
