import { Cart } from "@medusajs/medusa"
import { Heading } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import Input from "@modules/common/components/input"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import CountrySelect from "../country-select"

const ShippingAddress = ({
  cart,
  countryCode,
  isOpen,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | null
  countryCode: string
  isOpen: boolean
}) => {
  const pathname = usePathname()
  const router = useRouter()
  const [formData, setFormData] = useState({
    "shipping_address.first_name": cart?.shipping_address?.first_name || "",
    "shipping_address.last_name": cart?.shipping_address?.last_name || "",
    "shipping_address.address_1": cart?.shipping_address?.address_1 || "",
    "shipping_address.company": cart?.shipping_address?.company || "",
    "shipping_address.postal_code": cart?.shipping_address?.postal_code || "",
    "shipping_address.city": cart?.shipping_address?.city || "",
    "shipping_address.country_code":
      cart?.shipping_address?.country_code || countryCode || "",
    "shipping_address.province": cart?.shipping_address?.province || "",
    email: cart?.email || "",
    "shipping_address.phone": cart?.shipping_address?.phone || "",
  })

  useEffect(() => {
    setFormData({
      "shipping_address.first_name": cart?.shipping_address?.first_name || "",
      "shipping_address.last_name": cart?.shipping_address?.last_name || "",
      "shipping_address.address_1": cart?.shipping_address?.address_1 || "",
      "shipping_address.company": cart?.shipping_address?.company || "",
      "shipping_address.postal_code": cart?.shipping_address?.postal_code || "",
      "shipping_address.city": cart?.shipping_address?.city || "",
      "shipping_address.country_code":
        cart?.shipping_address?.country_code || "",
      "shipping_address.province": cart?.shipping_address?.province || "",
      email: cart?.email || "",
      "shipping_address.phone": cart?.shipping_address?.phone || "",
    })
  }, [cart?.shipping_address, cart?.email])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className="mb-8">
        <Heading
          level="h2"
          className="flex flex-row text-2xl gap-x-2 items-baseline mb-3 text-gray-600"
        >
          Contact
        </Heading>
        <Input
          label="Email"
          name="email"
          type="email"
          title="Enter a valid email address."
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <Heading
          level="h2"
          className="flex flex-row text-2xl gap-x-2 items-baseline text-gray-600"
        >
          Delivery
        </Heading>
        {!isOpen &&
          cart?.shipping_address &&
          cart?.billing_address &&
          cart?.email && (
            <LocalizedClientLink
              href="/checkout?step=delivery"
              passHref
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
            >
              Edit
            </LocalizedClientLink>
          )}
      </div>
      <Divider />
      {isOpen ? (
        <div className="mt-6">
          <CountrySelect
            name="shipping_address.country_code"
            autoComplete="country"
            region={cart?.region}
            value={formData["shipping_address.country_code"]}
            onChange={handleChange}
            required
            className="mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First name"
              name="shipping_address.first_name"
              autoComplete="given-name"
              value={formData["shipping_address.first_name"]}
              onChange={handleChange}
              required
            />
            <Input
              label="Last name"
              name="shipping_address.last_name"
              autoComplete="family-name"
              value={formData["shipping_address.last_name"]}
              onChange={handleChange}
              required
            />
            <Input
              label="Address"
              name="shipping_address.address_1"
              autoComplete="address-line1"
              value={formData["shipping_address.address_1"]}
              onChange={handleChange}
              required
            />
            <Input
              label="Postal code"
              name="shipping_address.postal_code"
              autoComplete="postal-code"
              value={formData["shipping_address.postal_code"]}
              onChange={handleChange}
              required
            />
            <Input
              label="City"
              name="shipping_address.city"
              autoComplete="address-level2"
              value={formData["shipping_address.city"]}
              onChange={handleChange}
              required
            />
            <Input
              label="Phone"
              name="shipping_address.phone"
              autoComplete="tel"
              value={formData["shipping_address.phone"]}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ShippingAddress
