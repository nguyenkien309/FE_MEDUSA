import { Button} from "@medusajs/ui"
import Image from "next/image"
import ImageBanner1 from "/public/images/home/image-banner-1.png"
import ImageBanner2 from "/public/images/home/image-banner-2.png"
import UltimateSaleTop from "/public/images/home/ultimate-sale-top.png"
import UltimateSaleBottom from "/public/images/home/ultimate-sale-bottom.png"
import UltimateSaleText from "/public/images/home/ultimate-sale-text.png"
import Link from "next/link"
const Hero = () => {
  return (
    <div className="container mx-auto border-ui-border-base justify-between flex md:flex-row flex-col gap-6">
      <div>
        <Image width={392} height={570} alt="" src={ImageBanner1.src} />
      </div>
      <div className="justify-between flex flex-col">
        <div>
          <Image width={425} height={150} alt="" src={UltimateSaleTop.src} />
        </div>
        <div className="flex flex-col justify-between items-center max-h-[383px] py-4">
          <Image width={425} height={570} alt="" src={UltimateSaleText.src} />
          <p className="tracking-widest text-xl leading-6 py-4">NEW COLLECTION</p>
          <Link href={"/store"}>
          <Button className="font-volkhov w-[206px] outline-none h-[56px] text-base">
           SHOP NOW
          </Button>
          </Link>
        </div>
        <div>
          <Image width={425} height={150} alt="" src={UltimateSaleBottom.src} />
        </div>
      </div>
      <div>
        <Image width={392} height={570} alt="" src={ImageBanner2.src} />
      </div>
    </div>
  )
}

export default Hero
