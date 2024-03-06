import { formatAmount } from "@lib/util/prices"
import { LineItem, Region } from "@medusajs/medusa"
import { Table, Text } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"

import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import Thumbnail from "@modules/products/components/thumbnail"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  return (
    <>
      <Table.Row className="w-full bg-[#F5F5F5]">
        <Table.Cell className="!pl-0 p-4 w-24">
          <div className="flex w-16">
            <Thumbnail
              thumbnail={item.thumbnail}
              size="square"
              className="w-[58px] h-[66px]"
            />
          </div>
        </Table.Cell>

        <Table.Cell className="text-left max-w-[50px]">
          <Text className="txt-medium-plus text-ui-fg-base">{item.title}</Text>
        </Table.Cell>
        <Table.Cell className="text-center">
          <Text>
            {formatAmount({
              amount: item.unit_price || 0,
              region: region,
              includeTaxes: false,
            })}
          </Text>
        </Table.Cell>
        <Table.Cell className="text-center">
          <Text>{item.quantity} </Text>
        </Table.Cell>
        <Table.Cell className="text-center" style={{ paddingRight: "0px" }}>
          {formatAmount({
            amount: item.total || 0,
            region: region,
            includeTaxes: false,
          })}
        </Table.Cell>
      </Table.Row>
    </>
  )
}

export default Item
