"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button, Text } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

import { useIntersection } from "@lib/hooks/use-in-view"
import { addToCart } from "@modules/cart/actions"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"

import Minus from "@modules/common/icons/minus"
import Plus from "@modules/common/icons/plus"
import ProductInfo from "@modules/products/templates/product-info"
import MobileActions from "../mobile-actions"

type ProductActionsProps = {
  product: PricedProduct
  region: Region
}

export type PriceType = {
  calculated_price: string
  original_price?: string
  price_type?: "sale" | "default"
  percentage_diff?: string
}

export default function ProductActions({
  product,
  region,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({})
  const [isAdding, setIsAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const countryCode = useParams().countryCode as string

  const variants = product.variants

  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {}

    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined })
    }

    setOptions(optionObj)
  }, [product])

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {}

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue

      const temp: Record<string, string> = {}

      for (const option of variant.options) {
        temp[option.option_id] = option.value
      }

      map[variant.id] = temp
    }

    return map
  }, [variants])

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key
      }
    }

    return variants.find((v) => v.id === variantId)
  }, [options, variantRecord, variants])

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id])
    }
  }, [variants, variantRecord])

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update })
  }

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    if (variant && !variant.inventory_quantity) {
      return false
    }

    if (variant && variant.allow_backorder === false) {
      return true
    }
  }, [variant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: variant.id,
      quantity,
      countryCode,
    })

    setIsAdding(false)
  }

  const handleQuantityChange = (action: string) => {
    if (action === "increase") {
      setQuantity(quantity + 1)
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <>
      <ProductInfo product={product} variant={variant} region={region} />
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div>
          {product.variants.length > 1 && (
            <div className="flex flex-col gap-y-4 max-w-[500px] mx-auto">
              {(product.options || []).map((option) => {
                return (
                  <div key={option.id}>
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={updateOptions}
                      title={option.title}
                    />
                  </div>
                )
              })}

            </div>
          )}
        </div>
        <div className="md:max-w-[500px] md:min-w-[500px] md:mx-auto mt-2">
          <Text size="base" weight={"plus"} className="mb-3">
            Quantity
          </Text>
          <div className="flex gap-x-4 items-center">
            <div className="flex gap-x-2 items-center border p-2 rounded-base">
              <button
                className="px-3 disabled:text-gray-400"
                onClick={() => handleQuantityChange("decrease")}
                disabled={quantity === 1}
              >
                <Minus />
              </button>
              <div className="w-2 text-center">{quantity}</div>
              <button
                className="px-3"
                onClick={() => handleQuantityChange("increase")}
              >
                <Plus />
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={!inStock || !variant}
              variant="primary"
              className="w-full h-10"
              isLoading={isAdding}
            >
              {!variant
                ? "Select variant"
                : !inStock
                ? "Out of stock"
                : "Add to cart"}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
