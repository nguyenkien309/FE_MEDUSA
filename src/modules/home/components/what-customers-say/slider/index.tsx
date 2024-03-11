"use client"

import { useEffect, useState } from "react"
import Card from "/public/images/home/card.png"
import ArrowIcon from "@modules/common/icons/arrow"
const Slider = () => {
  useEffect(() => {
    const gallery: HTMLElement | null = document.getElementById("slider")
    const left: Element = document.getElementsByClassName("left")[0]
    ;(left as HTMLElement).classList.add("disabled")
    const right: Element = document.getElementsByClassName("right")[0]
    const images: number = 10
    const imagesUrl: string = Card.src
    let selected: number = 1

    function init(): void {
      for (let i: number = 0; i < images; i++) {
        const imageWrapper: HTMLDivElement = document.createElement("div")
        imageWrapper.id = `image_${i}`
        imageWrapper.classList.add("wrapper")
        if (i === selected) {
          imageWrapper.classList.add("selected")
        }
        const image: HTMLImageElement = document.createElement("img")
        image.src = imagesUrl
        imageWrapper.appendChild(image)
        if (gallery) gallery.appendChild(imageWrapper)
      }
    }

    init()

    if (right instanceof HTMLElement) {
      right.onclick = function (): void {
        selected++
        if (selected > images - 1) {
          selected = images - 1
        }
        handleSelection()
      }
    }

    if (left instanceof HTMLElement) {
      left.onclick = function (): void {
        selected--
        if (selected < 0) {
          selected = 0
        }
        handleSelection()
      }
    }

    function handleSelection(): void {
      const images: HTMLCollectionOf<Element> =
        document.getElementsByClassName("wrapper")
      if (selected === images.length - 1) {
        ;(right as HTMLElement).classList.add("disabled")
      } else {
        ;(right as HTMLElement).classList.remove("disabled")
      }
      if (selected === 0) {
        ;(left as HTMLElement).classList.add("disabled")
      } else {
        ;(left as HTMLElement).classList.remove("disabled")
      }
      for (let i: number = 0; i < images.length; i++) {
        const img: Element = images[i]
        if (img.id === `image_${selected}`) {
          ;(img as HTMLElement).classList.add("selected")
        } else {
          ;(img as HTMLElement).classList.remove("selected")
        }
      }
    }
  }, [])

  return (
    <div className="overflow-hidden content-container md:mx-auto">
      <div className="gallery mx-auto">
      <div id="slider" className="slider"></div>
      <div className="arrows">
        <div
          className={`mr-1 left bg-white flex items-center justify-center w-12 h-12 rounded-full cursor-pointer shadow-arrow text-black `}
        >
          <ArrowIcon />
        </div>
        <div
          className={`ml-1 right rotate-180 bg-white flex items-center justify-center w-12 h-12 rounded-full cursor-pointer shadow-arrow text-black `}
        >
          <ArrowIcon />
        </div>
      </div>
    </div>
    </div>
    
  )
}
export default Slider
