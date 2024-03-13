import { FUTURE } from "config/home-page"
import Image from "next/image"
import Item from "./item"


const FutureV = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto justify-between md:space-y-0 space-y-4 bg-white py-10 gap-3">
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
