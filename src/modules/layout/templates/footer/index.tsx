import { Text } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="w-full border-t border-ui-border-base min-w-[400px]">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col md:flex-row w-full items-center max-w-[80rem] p-6">
          <div className="flex-grow sm:flex-grow-0">
            <LocalizedClientLink
              href="/"
              className="w-auto text-3xl leading-32 sm:leading-none font-normal text-center sm:text-left text-[#484848]"
              style={{
                fontFamily: "volkhov",
              }}
            >
              BHShop
            </LocalizedClientLink>
          </div>

          <div className="w-full text-lg">
            <div
              className="flex w-full gap-20 items-center justify-center md:justify-end"
              style={{
                fontFamily: "Poppins",
              }}
            >
              <LocalizedClientLink
                className="hover:text-ui-fg-base text-[1rem]"
                href="/"
              >
                Home
              </LocalizedClientLink>

              <LocalizedClientLink
                className="hover:text-ui-fg-base text-[1rem]"
                href="/contact"
              >
                Contact us
              </LocalizedClientLink>

              <LocalizedClientLink
                className="hover:text-ui-fg-base text-[1rem]"
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
