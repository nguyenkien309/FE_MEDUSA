import { LineItem, Region } from "@medusajs/medusa"
import { Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div>
      <Table>
        <Table.Header className="border-t-0">
          <Table.Row className="text-ui-fg-subtle txt-medium-plus">
            <Table.HeaderCell className="!pl-0 text-[16px] small:text-[22px] font-normal small:leading-[32px] leading-[22px] text-black small:pb-[35px] pb-4">
              Product
            </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell small:pr-[110px] text-[16px] small:text-[22px] font-normal small:leading-[32px] leading-[22px] text-black small:pb-[35px] pb-4">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="text-[16px] small:text-[22px] font-normal small:leading-[32px] leading-[22px] text-black small:pb-[35px] pb-4">
              Quantity
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-[16px] small:text-[22px] font-normal small:leading-[32px] leading-[22px] text-black text-right small:pb-[35px] pb-4">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items && region
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

export default ItemsTemplate
