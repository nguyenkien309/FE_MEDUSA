import { Order } from "@medusajs/medusa"
import { formatAmount } from "@lib/util/prices"
import { Text } from "@medusajs/ui"

type OrderSummaryProps = {
  order: Order
}

const OrderSummary = ({ order }: OrderSummaryProps) => {
  const getAmount = (amount?: number | null) => {
    if (!amount) {
      return
    }

    return formatAmount({ amount, region: order.region, includeTaxes: false })
  }

  return (
    <div className="w-full" style={{ fontFamily: "Inter" }}>
      <Text className="text-xl mb-4">Order Information</Text>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Text className="text-gray-400 text-base">Order Details</Text>

          {order.subtotal > 0 && (
            <div className="flex items-center justify-between">
              <span className="shrink-0">Sub Total</span>
              <span className="max-w-[5rem] text-right break-words">
                {getAmount(order.subtotal)}
              </span>
            </div>
          )}
          {order.discount_total > 0 && (
            <div className="flex items-center justify-between">
              <span className="shrink-0">Discount</span>
              <span className="max-w-[6.25rem] text-right break-words">
                {getAmount(order.discount_total)}
              </span>
            </div>
          )}
          {order.shipping_total > 0 && (
            <div className="flex items-center justify-between">
              <span className="shrink-0">Delivery Fee</span>
              <span className="max-w-[6.25rem] text-right break-words">
                {getAmount(order.shipping_total)}
              </span>
            </div>
          )}
          {order.total > 0 && (
            <div className="flex items-center justify-between font-bold">
              <span className="shrink-0">Grand Total</span>
              <span className="max-w-[6.25rem] text-right break-words">
                {getAmount(order.total)}
              </span>
            </div>
          )}
        </div>

        <div className="text-left md:text-center">
          <Text className="text-gray-400 text-base">Payment Details</Text>
          <Text>Cash on Delivery</Text>
        </div>
        <div className="text-left md:text-center">
          <Text className="text-gray-400 text-base">Address Details</Text>
          <Text>
            {order.shipping_address.address_1}
            {order.shipping_address.address_2}
          </Text>
          <Text>
            {order.shipping_address.first_name}
            {order.shipping_address.last_name}
          </Text>
          <Text>{order?.shipping_address.country?.display_name}</Text>
          <Text> {order.shipping_address.phone}</Text>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
