import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import FilterProducts from "../components/refinement-list/filter-products"
import PaginatedProducts from "./paginated-products"
import { Heading } from "@medusajs/ui"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div>
      <div className="mb-8 text-3xl text-center">
        <Heading level="h1" className="mb-2 text-3xl font-volkhov">
          Fashion
        </Heading>
      </div>

      <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
        <RefinementList sortBy={sortBy || "created_at"}>
          <FilterProducts />
        </RefinementList>
        <div className="w-full">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sortBy || "created_at"}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
