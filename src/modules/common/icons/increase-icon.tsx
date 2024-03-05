import React from "react"

import { IconProps } from "types/icon"

const IncreaseIcon: React.FC<IconProps> = ({
  size = "15",
  color = "black",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M13.6828 7.89838H8.62779V13.0786H5.97514V7.89838H0.920091V5.49598H5.97514V0.3158H8.62779V5.49598H13.6828V7.89838Z"
        fill="#171717"
      />
    </svg>
  )
}

export default IncreaseIcon
