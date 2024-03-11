"use client"

import { LineItem, Region } from "@medusajs/medusa"
import { Table, Text, clx } from "@medusajs/ui"
import { updateLineItem } from "@modules/cart/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import DecreaseIcon from "@modules/common/icons/decrease-icon"
import IncreaseIcon from "@modules/common/icons/increase-icon"
import Thumbnail from "@modules/products/components/thumbnail"
import { useEffect, useState } from "react"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  type?: "full" | "preview"
}

const Item = ({ item, region, type = "full" }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { handle } = item.variant.product
  const [count, setCount] = useState<number>(item.quantity)
  const changeQuantity = async (quantity: number) => {
    setError(null)
    setUpdating(true)

    const message = await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        return err.message
      })
      .finally(() => {
        setUpdating(false)
      })

    message && setError(message)
  }

  useEffect(() => {
    changeQuantity(count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])
  return (
    <Table.Row
      className={clx("w-full", { "bg-[#F5F5F5]": type === "preview" })}
    >
      <Table.Cell
        className={clx(
          "!pl-0 small:p-[35px] small:pb-[44px] xsmall:py-4 py-2",
          {
            " xsmall:p-4 p-2 w-24": type === "preview",
          }
        )}
      >
        <LocalizedClientLink
          href={`/products/${handle}`}
          className={clx("flex", {
            "w-16": type === "preview",
            "small:max-w-[168px] small:w-full small:max-h-[225px] xsmall:w-20 w-12":
              type === "full",
          })}
        >
          <Thumbnail thumbnail={item.thumbnail} size="xsmall" />
        </LocalizedClientLink>
      </Table.Cell>
      <Table.Cell className="text-left flex flex-col small:pt-[35px] xsmall:pt-4 pt-2 h-auto">
        <Text className="small:text-[22px] text-[16px] font-normal small:leading-[28.38px] leading-[20px] text-black">
          {item.title}
        </Text>
        <LineItemOptions
          className="text-[16px] font-normal text-black"
          variant={item.variant}
        />
      </Table.Cell>
      {type === "full" && (
        <Table.Cell className="hidden small:table-cell small:pt-[35px] xsmall:pt-4 pt-2">
          <LineItemUnitPrice
            item={item}
            region={region}
            style="tight"
            className="block small:!text-[22px] leading-8 font-normal text-black"
          />
        </Table.Cell>
      )}
      {type === "full" && (
        <Table.Cell className="flex h-auto small:pt-[35px] xsmall:pt-4 pt-2">
          <div className="flex gap-2 items-center w-full flex-wrap 2xsmall:justify-center xsmall:justify-normal">
            <div className="max-w-[119px] w-full small:h-[41.3px] h-auto flex items-center justify-between border border-[#8A8A8A] rounded-[3.5px]">
              <button
                disabled={updating}
                onClick={() => setCount((count) => count - 1)}
                className="cursor-pointer small:py-4 p-2 small:px-[11px] disabled:pointer-events-none"
              >
                <DecreaseIcon />
              </button>
              <p className="sm:text-[25.02px] text-[18px] font-normal leading-[32.28px] text-[#8A8A8A]">
                {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
              </p>
              <button
                disabled={updating}
                onClick={() => setCount((count) => count + 1)}
                className="cursor-pointer small:py-3 p-2 small:px-[11px] disabled:pointer-events-none"
              >
                <IncreaseIcon />
              </button>
            </div>
            <DeleteButton id={item.id} />
          </div>
          <ErrorMessage error={error} />
        </Table.Cell>
      )}

      <Table.Cell className="!pr-0 small:pt-[35px] xsmall:pt-4 pt-2">
        <div
          className={clx("!pr-0 h-full", {
            "flex flex-col items-start justify-start": type === "preview",
          })}
        >
          <LineItemPrice
            item={item}
            region={region}
            style="tight"
            className="small:text-[22px] text-[16px] leading-8 font-normal text-black h-full"
          />
        </div>
      </Table.Cell>
    </Table.Row>
  )
}

export default Item
