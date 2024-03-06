import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import SearchIcon from "/public/icons/search.svg"
import AccountIcon from "/public/icons/account.svg"
import CartIcon from "/public/icons/cart.svg"

import { getCustomer } from "@lib/data"

export default async function Nav() {
  const customer = await getCustomer()
  return (
    <nav className="border-t border-ui-border-base w-full min-w-[330px]">
      <div className="flex flex-col justify-center items-center">
        {!customer ? (
          <div className="flex flex-row w-full items-center py-5 px-4 max-w-[80rem]">
            <div className="flex-grow sm:flex-grow-0">
              <LocalizedClientLink
                href="/"
                className="font-volkhov text-[3.25rem] leading-32 text-center"
                style={{ fontFamily: "volkhov" }}
              >
                BHShop
              </LocalizedClientLink>
            </div>

            <div className="flex items-center justify-end flex-grow">
              <div className="hidden sm:flex items-center justify-center gap-20 shrink-0">
                <LocalizedClientLink
                  className="hidden lg:flex hover:text-ui-fg-base text-[1rem]"
                  href="/account"
                >
                  Home
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="hidden lg:flex hover:text-ui-fg-base text-[1rem]"
                  href="/store"
                >
                  Store
                </LocalizedClientLink>
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <LocalizedClientLink
                    className="hidden lg:flex w-[6.25rem] h-[3.125rem] hover:text-ui-fg-base items-center text-center justify-center rounded-md bg-center bg-cover"
                    href="/search"
                    scroll={false}
                    style={{ backgroundImage: `url(${SearchIcon})` }}
                  >
                    <Image
                      src={SearchIcon}
                      alt="search"
                      width={18}
                      height={18}
                    />
                  </LocalizedClientLink>
                )}
                <LocalizedClientLink
                  className="hover:text-ui-fg-base text-[1rem] shrink-0"
                  href="/cart"
                >
                  <Image src={CartIcon} alt="cart" width={18} height={20} />
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="hover:text-ui-fg-base text-[1rem] shrink-0"
                  href="/account"
                >
                  Sign in
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="w-full rounded-[10px] hover:text-ui-fg-base bg-black text-white text-center px-2 py-4 hover:text-white text-base"
                  href="/account"
                >
                  Sign Up
                </LocalizedClientLink>
              </div>

              <div className="sm:hidden flex items-center justify-end gap-5 w-full">
                <LocalizedClientLink
                  className="hover:text-ui-fg-base text-[1rem] "
                  href="/cart"
                >
                  <Image src={CartIcon} alt="cart" width={18} height={20} />
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="w-full rounded-[10px] hover:text-ui-fg-base bg-black text-white text-center px-2 py-4 hover:text-white text-base"
                  href="/account"
                >
                  Sign in
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full max-w-[80rem]">
            <div className="flex justify-start w-full text-center">
              <LocalizedClientLink
                href="/"
                className="font-volkhov text-[3.25rem] leading-32 text-center"
                style={{ fontFamily: "volkhov" }}
              >
                BHShop
              </LocalizedClientLink>
            </div>

            <div className="hidden md:flex flex-row text-center align-middle items-center justify-center gap-20 shrink-0">
              <LocalizedClientLink
                className="flex hover:text-ui-fg-base text-[1rem]"
                href="/account"
              >
                Home
              </LocalizedClientLink>
              <LocalizedClientLink
                className="flex hover:text-ui-fg-base text-[1rem]"
                href="/store"
              >
                Store
              </LocalizedClientLink>
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="flex w-[6.25rem] h-[3.125rem] hover:text-ui-fg-base items-center text-center justify-center rounded-md bg-center bg-cover"
                  href="/search"
                  scroll={false}
                >
                  <Image src={SearchIcon} alt="search" width={18} height={18} />
                </LocalizedClientLink>
              )}
            </div>

            <div className="flex items-center justify-end gap-5 w-full min-w[100px]">
              <LocalizedClientLink
                className="hover:text-ui-fg-base text-[1rem] "
                href="/cart"
              >
                <Image src={CartIcon} alt="cart" width={18} height={20} />
              </LocalizedClientLink>
              <LocalizedClientLink
                className="flex w-[6.25rem] h-[3.125rem] hover:text-ui-fg-base items-center text-center justify-center rounded-md bg-center bg-cover"
                href="/account"
                scroll={false}
              >
                <Image src={AccountIcon} alt="search" width={18} height={18} />
              </LocalizedClientLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
