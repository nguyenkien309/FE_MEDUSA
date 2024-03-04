import Image from "next/image"

interface Props {
  image: string
  content: string
  title: string
}
const Item: React.FC<Props> = ({ content, image, title }) => {
  return (
    <div className="flex space-x-2 ml-5 md:ml-0">
      <div className="relative h-[50px] w-[50px]">
        <Image src={image} alt="" fill />
      </div>
      <div className="text-[#484848]">
        <p className=" text-xl">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}
export default Item
