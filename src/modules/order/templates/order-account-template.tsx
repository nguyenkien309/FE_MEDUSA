import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedOrders from "./paginated-order"

const OrderAccountTemplate = ({ page }: { page?: string }) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="w-full bg-[#F5F5F5] p-5 mr-10">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Orders</h1>
        <p className="hidden md:flex text-base-regular">
          View your previous orders and their status. You can also create
          returns or exchanges for your orders if needed.
        </p>
      </div>
      <div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedOrders page={pageNumber} />
        </Suspense>
      </div>
    </div>
  )
}

export default OrderAccountTemplate
