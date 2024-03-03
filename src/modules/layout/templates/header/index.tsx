import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import SearchIcon from "@assets/icons/search.svg"
import CartIcon from "@assets/icons/cart.svg"

export default async function Header() {
  return (
    <nav className="border-t border-ui-border-base w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row w-full items-center py-5 px-4 max-w-[80rem]">
          {/* Brand Name (Responsive) */}
          <div className="flex-grow sm:flex-grow-0">
            <LocalizedClientLink
              href="/"
              className="font-volkhov text-[3.25rem] leading-32 text-center"
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
                  <Image src={SearchIcon} alt="search" width={18} height={18} />
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
                className="w-auto rounded-[10px] hover:text-ui-fg-base bg-black text-white text-center px-2 py-4 hover:text-white text-base"
                href="/account"
              >
                Sign in
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
