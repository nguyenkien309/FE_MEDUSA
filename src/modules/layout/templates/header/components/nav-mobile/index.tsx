"use client"
import Image from "next/image"
import { useCallback, useState } from "react"
import Icon from "/public/icons/menu-mobile.svg"
import SearchIcon from "/public/icons/search.svg"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
const NavMobile = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = useCallback(() => {
    setOpen((pre) => !pre)
  }, [])

  return (
    <>
      <div
        onClick={handleOpen}
        className={`md:hidden transition-all duration-200 mr-3 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image width={24} height={24} alt="" src={Icon.src} />
      </div>
      <div
        className={`fixed w-full h-full z-[51] md:hidden transition-all duration-200 ${
          open ? "" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/50  min-h-screen"
          onClick={handleOpen}
        ></div>
        <div className="fixed inset-0 min-h-screen overflow-y-auto w-[200px] bg-white">
          <div className="items-center justify-center gap-20 shrink-0 py-5 px-4 space-y-3">
            <LocalizedClientLink
              className="flex hover:text-ui-fg-base text-[1rem]"
              href="/"
            >
              Home
            </LocalizedClientLink>
            <LocalizedClientLink
              className="flex hover:text-ui-fg-base text-[1rem]"
              href="/store"
            >
              Store
            </LocalizedClientLink>
            <div>
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="w-[6.25rem] h-[3.125rem] items-center justify-center rounded-md"
                  href="/search"
                  scroll={false}
                >
                  <Image
                    src={SearchIcon.src}
                    alt="search"
                    width={18}
                    height={18}
                  />
                </LocalizedClientLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavMobile
