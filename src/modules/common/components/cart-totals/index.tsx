"use client"

import { formatAmount } from "@lib/util/prices"
import { InformationCircleSolid } from "@medusajs/icons"
import { Cart, Order } from "@medusajs/medusa"
import { Tooltip } from "@medusajs/ui"
import React from "react"

type CartTotalsProps = {
  data: Omit<Cart, "refundable_amount" | "refunded_total"> | Order
  hasSubtotal?: boolean
}

const CartTotals: React.FC<CartTotalsProps> = ({
  data,
  hasSubtotal = true,
}) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = data

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: data.region,
      includeTaxes: false,
    })
  }

  return (
    <div className="w-full flex flex-col items-end mt-8">
      <div className="flex flex-col small:gap-y-[20px] gap-y-4 txt-medium text-ui-fg-subtle w-full items-end text-[#484848]">
        {hasSubtotal && (
          <div className="flex items-center justify-between small:text-[22px] font-normal leading-[32px] text-black max-w-[610px] w-full mb-2 text-[16px]">
            <span className="flex gap-x-1 items-center">
              Subtotal
              <Tooltip content="Cart total excluding shipping and taxes.">
                <InformationCircleSolid color="var(--fg-muted)" />
              </Tooltip>
            </span>
            <span>{getAmount(subtotal)}</span>
          </div>
        )}
        {!!discount_total && (
          <div className="flex items-center justify-between text-[22px] font-normal leading-[32px] text-black max-w-[610px] w-full">
            <span>Discount</span>
            <span className="text-ui-fg-interactive">
              - {getAmount(discount_total)}
            </span>
          </div>
        )}
        {!!gift_card_total && (
          <div className="flex items-center justify-between text-[22px] font-normal leading-[32px] text-black max-w-[610px] w-full">
            <span>Gift card</span>
            <span className="text-ui-fg-interactive">
              - {getAmount(gift_card_total)}
            </span>
          </div>
        )}
        <div className="flex justify-between small:text-[22px] text-[16px] font-normal leading-[32px] text-black max-w-[610px] w-full">
          <span>Shipping</span>
          <span>{getAmount(shipping_total)}</span>
        </div>
        <div className="flex justify-between small:text-[22px] text-[16px] font-normal leading-[32px] text-black max-w-[610px] w-full">
          <span className="flex gap-x-1 items-center ">Taxes</span>
          <span>{getAmount(tax_total)}</span>
        </div>
      </div>
      <div className="h-px w-full my-3" />
      <div className="flex items-center justify-between small:text-[22px] font-normal leading-[32px] text-black max-w-[610px] w-full mb-2 text-[16px] small:mt-1">
        <span>Total</span>
        <span>{getAmount(total)}</span>
      </div>
    </div>
  )
}

export default CartTotals
