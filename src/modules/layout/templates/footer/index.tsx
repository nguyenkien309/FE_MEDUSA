import { Text } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="w-full border-t border-ui-border-base min-w-[330px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row w-full items-center py-5 px-4 max-w-[80rem]">
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
              className="flex w-full gap-20 items-center justify-center md:justify-end ml-2"
              style={{
                fontFamily: "Poppins",
              }}
            >
              <LocalizedClientLink
                className="hover:text-ui-fg-base text-[1rem] mb-2 sm:mb-0 sm:mr-10"
                href="/"
              >
                Home
              </LocalizedClientLink>

              <LocalizedClientLink
                className="hover:text-ui-fg-base text-[1rem] mb-2 sm:mb-0 sm:mr-10"
                href="/contact"
              >
                Contact us
              </LocalizedClientLink>

              <LocalizedClientLink
                className="hover:text-ui-fg-base text-[1rem] mb-2 sm:mb-0"
                href="/about"
              >
                About us
              </LocalizedClientLink>
            </div>
          </div>
        </div>
        <Text
          className="text-center mt-9 txt-compact-small text-sm font-normal tracking-normal leading-6"
          style={{
            fontFamily: "Poppins",
          }}
        >
          Copyright © 2022 Xpro. All Rights Reserved.
        </Text>
      </div>
    </footer>
  )
}
