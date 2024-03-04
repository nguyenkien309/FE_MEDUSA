import React from "react"

import { IconProps } from "types/icon"

const DecreaseIcon: React.FC<IconProps> = ({ ...attributes }) => {
  return (
    <svg
      width={11}
      height={3}
      viewBox="0 0 11 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M10.7427 0.470951V2.87335H0.457461V0.470951H10.7427Z"
        fill="#171717"
      />
    </svg>
  )
}

export default DecreaseIcon
