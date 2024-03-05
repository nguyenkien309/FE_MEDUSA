import React from "react"

import { IconProps } from "types/icon"

const RightIcon: React.FC<IconProps> = ({
  size = "9",
  color = "black",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g clipPath="url(#clip0_6_960)">
        <path
          d="M2.89799 1.14089L2.77369 1.26517C2.69132 1.34754 2.69132 1.4811 2.77369 1.56349L6.21009 4.99991L2.77369 8.43632C2.69132 8.5187 2.69132 8.65225 2.77369 8.73464L2.89799 8.85892C2.98036 8.94129 3.11392 8.94129 3.19629 8.85892L6.90617 5.14906C6.98854 5.06669 6.98854 4.93313 6.90617 4.85074L3.19629 1.14089C3.11392 1.0585 2.98036 1.0585 2.89799 1.14089Z"
          fill={color}
          stroke={color}
          strokeWidth="0.0175781"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_960">
          <rect
            width="9"
            height="9"
            fill="white"
            transform="translate(0.339844 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default RightIcon
