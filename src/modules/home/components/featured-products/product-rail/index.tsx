'use client'
import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

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
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-8 small:py-12">
      <div className="flex justify-between mb-8">
      
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
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
     <div className="items-center">
      <button className="bg-black text-white font-volkhov w-[207px] h-14 text-base rounded-md">
      <Link href={`/collections/${collection.handle}`}>
          View all
        </Link>
      </button>
     </div>
    </div>
  )
}
