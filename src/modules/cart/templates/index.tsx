import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import { CartWithCheckoutStep } from "types/global"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { Customer } from "@medusajs/medusa"
import RightIcon from "@modules/common/icons/right-icon"
import { Heading } from "@medusajs/ui"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: CartWithCheckoutStep | null
  customer: Omit<Customer, "password_hash"> | null
}) => {
  return (
    <div className="pt-8 w-full">
      <div className="content-container small:max-w-[1281px] max-w-full medium:p-0 p-4">
        {cart?.items.length ? (
          <div className="w-full">
            <Heading className="text-center text-black small:text-[46px] xsmall:text-[32px] text-[28px] leading-[32px] font-normal small:mb-[60px] xsmall:mb-8 mb-6">
              Shopping Cart
            </Heading>
            <div className="xsmall:flex items-center justify-start mb-[33.25px] hidden">
              <a
                href="/"
                className="text-black text-[16px] leading-[22.5px] font-normal cursor-pointer mr-3"
              >
                Home
              </a>
              <RightIcon className="mr-[6px]" />
              <a
                href="/us/cart"
                className="text-black text-[16px] leading-[24px] font-bold cursor-pointer"
              >
                Your Shopping Cart
              </a>
            </div>
            <div className="flex flex-col bg-white gap-y-6">
              {!customer && (
                <>
                  <SignInPrompt />
                  <Divider />
                </>
              )}
              <ItemsTemplate region={cart?.region} items={cart?.items} />
            </div>
            {cart && cart.region && (
              <div className="bg-white small:py-10 py-4 w-full">
                <Summary cart={cart} hasSubtotal={false} hasTotal={false} />
              </div>
            )}
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
