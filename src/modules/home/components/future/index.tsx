import { FUTURE } from "config/home-page"
import Image from "next/image"
import Item from "./item"


const FutureV = () => {
  return (
    <div className="flex flex-col md:flex-row container mx-auto justify-between md:space-y-0 space-y-4 bg-white py-10">
      {FUTURE.map((item) => {
        return (
          <Item
            content={item.content}
            image={item.img}
            title={item.title}
            key={item.content}
          />
        )
      })}
    </div>
  )
}

export default FutureV
