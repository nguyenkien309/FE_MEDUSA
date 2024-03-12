import { Button } from "@medusajs/ui"
import React from "react"
import Input from "./components/Input"

const ContactForm = () => {
  return (
    <div className="xsmall:p-10 2xsmall:p-0 2xsmall:pt-4 w-full h-full flex flex-1 flex-col xsmall:gap-[53.64px] 2xsmall:gap-4 items-center relative">
      <div className="flex items-center xsmall:gap-[41.74px] w-full 2xsmall:gap-4 2xsmall:flex-col xsmall:flex-row">
        <Input label="First Name" name="firstName" placeholder="Celine" />
        <Input label="Last Name" name="lastName" placeholder="Maris" />
      </div>
      <div className="flex items-center xsmall:gap-[41.74px] xsmall:mb-5 w-full 2xsmall:gap-4 2xsmall:flex-col xsmall:flex-row">
        <Input label="Email" name="email" placeholder="Write your email.." />
        <Input
          label="Phone Number"
          name="phoneNumber"
          placeholder="+84 097.."
        />
      </div>
      <Input
        label="Message"
        name="message"
        placeholder="Write your message.."
      />
      <Button className=" z-10 h-[45.54px] max-w-[277.19px] w-full bg-black rounded-[5px] text-[16px] font-medium leading-[24px] text-[#ffffff] font-poppins">
        Send Message
      </Button>
    </div>
  )
}

export default ContactForm
