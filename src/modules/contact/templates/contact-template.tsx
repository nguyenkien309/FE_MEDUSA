import React from "react"
import ContactCard from "../components/contact-card"
import ContactForm from "../components/contact-form"

const ContactTemplate = () => {
  return (
    <div className="bg-transparent mx-auto flex flex-col items-center justify-center mt-[54px] mb-[248px] 2xsmall:max-w-[92%] content-container">
      <div className="text-center small:mb-[96px] mb-8">
        <h1 className="small:text-[40px] text-[28px] font-bold leading-[51.6px] small:mb-[24px] mb-0 text-black">
          Contact Us
        </h1>
        <p className="small:text-[16px] text-[12px] font-normal leading-[20.64px] font-volkhov text-[#717171]">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div
        className="bg-white sm:max-w-[1280px] h-auto w-full flex
       items-start justify-between p-[10px] 
       shadow-[0px_0px_60px_30px_rgba(0,0,0,0.03)] sm:flex-row flex-col
       "
      >
        <ContactCard />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactTemplate
