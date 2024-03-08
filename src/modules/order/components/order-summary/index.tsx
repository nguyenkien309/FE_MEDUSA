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
    <div>
      <Text className=" text-xl mb-[1.5rem]">Order information</Text>
      <div className="grid grid-cols-3 gap-x-10">
        <div>
          <Text className="text-[#626262] text-base">Order Details</Text>

          {order.subtotal > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-between">
              <span>Sub Total</span>
              <span>{getAmount(order.subtotal)}</span>
            </div>
          )}
          {order.discount_total > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-between">
              <span>Discount</span>
              <span>{getAmount(order.discount_total)}</span>
            </div>
          )}
          {order.shipping_total > 0 && (
            <div className="flex flex-col items-start md:flex-row justify-between">
              <span>Delivery Fee</span>
              <span>{getAmount(order.shipping_total)}</span>
            </div>
          )}
          {order.total > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-between">
              <span>Grand Total</span>
              <span>{getAmount(order.total)}</span>
            </div>
          )}
        </div>
        <div className="text-center">
          <Text className="text-[#626262] text-base">Payment Details</Text>
          <Text>Cash on Delivery</Text>
        </div>
        <div className="text-center">
          <Text className="text-[#626262] text-base">Address Details</Text>
          <Text>
            {order.shipping_address.address_1}{" "}
            {order.shipping_address.address_2}
          </Text>
          <Text>
            {order.shipping_address.first_name}{" "}
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
