import { Metadata } from "next"

import { listCustomerOrders } from "@lib/data"
import { notFound } from "next/navigation"
import OrderAccountTemplate from "@modules/order/templates/order-account-template"

export const metadata: Metadata = {
  title: "Orders",
  description: "Overview of your previous orders.",
}

type Params = {
  searchParams: {
    page?: string
  }
}

export default async function Orders({ searchParams }: Params) {
  const orders = await listCustomerOrders()
  const { page } = searchParams

  if (!orders) {
    notFound()
  }

  return <OrderAccountTemplate page={page} />
}
