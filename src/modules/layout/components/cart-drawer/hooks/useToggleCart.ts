import { useState } from "react"

export function useToggleCart(initialState: boolean) {
  const [openCart, setOpenCart] = useState<boolean>(initialState)
  const handleToggleCart = () => {
    setOpenCart((prev) => !prev)
  }
  return { openCart, handleToggleCart }
}
