"use client"
import React from "react"
import AccountIcon from "/public/icons/account.svg"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { DropdownMenu, Text } from "@medusajs/ui"
import {
  ArrowRightOnRectangle,
  ShoppingBag,
  User,
  Pencil,
} from "@medusajs/icons"
import { signOut } from "@modules/account/actions"

const AccountDropDown = () => {
  const handleLogout = async () => {
    await signOut()
  }

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Image
          src={AccountIcon}
          alt="Account"
          width={18}
          height={20}
          className="relative"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="absolute max-w-[100px] left-[-12.5rem]">
        <LocalizedClientLink
          href="/account/profile"
          passHref
          className="hover:text-ui-fg-interactive-hover text-inherit  w-10"
        >
          <DropdownMenu.Item>
            <User /> &emsp; My Profile
          </DropdownMenu.Item>
        </LocalizedClientLink>
        <LocalizedClientLink
          href="/account/addresses"
          passHref
          className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
        >
          <DropdownMenu.Item>
            <Pencil /> &emsp; Addresses
          </DropdownMenu.Item>
        </LocalizedClientLink>
        <LocalizedClientLink
          href="/account/orders"
          passHref
          className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
        >
          <DropdownMenu.Item>
            <ShoppingBag /> &emsp; Order
          </DropdownMenu.Item>
        </LocalizedClientLink>
        <Text className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">
          <DropdownMenu.Item onClick={handleLogout}>
            <ArrowRightOnRectangle /> &emsp; Log out
          </DropdownMenu.Item>
        </Text>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default AccountDropDown
