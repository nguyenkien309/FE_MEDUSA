import { Spinner } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import { useState } from "react"

import { deleteLineItem } from "@modules/cart/actions"
import TrashIcon from "@modules/common/icons/trash-icon"

const DeleteButton = ({
  id,
  children,
  className,
}: {
  id: string
  children?: React.ReactNode
  className?: string
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    await deleteLineItem(id).catch((err) => {
      setIsDeleting(false)
    })
  }

  return (
    <div
      className={clx(
        "flex items-center justify-between text-small-regular",
        className
      )}
    >
      <button
        className="flex gap-x-1 text-ui-fg-subtle hover:text-ui-fg-base cursor-pointer"
        onClick={() => handleDelete(id)}
      >
        {isDeleting ? (
          <Spinner className="animate-spin" />
        ) : (
          <>
            <TrashIcon className="hidden sc600:block" />
            <p className="sc600:hidden text-[14px] font-normal leading-6 text-red-500 underline decoration-solid">
              Delete
            </p>
          </>
        )}
        <span>{children}</span>
      </button>
    </div>
  )
}

export default DeleteButton
