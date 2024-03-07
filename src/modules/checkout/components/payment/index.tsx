"use client"

import { RadioGroup } from "@headlessui/react"
import { Cart } from "@medusajs/medusa"
import { Heading } from "@medusajs/ui"
import ErrorMessage from "@modules/checkout/components/error-message"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { paymentInfoMap } from "@lib/constants"
import { setPaymentMethod } from "@modules/checkout/actions"
import PaymentContainer from "@modules/checkout/components/payment-container"
import Divider from "@modules/common/components/divider"
import Spinner from "@modules/common/icons/spinner"
import PaymentButton from "../payment-button"

const Payment = ({
  cart,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | null
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchParams = useSearchParams()

  const isOpen = searchParams.get("step") === "payment"
  const set = async (providerId: string) => {
    setIsLoading(true)
    await setPaymentMethod(providerId)
      .catch((err) => setError(err.toString()))
      .finally(() => {
        if (providerId === "paypal") return
        setIsLoading(false)
      })
  }

  const handleChange = (providerId: string) => {
    setError(null)
    set(providerId)
  }

  const handleSubmit = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    setIsLoading(false)
    setError(null)
  }, [isOpen])

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between">
        <Heading
          level="h2"
          className="flex flex-row text-2xl gap-x-2 items-baseline text-gray-600"
        >
          Payment
        </Heading>
       
      </div>
      <Divider className="mb-6"/>
      <div>
        {cart?.payment_sessions?.length ? (
          <div className={isOpen ? "block" : "hidden"}>
            <RadioGroup
              value={cart.payment_session?.provider_id || ""}
              onChange={(value: string) => handleChange(value)}
            >
              {cart.payment_sessions
                .sort((a, b) => {
                  return a.provider_id > b.provider_id ? 1 : -1
                })
                .map((paymentSession) => {
                  return (
                    <PaymentContainer
                      paymentInfoMap={paymentInfoMap}
                      paymentSession={paymentSession}
                      key={paymentSession.id}
                      selectedPaymentOptionId={
                        cart.payment_session?.provider_id || null
                      }
                    />
                  )
                })}
            </RadioGroup>

            <ErrorMessage error={error} />
            <PaymentButton cart={cart} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-16 text-ui-fg-base">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  )
}

export default Payment
