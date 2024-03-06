import { LineItem, Region } from "@medusajs/medusa"
import { Table } from "@medusajs/ui"

import Divider from "@modules/common/components/divider"
import Item from "@modules/order/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsProps = {
  items: LineItem[]
  region: Region
}

const Items = ({ items, region }: ItemsProps) => {
  return (
    <div className="flex flex-col">
      <Divider className="!mb-0" />
      <Table>
        <Table.Header>
          <Table.Row className="bg-[#F5F5F5]">
            <Table.HeaderCell
              className="text-left"
              colSpan={2}
              style={{ padding: 0 }}
            >
              Product
            </Table.HeaderCell>
            <Table.HeaderCell className="text-center">Price</Table.HeaderCell>
            <Table.HeaderCell className="text-center">
              Quantity
            </Table.HeaderCell>
            <Table.HeaderCell
              className="text-center"
              style={{ paddingRight: "0px" }}
            >
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items?.length && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} region={region} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Items
