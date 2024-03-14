"use client"

import { Order } from "@medusajs/medusa"
import { Table } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { formatAmount } from "@lib/util/prices"
import { ChevronRight } from "@medusajs/icons"
import Thumbnail from "@modules/products/components/thumbnail"

type OrderCardProps = {
  order: Omit<Order, "beforeInsert">
}

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <>
      {order.items.map((i) => {
        return (
          <Table.Row key={i.id} className="bg-[#F5F5F5]">
            <Table.Cell className="!pl-0 p-4 w-14">
              <div className="flex w-16">
                <Thumbnail
                  thumbnail={i.thumbnail}
                  size="square"
                  className="w-[58px] h-[66px]"
                />
              </div>
            </Table.Cell>

            <Table.Cell className="text-center text-ui-fg-base font-semibold">
              {i.title}
            </Table.Cell>

            <Table.Cell className="text-center">{i.quantity}</Table.Cell>
            <Table.Cell className="text-center">
              {formatAmount({
                amount: order.total,
                region: order.region,
                includeTaxes: false,
              })}
            </Table.Cell>
            <Table.Cell className="text-center" style={{ paddingRight: "0px" }}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </Table.Cell>
            <Table.Cell
              className=" justify-end"
              style={{ paddingRight: "0px" }}
            >
              <LocalizedClientLink href={`/account/orders/details/${order.id}`}>
                <ChevronRight />
              </LocalizedClientLink>
            </Table.Cell>
          </Table.Row>
        )
      })}
    </>
  )
}

export default OrderCard
