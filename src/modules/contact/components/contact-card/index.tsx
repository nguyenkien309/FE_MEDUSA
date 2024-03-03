import Email from "@modules/common/icons/email"
import Location from "@modules/common/icons/location"
import Phone from "@modules/common/icons/phone"
import Image from "next/image"
import React from "react"
import Twitter from "@assets/images/contact/twitter.png"
import Instagram from "@assets/images/contact/instagram.png"
import Discord from "@assets/images/contact/discord.png"
import BgCircle1 from "@assets/images/contact/bg-circle-1.png"
import BgCircle2 from "@assets/images/contact/bg-circle-2.png"

const ContactCard = () => {
  return (
    <div className="bg-[#011C2B] h-full sm:max-w-[491px] w-full p-10 rounded-[10px] relative 2xsmall:max-w-none">
      <div className="sm:mb-[111px] 2xsmall:mb-8">
        <h3 className="text-[28px] font-semibold leading-[42px] text-[#ffffff] mb-[6px]">
          Contact Information
        </h3>
        <p className="text-[18px] font-normal leading-[27px] text-[#C9C9C9]">
          Say something to start shopping
        </p>
      </div>
      <div className="max-w-[300px] flex flex-col gap-[50px] sm:mb-[159px] 2xsmall:mb-8">
        <p className="flex items-center gap-[25px]">
          <Phone className="w-6 h-6" />
          <span className="text-[16px] font-normal leading-[24px] text-[#ffffff]">
            +1012 3456 789
          </span>
        </p>
        <p className="flex items-center gap-[25px]">
          <Email className="w-6 h-6" />
          <span className="text-[16px] font-normal leading-[24px] text-[#ffffff]">
            demo@gmail.com
          </span>
        </p>
        <p className="flex items-center gap-[25px]">
          <Location />
          <span className="text-[16px] font-normal leading-[24px] text-[#ffffff]">
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </p>
      </div>
      <div className="flex gap-6 items-center">
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          <Image src={Twitter.src} alt="twitter icon" width={30} height={30} />
        </a>

        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          <Image
            src={Instagram.src}
            alt="Instagram icon"
            width={30}
            height={30}
          />
        </a>
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          <Image src={Discord.src} alt="Discord icon" width={30} height={30} />
        </a>
      </div>
      <div
        className="w-[138px] h-[138px] shrink-0 absolute right-[70px]
       bottom-[71px] bg-no-repeat bg-contain "
        style={{
          backgroundImage: `url(${BgCircle1.src})`,
        }}
      />
      <div
        className="w-[269px] h-[269px] shrink-0 absolute right-[-40px]
       bottom-[-100px] bg-no-repeat bg-contain "
        style={{
          backgroundImage: `url(${BgCircle2.src})`,
        }}
      />
    </div>
  )
}

export default ContactCard
