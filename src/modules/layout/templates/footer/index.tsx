import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="footer-container max-w-[86rem] mx-auto p-9 border-t border-gray-300">
      <div className="content-container flex flex-col sm:flex-row items-center text-small-regular max-w-[86rem]">
        <LocalizedClientLink
          href="/"
          className="w-auto text-3xl leading-32 sm:leading-none font-normal text-center sm:text-left"
          style={{
            fontFamily: "volkhov",
          }}
        >
          BHShop
        </LocalizedClientLink>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end flex-grow mt-4 sm:mt-0">
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

      <Text
        className="text-center mt-9 txt-compact-small text-sm font-normal tracking-normal leading-6"
        style={{
          fontFamily: "Poppins",
        }}
      >
        Copyright © 2022 Xpro. All Rights Reserved.
      </Text>
    </footer>
  )
}
