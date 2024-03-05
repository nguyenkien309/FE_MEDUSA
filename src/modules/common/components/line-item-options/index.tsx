import { ProductVariant } from "@medusajs/medusa"
import { Text, clx } from "@medusajs/ui"

type LineItemOptionsProps = { variant: ProductVariant; className?: string }

const LineItemOptions = ({ variant, className }: LineItemOptionsProps) => {
  return (
    <Text
      className={clx(
        "inline-block txt-medium md:text-[16px] text-ui-fg-subtle w-full overflow-hidden text-ellipsis",
        className
      )}
    >
      Variant: {variant.title}
    </Text>
  )
}

export default LineItemOptions
