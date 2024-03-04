import Image from "next/image"
import Star from "./star"
import { clx } from "@medusajs/ui"

type Props = {
  comment: string
  username: string
  star: number
  avatar: string
  carrer: string
  activeItem: number
  index: number
  setActiveItem: (index: number) => void
}

const ItemSlide: React.FC<Props> = (props) => {
  const {
    comment,
    username,
    star,
    avatar,
    carrer,
    activeItem,
    index,
    setActiveItem,
  } = props

  return (
    <div
      className={clx({
        "flex flex-col md:flex-row mx-4 md:h-[300px] md:w-[648px] mb-4 justify-between rounded-lg bg-white p-2 md:p-8 shadow-arrow md:mb-0 space-x-4 duration-200 transition-all":
          true,

        " md:translate-x-1/3": index < activeItem,
        " md:-translate-x-1/3": index > activeItem,
        " md:scale-125 z-20 translate-x-0": index === activeItem,
        " md:translate-x-1/2": index === activeItem && index ===0,
        " md:-translate-x-1/2": index === activeItem && index ===2
      })}
      onClick={() => setActiveItem(index)}
    >
      <div className="mb-[9px] flex items-center md:w-[263px]  md:h-[263px] w-32 h-32">
        <Image src={avatar} alt="star" width={263} height={263} />
      </div>
      <div className="">
        <p
          className={`md:min-w-[319px]  md:custom-text-ellipsis mb-4 md:min-h-[60px] text-left text-sm leading-5 text-black/60 duration-500`}
        >
          {comment}
        </p>
        <Star star={star} />
        <div className="bg-[#484848] h-[1px] mt-4 w-1/2"></div>
        <div className="mt-4">
          <p className="md:text-3xl">{username}</p>
          <p className="md:text-base text-[#484848]">{carrer}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemSlide
