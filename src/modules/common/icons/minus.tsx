"use client"

import React from "react"

import { IconProps } from "types/icon"

const Minus: React.FC<IconProps> = ({
  size = "20",
  color = "#9CA3AF",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
      {...attributes}
    >
      <path stroke-linecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  )
}

export default Minus
