import React from "react"
import { listCustomerOrders } from "@lib/data"
import { Pagination } from "@modules/store/components/pagination"
import OrderOverview from "@modules/account/components/order-overview"

const ORDER_LIMIT = 5

const PaginatedOrders = async ({ page }: { page: number }) => {
  const data: any = await listCustomerOrders(Number.MAX_SAFE_INTEGER, 0)
  const startIndex = (page - 1) * ORDER_LIMIT
  const endIndex = Math.min(startIndex + ORDER_LIMIT, data.length)
  const totalPages = Math.ceil(data.length / ORDER_LIMIT)
  return (
    <>
      <OrderOverview orders={data.slice(startIndex, endIndex)} />
      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} />}
    </>
  )
}

export default PaginatedOrders
