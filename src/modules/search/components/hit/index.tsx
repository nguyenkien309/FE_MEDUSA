import { ProductVariant } from "@medusajs/medusa"
import { Container, Text } from "@medusajs/ui"

import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export type ProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: ProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

type HitProps = {
  hit: ProductHit
}

const Hit = ({ hit }: HitProps) => {
  return (
    <LocalizedClientLink href={`/products/${hit.handle}`}>
      <div className="flex flex-row md:flex-col">
        <Thumbnail
          thumbnail={hit.thumbnail}
          size="square"
          className="group rounded-none h-28 w-28 sm:h-80 sm:w-80"
        />
          <p className="pl-4 md:pl-0 md:text-base text-sm md:pt-4 text-left">{hit.title}</p>
      </div>
    </LocalizedClientLink>
  )
}

export default Hit
