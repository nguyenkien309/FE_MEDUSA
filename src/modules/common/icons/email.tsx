import React from "react"

import { IconProps } from "types/icon"

const Email: React.FC<IconProps> = ({
  size = "21",
  color = "white",
  ...attributes
}) => {
  return (
    <div className="min-w-6 min-h-6">
      <svg
        width={size}
        height="17"
        viewBox="0 0 21 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...attributes}
      >
        <path
          d="M20.7026 0.119873H0.702637V16.1199H20.7026V0.119873ZM18.7026 4.11987L10.7026 9.11987L2.70264 4.11987V2.11987L10.7026 7.11987L18.7026 2.11987V4.11987Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default Email
