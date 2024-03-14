import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import { Text } from "@medusajs/ui"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import TrustBag from "/public/images/store/trustbag.png"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="content-container py-6 relative">
        <div className="flex items-center gap-x-2 mb-5">
          <LocalizedClientLink
            className="hover:text-ui-fg-base text-xl text-gray-600"
            href="/store"
          >
            Fashion
          </LocalizedClientLink>
          <span>{`>`}</span>
          <Text weight={"plus"} className="font-volkhov text-xl">
            Product
          </Text>
        </div>
        <div className="block xl:flex gap-x-20">
          <ImageGallery images={product?.images || []} />
          <div className="space-y-4">
            <Suspense
              fallback={<ProductActions product={product} region={region} />}
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
            <ProductOnboardingCta />
            <div className="p-3 bg-[#F8F8F8] flex justify-center max-w-[500px] md:max-w-2xl md:mx-auto">
              <div className="space-y-3 ">
                <Image
                  src={TrustBag}
                  alt="Trust Bag" 
                  layout="response"
                  width={320}
                />
                <Text size="large" weight={"plus"} className="text-center">
                  Guarantee safe & secure checkout
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container my-16 small:my-32">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
