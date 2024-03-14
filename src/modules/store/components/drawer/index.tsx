"use client"

import { clx } from "@medusajs/ui"
import Close from "@modules/common/icons/close"
import React, { ReactNode, SetStateAction } from "react"

export default function Drawer({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
  children: ReactNode
}) {
  return (
    <div
      className={clx(
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ",
        {
          "transition-opacity opacity-100 duration-500 translate-x-0": isOpen,
          "transition-all delay-500 opacity-0 translate-x-full": !isOpen,
        }
      )}
    >
      <div
        className={clx(
          "p-8 w-screen max-w-sm !md:max-w-md right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform",
          { "translate-x-0": isOpen, "translate-x-full": !isOpen }
        )}
      >
        <button
          className="absolute top-5 right-5 z-20"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <Close />
        </button>
        <div className="relative w-screen max-w-sm pb-10 flex flex-col space-y-6 h-full">
          {children}
        </div>
      </div>
      <div
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false)
        }}
      ></div>
    </div>
  )
}
