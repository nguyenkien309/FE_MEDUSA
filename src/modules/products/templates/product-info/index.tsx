import { Region } from "@medusajs/medusa"
import { PricedProduct, PricedVariant } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPrice from "@modules/products/components/product-price"


type ProductInfoProps = {
  product: PricedProduct, 
  variant: PricedVariant | undefined,
  region: Region
}

const ProductInfo = ({ product, variant, region }: ProductInfoProps) => {
  return (
    <div id="product-info" className="max-w-[500px] mx-auto">
      <Text className="text-gray-500 hidden xl:block">BHS</Text>
      <div className="flex flex-col gap-y-2 max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
       
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base mt-8 xl:mt-0">
          {product.title}
        </Heading>
        <ProductPrice product={product} variant={variant} region={region} />
        <Text className="text-medium text-ui-fg-subtle">
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
