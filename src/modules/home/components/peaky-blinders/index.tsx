"use client"
import Image from "next/image"
import PeakiBlidersImage from "/public/images/home/peaky-blinder-girl.png"
import PeakiBlidersImageMobile from "/public/images/home/peaky-blinder-girl-mobile.png"

import { Button } from "@medusajs/ui"
import { useWindowSize } from "@lib/hooks/use-mobile"
import Link from "next/link"
const PeakiBlinber = () => {
  const { width } = useWindowSize()
  return (
    <div className="bg-[#DADADA] flex flex-col md:flex-row  mx-auto">
      <div className="items-center flex justify-center">
        <Image
          src={width < 1440  ? PeakiBlidersImageMobile.src : PeakiBlidersImage.src}
          width={1050}
          height={750}
          alt=""
          quality={100}
        />
      </div>
      <div className="max-w-[515px] space-y-6 px-4 py-8 h-full justify-between relative">
        <div className="h-full w-"></div>
        <p className="text-[#767676]">Women Collection</p>
        <p className="text-[#484848] text-[46px]">Peaky Blinders</p>
        <p className="text-black underline">DESCRIPTION</p>
        <p className="text-[#767676]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis.
        </p>
        <div className="flex">
          <p className="mr-3">Size:</p>
          <Button
            className="text-white rounded-[10px] w-[53px] h-7 justify-center items-center flex"
            color="[#AAAAAA]"
          >
            M
          </Button>
        </div>
        <p className="text-2xl">$100.00</p>
        <div className="my-2">
        <Link href={"/products/t-shirt"}>
          <Button className="text-white  rounded-[10px] w-[207px] h-[56px] justify-center items-center flex ">
            Buy Now
          </Button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default PeakiBlinber
