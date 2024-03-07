"use client"

import { Cart } from "@medusajs/medusa"
import {
  useParams,
  useSearchParams
} from "next/navigation"


import { useFormState } from "react-dom"
import { setAddresses } from "../../actions"
import ErrorMessage from "../error-message"
import ShippingAddress from "../shipping-address"
import { SubmitButton } from "../submit-button"

const Addresses = ({
  cart,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | null
}) => {
  const searchParams = useSearchParams()
  const params = useParams()

  const countryCode = params.countryCode as string

  const isOpen = searchParams.get("step") === "delivery"

  const [message, formAction] = useFormState(setAddresses, null)

  return (
    <div className="bg-white">
      <form action={formAction}>
        <div>
          <ShippingAddress
            countryCode={countryCode}
            cart={cart}
            isOpen={isOpen}
          />
          {isOpen && <SubmitButton className="mt-6 w-full">Continue to shipping</SubmitButton>}
          
          <ErrorMessage error={message} />
        </div>
      </form>
    </div>
  )
}

export default Addresses
