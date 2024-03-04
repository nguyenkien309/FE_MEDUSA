"use client"
import { Region } from "@medusajs/medusa"

import { useCallback, useState } from "react"
import { ProductCollectionWithPreviews } from "types/global"
import ProductRail from "./product-rail"

export default function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleClickCollection = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])
  
  return (
    <div className="text-center container mx-auto py-10 bg=[#FAFAFA]">
      <p className="text-[46px] text-[#484848] pb-6">New Arrivals</p>
      <p className="text-[#8A8A8A] font-volkhov max-w-[614px] mx-4 md:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin{" "}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-4">
        {collections.map((collection, index) => {
          return (
            <div key={collection.id} className="">
              <button
                onClick={() => handleClickCollection(index)}
                className={`${index === activeIndex? 'bg-black text-white': 'bg-[#FAFAFA] text-[#8A8A8A]'} duration-200 transition-all rounded-md border-none outline-none w-full md:w-[207px] h-14  hover:bg-black  hover:text-white text-base font-volkhov`}
              >
                {collection.title}
              </button>
            </div>
          )
        })}
      </div>
      <ProductRail collection={collections[activeIndex]} region={region} />
    </div>
  )
}
