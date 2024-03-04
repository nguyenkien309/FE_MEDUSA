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
       <div>{customer && <AccountNav customer={customer} />}</div>
      <div className="flex-1 h-full mx-auto bg-white flex flex-col">
          <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

export default AccountLayout
