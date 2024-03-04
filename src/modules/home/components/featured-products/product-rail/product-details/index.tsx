'use client'
import { Text, clx } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Thumbnail from "../thumbnail"
// import PreviewPrice from "./price"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

export default function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const [pricedProduct, setPriceProduct] = useState<PricedProduct | null>(null)

  const getpricedProduct = useCallback(async () => {
    const productDetails= await retrievePricedProductById({
      id: productPreview.id,
      regionId: region.id,
    })
    setPriceProduct(productDetails)
  }, [productPreview.id, region.id])
  useEffect(() => {
   
    getpricedProduct()
  }, [getpricedProduct])

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div className="px-4 py-3 border rounded-lg bg-white ">
        <div className="md:w-[336px] h-[244px] relative rounded-lg overflow-hidden">
          <Image
            src={pricedProduct.thumbnail || ""}
            alt="Thumbnail"
            className="absolute inset-0 object-cover object-center rounded-lg overflow-hidden"
            quality={100}
            fill
          />
        </div>

        <p className="text-left my-2">{pricedProduct.title}</p>
        {cheapestPrice && (
          <>
            {cheapestPrice.price_type === "sale" && (
              <p className="font-poppins text-xl text-left my-2">
                {cheapestPrice.original_price}
              </p>
            )}
            <p
              className={clx(
                "text-left font-poppins text-xl my-2 font-medium text-[#484848]",
                {
                  "text-ui-fg-interactive": cheapestPrice.price_type === "sale",
                }
              )}
            >
              {cheapestPrice.calculated_price}
            </p>
          </>
        )}
        <p className="text-left h-20 overflow-clip">
          {pricedProduct.description}
        </p>
      </div>
    </LocalizedClientLink>
  )
}
