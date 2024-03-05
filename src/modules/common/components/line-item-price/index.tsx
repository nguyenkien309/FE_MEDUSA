import { formatAmount } from "@lib/util/prices"
import { LineItem, Region } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"

import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { CalculatedVariant } from "types/medusa"

type LineItemPriceProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  style?: "default" | "tight"
  className?: string
}

const LineItemPrice = ({
  item,
  region,
  style = "default",
  className,
}: LineItemPriceProps) => {
  const originalPrice =
    (item.variant as CalculatedVariant).original_price * item.quantity
  const hasReducedPrice = (item.total || 0) < originalPrice

  return (
    <div
      className={clx(
        "flex flex-col gap-x-2 text-ui-fg-subtle items-end h-full",
        className
      )}
    >
      <div className="text-left h-full">
        {hasReducedPrice && (
          <>
            <p>
              {style === "default" && (
                <span className="text-ui-fg-subtle text-[14px] md:text-[16px]">
                  Original:{" "}
                </span>
              )}
              <span className="line-through text-ui-fg-muted text-[14px] md:text-[16px]">
                {formatAmount({
                  amount: originalPrice,
                  region: region,
                  includeTaxes: false,
                })}
              </span>
            </p>
            {style === "default" && (
              <span className="text-ui-fg-interactive text-[14px] md:text-[16px]">
                -{getPercentageDiff(originalPrice, item.total || 0)}%
              </span>
            )}
          </>
        )}
        <span
          className={clx(
            "text-base-regular text-[14px] md:text-[16px]",
            {
              "text-ui-fg-interactive": hasReducedPrice,
            },
            className
          )}
        >
          {formatAmount({
            amount: item.total || 0,
            region: region,
            includeTaxes: false,
          })}
        </span>
      </div>
    </div>
  )
}

export default LineItemPrice
