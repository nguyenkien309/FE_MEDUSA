import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import SearchIcon from "/public/icons/search.svg"

import { getCustomer } from "@lib/data"
import CartButton from "@modules/layout/components/cart-button"
import AccountDropDown from "./components/account"
import NavMobile from "./components/nav-mobile"

export default async function Nav() {
  const customer = await getCustomer()

  return (
    <nav className="border-t border-ui-border-base w-full max-w-[80rem] content-container py-6">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-row w-full items-center py-5 ">
          <div className="flex-grow sm:flex-grow-0 flex-row flex">
            <NavMobile />
            <LocalizedClientLink
              href="/"
              className="font-volkhov text-2xl md:text-4xl leading-32 text-center"
            >
              BHShop
            </LocalizedClientLink>
          </div>

          <div className="flex items-center justify-end flex-grow">
            <div className="flex items-center justify-center gap-6 md:gap-20 shrink-0">
              <LocalizedClientLink
                className="hidden lg:flex hover:text-ui-fg-base text-[1rem]"
                href="/"
              >
                Home
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hidden lg:flex hover:text-ui-fg-base text-[1rem]"
                href="/store"
              >
                Store
              </LocalizedClientLink>
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hidden lg:flex w-[6.25rem] h-[3.125rem] hover:text-ui-fg-base items-center text-center justify-center rounded-md bg-center bg-cover"
                  href="/search"
                  scroll={false}
                >
                  <Image src={SearchIcon} alt="search" width={18} height={18} />
                </LocalizedClientLink>
              )}
              <CartButton />

              {!customer && (
                <LocalizedClientLink href="/account">
                  <button className="w-full rounded-[10px] hover:text-ui-fg-base bg-black text-white text-center px-4 py-3 hover:text-white text-base whitespace-nowrap">
                    Sign in
                  </button>
                </LocalizedClientLink>
              )}
              {customer && <AccountDropDown />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
