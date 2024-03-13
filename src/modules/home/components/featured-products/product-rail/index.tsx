"use client"
import { Region } from "@medusajs/medusa"

import Link from "next/link"
import { ProductCollectionWithPreviews } from "types/global"
import ProductPreview from "./product-details"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const products = collection?.products

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-8 small:py-12">
      <div className="flex justify-between mb-8"></div>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-x-2 md:gap-x-6 md:gap-y-24 gap-y-4">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
      </ul>
      <div className="items-center py-4">
        <Link href={`/collections/${collection.handle}`}>
          <button className="bg-black text-white font-volkhov w-[207px] h-14 text-base rounded-md ">
            View all
          </button>
        </Link>
      </div>
    </div>
  )
}
