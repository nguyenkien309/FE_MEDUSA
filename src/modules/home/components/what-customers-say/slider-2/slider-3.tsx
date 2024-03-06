"use client"
import { WHAT_CLIENT_SAY, WhatClientSay } from "config/home-page"
import React, { useState, useRef, useEffect } from "react"
import ItemSlide from "../item-slide"
import ReactDOMServer from "react-dom/server"
import Image from "next/image"

interface Image {
  id: string
  selected: boolean
}

const ImageWrapper: React.FC<Image> = ({ id, selected }) => {

  return (
    <div>
      <div>
        <Image alt="" src={"icons/icon-animate.svg"} width={19} height={9} />
      </div>
    </div>
    // <div id={id} className={`wrapper ${selected ? "selected" : ""}`}>
    //   {/* Additional content for the wrapper if needed */}
    // </div>
  )
}

const Slider3: React.FC = () => {
  const [selected, setSelected] = useState<number>(1)
  const images = 3

  const galleryRef = useRef<HTMLDivElement | null>(null)
  const leftRef = useRef<HTMLDivElement | null>(null)
  const rightRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    for (let i = 0; i < images; i++) {
      const htmlSlider = ReactDOMServer.renderToString(
        <ImageWrapper key={i} id={`image_${i}`} selected={i === selected} />
      )
      const z = document.createElement("div")
      z.innerHTML = htmlSlider
      gallery.appendChild(z)
      //   gallery.appendChild(
      //     <ImageWrapper key={i} id={`image_${i}`} selected={i === selected} />
      //   )
    }

    const handleSelection = () => {
      const images = gallery!.querySelectorAll(".wrapper")
      if (selected === images.length - 1) {
        rightRef.current!.classList.add("disabled")
      } else {
        rightRef.current!.classList.remove("disabled")
      }
      if (selected === 0) {
        leftRef.current!.classList.add("disabled")
      } else {
        leftRef.current!.classList.remove("disabled")
      }
      for (const img of images) {
        img.classList.remove("selected")
        if (img.id === `image_${selected}`) {
          img.classList.add("selected")
        }
      }
    }

    const handleRightClick = () => {
      setSelected((prev) => {
        const newSelected = prev + 1
        if (newSelected > images - 1) {
          return images - 1
        }
        return newSelected
      })
      handleSelection()
    }

    const handleLeftClick = () => {
      setSelected((prev) => {
        const newSelected = prev - 1
        if (newSelected < 0) {
          return 0
        }
        return newSelected
      })
      handleSelection()
    }

    rightRef.current!.addEventListener("click", handleRightClick)
    leftRef.current!.addEventListener("click", handleLeftClick)

    return () => {
      rightRef.current!.removeEventListener("click", handleRightClick)
      leftRef.current!.removeEventListener("click", handleLeftClick)
    }
  }, [selected])

  return (
    <div className="gallery container mx-auto">
      <div ref={galleryRef} id="slider" className="slider"></div>
      <div className="arrows bg-white flex items-center justify-center w-12 h-12 rounded-full cursor-pointer shadow-arrow rotate-180">
        <div ref={leftRef} className="left bg-red-300">
          <svg viewBox="0 0 512 512" width="100">
            <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
          </svg>
        </div>
        <div className="right bg-red-300">
          <svg viewBox="0 0 512 512" width="100">
            <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
export default Slider3
