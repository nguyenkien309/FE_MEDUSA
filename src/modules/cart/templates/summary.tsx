"use client"

import { Button } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { CartWithCheckoutStep } from "types/global"

type SummaryProps = {
  cart: CartWithCheckoutStep
  hasSubtotal?: boolean
}

const Summary = ({ cart, hasSubtotal }: SummaryProps) => {
  return (
    <div className="flex flex-col small:gap-y-[29px] gap-y-4 w-full">
      <CartTotals data={cart} hasSubtotal={hasSubtotal} />
      <LocalizedClientLink
        href={
          "/checkout?step=" +
          (cart.checkout_step === "address" ? "delivery" : cart.checkout_step)
        }
      >
        <Button className="font-normal text-[16px] leading-[16px] max-w-[610px] w-full small:h-[66px] h-[50px] float-right">
          Checkout
        </Button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
