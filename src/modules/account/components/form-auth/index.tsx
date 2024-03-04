import { logCustomerIn, signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import Image from "next/image"
import { ReactNode } from "react"
import { useFormState } from "react-dom"

type Props = {
  title: string
  imageUrl: string
  children: ReactNode
}

const FormAuth = ({ title, imageUrl, children }: Props) => {
  const [message, formAction] = useFormState(
    title === "Create Account" ? signUp : logCustomerIn,
    null
  )
  return (
    <form className="w-full p-5" action={formAction}>
      <div className="border rounded-r-md flex md:justify-center">
        <div className="hidden lg:block">
          <Image
            alt="sign in"
            width={450}
            src={imageUrl}
            height={700}
            style={{ height: "100%" }}
          />
        </div>
        <div className="px-8 py-12 relative lg:min-w-[460px]">
          <h3 className="font-medium text-3xl mb-6">BHShop</h3>
          <h5 className="font-medium mb-3 text-xl">{title}</h5>
          <div className="mb-8">
            {children}
            <ErrorMessage error={message} />
          </div>
          <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs w-full text-center">
            BHShop Term & Conditions
          </span>
        </div>
      </div>
    </form>
  )
}

export default FormAuth
