import { Text } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="w-full border-t border-ui-border-base">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col md:flex-row w-full items-center max-w-[80rem] p-6 gap-y-3">
          <div className="flex-grow sm:flex-grow-0">
            <LocalizedClientLink
              href="/"
              className="w-auto text-2xl md:text-4xl leading-32 sm:leading-none font-normal text-center sm:text-left text-[#484848]"
            >
              BHShop
            </LocalizedClientLink>
          </div>

          <div className="w-full text-lg">
            <div className="flex w-full gap-5 sm:gap-10 md:gap-16 lg:gap-20 md:justify-end items-center justify-center text-xs md:text-sm lg:text-base">
              <LocalizedClientLink className="hover:text-ui-fg-base" href="/">
                Home
              </LocalizedClientLink>

              <LocalizedClientLink
                className="hover:text-ui-fg-base shrink-0"
                href="/contact"
              >
                Contact us
              </LocalizedClientLink>

              <LocalizedClientLink
                className="hover:text-ui-fg-base shrink-0"
                href="/about"
              >
                About us
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
