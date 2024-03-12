import React from "react"

interface Props {
  label?: string
  name?: string
  placeholder?: string
}
const Input: React.FC<Props> = ({ label, name, placeholder }) => {
  return (
    <div className="h-[55.34px] min-w-[120px] w-full flex flex-col font-volkhov">
      <label
        htmlFor={name}
        className="text-[16px] font-medium leading-5 text-[#8D8D8D]"
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        id={name}
        className="text-[14px] font-medium leading-5 text-[#011C2A] bg-white focus:outline-none border border-transparent h-full border-b-[#8D8D8D] block focus:border-b-[#011C2A]"
      />
    </div>
  )
}

export default Input
