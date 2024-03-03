import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi text-[14px] md:text-[16px]">
        Need help?
      </Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <LocalizedClientLink
              className="text-[14px] md:text-[16px]"
              href="/contact"
            >
              Contact
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink
              className="text-[14px] md:text-[16px]"
              href="/contact"
            >
              Returns & Exchanges
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
