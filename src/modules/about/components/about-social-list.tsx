import Image from "next/image"
import InstaIcon from "@assets/icons/insta.svg"
import FacebookIcon from "@assets/icons/fb.svg"
import TweetIcon from "@assets/icons/tw.svg"
import YoutubeIcon from "@assets/icons/yt.svg"

const AboutSocialList = () => {
  return (
    <div className="hidden md:flex flex-col max-w-[3.3rem] justify-between max-h-[17.688rem]">
      <span className="text-gray-500 font-semibold">SHARE</span>
      <div className="flex flex-col items-center justify-center gap-3 mt-6">
        <div className="flex w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-300 justify-center items-center">
          <Image
            src={InstaIcon}
            alt="Instagram icon"
            className="w-[16px] h-[16px] object-cover bg-center"
          />
        </div>

        <div className="flex w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-300 justify-center items-center">
          <Image
            src={FacebookIcon}
            alt="Instagram icon"
            className="w-[16px] h-[16px] object-cover bg-center"
          />
        </div>

        <div className="flex w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-300 justify-center items-center">
          <Image
            src={YoutubeIcon}
            alt="Instagram icon"
            className="w-[22px] h-[16px] object-cover bg-center"
          />
        </div>

        <div className="flex w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-300 justify-center items-center">
          <Image
            src={TweetIcon}
            alt="Instagram icon"
            className="w-[16px] h-[16px] object-cover bg-center"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutSocialList
