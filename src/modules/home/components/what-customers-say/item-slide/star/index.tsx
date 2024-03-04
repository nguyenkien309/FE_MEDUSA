import Image from "next/image"
import Stars from "/public/icons/star.svg"

import React from "react"
interface Props {
  star: number
}

const Star: React.FC<Props> = ({ star }) => {
  return (
    <div className="flex">
      {Array.from(Array(star).keys()).map((i) => {
        return (
          <Image key={i} src={Stars.src} alt="star" width={19} height={19} />
        )
      })}
    </div>
  )
}

export default Star
