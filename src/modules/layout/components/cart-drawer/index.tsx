"use client"

import { formatAmount } from "@lib/util/prices"
import { Cart } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import { updateLineItem } from "@modules/cart/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import DecreaseIcon from "@modules/common/icons/decrease-icon"
import IncreaseIcon from "@modules/common/icons/increase-icon"
import Thumbnail from "@modules/products/components/thumbnail"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useToggleCart } from "./hooks/useToggleCart"
import CancelIcon from "/public/icons/cancel.svg"
import CartIcon from "/public/icons/cart.svg"
interface dataChange {
  quantity?: number
  lineId?: string
}
const CartDrawer = ({
  cart: cartState,
}: {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
}) => {
  const [dataChange, setDataChange] = useState<dataChange>({})
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const changeQuantity = async (quantity: number, lineId: string) => {
    setError(null)
    setUpdating(true)
    const message = await updateLineItem({
      lineId: lineId,
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
  // handle toggle cart popup
  const { openCart, handleToggleCart } = useToggleCart(false)
  // handle disable scroll
  function disableScroll(): void {
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
  }
  // handle enable scroll
  function enableScroll(): void {
    document.body.style.overflow = ""
    document.documentElement.style.overflow = ""
  }

  useEffect(() => {
    if (openCart) {
      disableScroll()
    } else {
      enableScroll()
    }
  }, [openCart])
  useEffect(() => {
    if (dataChange.quantity !== undefined && dataChange.lineId) {
      changeQuantity(dataChange.quantity, dataChange.lineId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataChange.lineId, dataChange.quantity])
  return (
    <div className="max-w-[20px] max-h-[20px] w-full relative">
      {/* btn trigger */}
      <button
        className="hover:text-ui-fg-base text-[1rem] w-full max-w-[20px] relative"
        onClick={handleToggleCart}
      >
        <Image src={CartIcon} alt="cart" width={18} height={20} />
        {cartState && cartState?.items?.length > 0 && (
          <span className="absolute text-center text-[16px] w-6 h-6 left-[17px] bottom-[8px] bg-[#FF0606] text-white rounded-full">
            {cartState?.items?.length}
          </span>
        )}
      </button>
      {/* content */}
      {openCart && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-gray-500 bg-opacity-40 transition-all"
            onClick={handleToggleCart}
          />
          <div
            className="max-w-[741px] w-full h-full fixed right-0 top-0 bg-white z-50 flex flex-col justify-between transition-all"
            style={{
              right: openCart ? "0" : "-100%",
            }}
          >
            {/* header */}
            <div>
              <div className="small:pl-[47px] small:pr-[39px] small:py-[63px] p-6 flex justify-between items-center relative">
                <h1 className="font-normal small:text-[46px] text-[20px] small:leading-[32px] leading-[26px] text-black">
                  Shopping Cart
                </h1>
                <button
                  onClick={handleToggleCart}
                  className="fixed top-[35px] right-10"
                >
                  <Image src={CancelIcon} alt="cart" width={24} height={24} />
                </button>
              </div>
              {/* body */}
              <div className="small:pt-[45px] pt-4 small:pl-[45px] small:pr-[86px] px-4 pb-0">
                {cartState && cartState.items?.length ? (
                  <>
                    <div className="overflow-y-scroll max-h-[680px] h-full flex flex-col no-scrollbar p-px w-full">
                      {cartState.items
                        .sort((a, b) => {
                          return a.created_at > b.created_at ? -1 : 1
                        })
                        .map((item) => (
                          <div key={item.id}>
                            <div className="flex gap-x-6 h-fit">
                              <LocalizedClientLink
                                href={`/products/${item.variant.product.handle}`}
                                className="small:max-w-[168px] small:w-full max-h-[225px] w-fit"
                              >
                                <Thumbnail
                                  thumbnail={item.thumbnail}
                                  size="xsmall"
                                />
                              </LocalizedClientLink>
                              <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-full">
                                <h3 className="text-base-regular overflow-hidden text-ellipsis small:text-[22px] text-[16px] leading-[42px]">
                                  <LocalizedClientLink
                                    href={`/products/${item.variant.product.handle}`}
                                  >
                                    {item.title}
                                  </LocalizedClientLink>
                                </h3>
                                <div className="flex justify-start mt-2 mb-[17px]">
                                  <LineItemPrice
                                    region={cartState.region}
                                    item={item}
                                    style="tight"
                                    className="small:text-[22px] small:leading-[42px] leading-[20px] text-[16px] text-black"
                                  />
                                </div>
                                <div className="small:max-w-[119px] max-w-[80px] w-full small:h-[41.3px] h-auto flex items-center justify-between border bg-[#F1F1F1] border-[#8A8A8A] rounded-[3.5px]">
                                  <button
                                    disabled={updating}
                                    onClick={() =>
                                      setDataChange({
                                        quantity: item.quantity - 1,
                                        lineId: item.id,
                                      })
                                    }
                                    className="cursor-pointer small:py-4 p-1 small:px-[13px] disabled:pointer-events-none"
                                  >
                                    <DecreaseIcon />
                                  </button>
                                  <p className="small:text-[25.02px] text-[18px] font-normal small:leading-[32.28px] leading-[20px] text-[#8A8A8A]">
                                    {item.quantity < 10
                                      ? `0${item.quantity}`
                                      : item.quantity}
                                  </p>
                                  <button
                                    disabled={
                                      updating ||
                                      item.quantity ===
                                        item.variant.inventory_quantity
                                    }
                                    onClick={() => {
                                      if (
                                        +item.quantity ===
                                        +item.variant.inventory_quantity
                                      ) {
                                        return
                                      } else {
                                        setDataChange({
                                          quantity: item.quantity + 1,
                                          lineId: item.id,
                                        })
                                      }
                                    }}
                                    className="cursor-pointer small:py-3 p-1 small:px-[13px] disabled:pointer-events-none"
                                  >
                                    <IncreaseIcon />
                                  </button>
                                </div>
                                <ErrorMessage error={error} />
                              </div>
                            </div>
                            <span className="w-full block h-[1px] border border: 1px solid #00000063 my-[19px]" />
                          </div>
                        ))}
                    </div>
                  </>
                ) : (
                  <div>
                    <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                      <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                        <span>0</span>
                      </div>
                      <span>Your shopping bag is empty.</span>
                      <div>
                        <>
                          <span className="sr-only">
                            Go to all products page
                          </span>
                          <LocalizedClientLink href="/store">
                            <Button onClick={handleToggleCart}>
                              Explore products
                            </Button>
                          </LocalizedClientLink>
                        </>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* footer */}
            <div className="flex flex-col items-start small:pt-[45px] small:pl-[45px] small:pr-[86px] small:pb-[30px] px-4 py-4">
              {cartState && cartState.items?.length > 0 && (
                <div className="flex flex-col text-small-regular pr-0 w-full small:mb-[29px] mb-4">
                  <div className="flex items-center justify-between small:text-[22px] text-[16px] font-normal small:leading-[32px] leading-[22px] font-volkhov">
                    <span className="text-ui-fg-base font-semibold">
                      Subtotal
                    </span>
                    <span className="text-large-semi small:text-[22px] text-[16px]">
                      {formatAmount({
                        amount: cartState?.subtotal || 0,
                        region: cartState?.region,
                        includeTaxes: false,
                      })}
                    </span>
                  </div>
                </div>
              )}
              {cartState && cartState.items?.length > 0 && (
                <LocalizedClientLink
                  href="/checkout?step=delivery"
                  passHref
                  className="w-full mb-[14px] pr-0 !ml-0 font-volkhov"
                >
                  <Button
                    onClick={handleToggleCart}
                    className="w-full text-[16px] leading-4 small:h-[66px] h-[50px] font-normal text-white font-volkhov"
                    size="xlarge"
                  >
                    Checkout
                  </Button>
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                href="/cart"
                passHref
                className="w-full small:pr-[41px] pr-0 !ml-0 font-volkhov"
              >
                <button
                  onClick={handleToggleCart}
                  className="w-full bg-transparent underline text-black small:text-[22px] text-[16px] font-volkhov small:leading-[32px] leading-[22px]"
                >
                  View cart
                </button>
              </LocalizedClientLink>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartDrawer
