
import { getCart } from "@lib/data"
import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import CartTotals from "@modules/common/components/cart-totals"
import { cookies } from "next/headers"

const CheckoutSummary = async () => {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) {
    return null
  }

  const cart = await getCart(cartId).then((cart) => cart)

  if (!cart) {
    return null
  }

  return (
    <div className="sticky top-0 flex small:flex-col gap-y-8 py-8 small:py-0 bg-[#F5F5F5] px-6">
      <div className="w-full flex flex-col">
        <ItemsPreviewTemplate region={cart?.region} items={cart?.items} />
        <CartTotals data={cart} />
      </div>
    </div>
  )
}

export default CheckoutSummary
