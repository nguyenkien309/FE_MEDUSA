import { getCategoriesList } from "@lib/data"
import { Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function FilterProducts() {
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <div className="space-y-3">
      <Text className="text-xl" weight={"plus"}>Filter by</Text>
      <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3 ml-2">
        {product_categories?.length > 0 && (
          <div className="flex flex-col gap-y-2">
            <Text size="large">Categories</Text>
            <ul className="grid grid-cols-1 ml-3">
              {product_categories?.slice(0, 6).map((c) => {
                if (c.parent_category) {
                  return
                }
                const children =
                  c.category_children?.map((child) => ({
                    name: child.name,
                    handle: child.handle,
                    id: child.id,
                  })) || null
                return (
                  <li
                    className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                    key={c.id}
                  >
                    <LocalizedClientLink
                      className={clx(
                        "hover:text-ui-fg-base",
                        children && "txt-small"
                      )}
                      href={`/categories/${c.handle}`}
                    >
                      {c.name}
                    </LocalizedClientLink>
                    {children && (
                      <ul className="grid grid-cols-1 ml-3">
                        {children &&
                          children.map((child) => (
                            <li key={child.id}>
                              <LocalizedClientLink
                                className="hover:text-ui-fg-base"
                                href={`/categories/${child.handle}`}
                              >
                                {child.name}
                              </LocalizedClientLink>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
