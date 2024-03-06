import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { Customer } from "@medusajs/medusa"

interface AccountLayoutProps {
  customer: Omit<Customer, "password_hash"> | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12">
      <div className="flex-1 content-container h-full min-w-[100px] w-full bg-white flex flex-col">
        <div className="grid grid-cols-1  small:grid-cols-[240px_1fr] py-12 max-w-[81.25rem]">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
          <div>
            <h3 className="text-xl-semi mb-4">Got questions?</h3>
            <span className="flex txt-medium">
              You can find frequently asked question and answer on out&emsp;
              <UnderlineLink href="/contact">Contact us page</UnderlineLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
