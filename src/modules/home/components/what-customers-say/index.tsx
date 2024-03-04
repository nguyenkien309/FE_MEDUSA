"use client"
import ArrowIcon from "@modules/common/icons/arrow"
import { WHAT_CLIENT_SAY, WhatClientSay } from "config/home-page"
import { useCallback,  useState } from "react"
import ItemSlide from "./item-slide"

const ReviewSlider = () => {
  const [activeItem, setActiveItem] = useState(1)
  const handleClickNext = useCallback(() => {
    if (activeItem === 2) {
      return
    }

    setActiveItem((pre) => pre + 1)
  }, [activeItem])
  const handleClickPre = useCallback(() => {
    if (activeItem === 0) {
      return
    }
    setActiveItem((pre) => pre - 1)
  }, [activeItem])
  const handleClick = useCallback((index: number) => {
    setActiveItem(index)
  }, [])
  
  return (
    <div className="overflow-hidden bg-[#FAFAFA]">
      <div className="pb-8 text-center">
        <p className="text-[46px] text-[#484848]">
          This Is What Our Customers Say
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>
      <div className="pb-[66px] pt-[52px] md:pb-[102px] md:pt-[95px] mx-auto">
        <div
          className="mx-4 flex md:flex-row flex-col container relative"
          
        >
          {WHAT_CLIENT_SAY.map((item: WhatClientSay, index) => {
            return (
              <ItemSlide
                key={index}
                {...item}
                activeItem={activeItem}
                setActiveItem={handleClick}
              />
            )
          })}
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 pt-12 z-[10000]">
          <div
            className={`bg-white flex items-center justify-center w-12 h-12 rounded-full cursor-pointer shadow-arrow
             ${activeItem > 0 ? "text-black" : "text-black/40"}
            `}
            onClick={handleClickPre}
          >
            <ArrowIcon />
          </div>
          <div
            className={`bg-white flex items-center justify-center w-12 h-12 rounded-full cursor-pointer shadow-arrow rotate-180  ${
              activeItem < 2 ? "text-black" : "text-black/40"
            }`}
            onClick={handleClickNext}
          >
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSlider
