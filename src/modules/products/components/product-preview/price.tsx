import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      <Text
        size="large" weight={"plus"}
      >
        {price.calculated_price}
      </Text>
      {price.price_type === "sale" && (
        <Text size="large" weight={"plus"} className="line-through">
          {price.original_price}
        </Text>
      )}
    </>
  )
}
