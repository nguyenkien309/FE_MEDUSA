"use client"
import Image from "next/image"
import Scroll from "/public/images/home/scroll.png"
import { useEffect, useState } from "react"
import { useScrollToTop } from "@lib/hooks"
const ScrollToTop = () => {
  const [visiable, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 180) {
      setVisible(true)
    } else if (scrolled <= 180) {
      setVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
    return () => {
      window.removeEventListener("scroll", toggleVisible)
    }
  }, [])
  const scrollToTop = useScrollToTop()
  return (
    <div
      className={`fixed bottom-5 right-5 rounded-full md:w-14 w-8 h-8 md:h-14 bg-white hover:bg-gray-300 cursor-pointer z-50 ${
        visiable ? "" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <button>
        <Image src={Scroll.src} alt="arrow-up" width={57} height={57} />
      </button>
    </div>
  )
}

export default ScrollToTop
