import Image from "next/image"
import InstagramIcon from "/public/icons/instagram.svg"
import FacebookIcon from "/public/icons/fb.svg"
import TweetIcon from "/public/icons/tw.svg"
import YoutubeIcon from "/public/icons/yt.svg"

const AboutSocialList = () => {
  return (
    <div
      className="hidden md:flex flex-col max-w-[3.3rem] justify-between max-h-[17.688rem] items-center text-center pr-10"
      style={{ fontSize: "Inter" }}
    >
      <span className="text-inter justify-center items-center text-sm font-bold leading-5 tracking-tight text-center text-gray-400">
        SHARE
      </span>
      <div className="flex flex-col items-center justify-center gap-3 mt-6">
        <div className="flex w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-300 justify-center items-center">
          <Image
            src={InstagramIcon}
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
