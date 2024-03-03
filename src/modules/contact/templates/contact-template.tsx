import React from "react"
import ContactCard from "../components/contact-card"
import ContactForm from "../components/contact-form"

const ContactTemplate = () => {
  return (
    <div className="bg-transparent mx-auto flex flex-col items-center justify-center mt-[54px] mb-[248px] 2xsmall:max-w-[88%]">
      <div className="text-center mb-[100px]">
        <h1 className="text-[40px] font-bold leading-[60px] mb-[18px]">
          Contact Us
        </h1>
        <p className="text-[18px] font-medium leading-[27px]">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div
        className="bg-white sm:max-w-[1280px] h-auto w-full flex
       items-start justify-between p-[10px] 
       shadow-[0px_0px_60px_30px_rgba(0,0,0,0.03)] sm:flex-row  2xsmall:flex-col
       "
      >
        <ContactCard />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactTemplate
