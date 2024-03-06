"use client"

import { Order } from "@medusajs/medusa"
import { Button, Table } from "@medusajs/ui"

import OrderCard from "../order-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const OrderOverview = ({ orders }: { orders: Order[] }) => {
  if (orders?.length) {
    return (
      <div className="flex flex-col ">
        <Table>
          <Table.Header>
            <Table.Row className="bg-[#F5F5F5]">
              <Table.HeaderCell
                className="text-left"
                colSpan={2}
                style={{ padding: 0 }}
              >
                Product
              </Table.HeaderCell>
              <Table.HeaderCell className="text-center">
                Quantity
              </Table.HeaderCell>
              <Table.HeaderCell className="text-center">Price</Table.HeaderCell>
              <Table.HeaderCell
                className="text-center"
                style={{ paddingRight: "0px" }}
              >
                status
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {orders.map((item) => {
              return <OrderCard key={item.id} order={item} />
            })}
          </Table.Body>
        </Table>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      <h2 className="text-large-semi">Nothing to see here</h2>
      <p className="text-base-regular">
        You don&apos;t have any orders yet, let us change that {":)"}
      </p>
      <div className="mt-4">
        <LocalizedClientLink href="/" passHref>
          <Button>Continue shopping</Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderOverview
