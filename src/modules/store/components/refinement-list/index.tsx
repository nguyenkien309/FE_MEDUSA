"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ReactNode, useCallback, useState } from "react"

import SortProducts, { SortOptions } from "./sort-products"
import Bar from "@modules/common/icons/bar"
import Drawer from "../drawer"

type RefinementListProps = {
  sortBy?: SortOptions
  search?: boolean
  children?: ReactNode
}

const RefinementList = ({ sortBy, children }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isOpen, setIsOpen] = useState(false)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div>
      <button
        className="absolute top-[124px] right-6 lg:hidden block"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <Bar />
      </button>
      <div className="small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] hidden lg:flex">
        <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} />
        {children}
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} />
        {children}
      </Drawer>
    </div>
  )
}

export default RefinementList
