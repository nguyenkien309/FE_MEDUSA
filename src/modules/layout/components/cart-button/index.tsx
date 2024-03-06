import { LineItem } from "@medusajs/medusa"

import { enrichLineItems, retrieveCart } from "@modules/cart/actions"
import CartDrawer from "../cart-drawer"

const fetchCart = async () => {
  const cart: any = await retrieveCart()

  if (cart?.items.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
    cart.items = enrichedItems as LineItem[]
  }

  return cart
}

export default async function CartButton() {
  const cart = await fetchCart()

  return <CartDrawer cart={cart} />
}
