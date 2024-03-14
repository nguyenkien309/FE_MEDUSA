import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import AuthFormInput from "@modules/common/components/input/AuthFormInput"
import FormAuth from "../form-auth"
import SignInImage from "/public/images/account/signin.jpg"
import { logCustomerIn } from "@modules/account/actions"
import { useFormState } from "react-dom"
import ErrorMessage from "@modules/checkout/components/error-message"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)
  return (
    <div>
      <FormAuth
        title="Sign In to BHShop"
        imageUrl={SignInImage.src}
        formAction={formAction}
      >
        <div className="space-y-3">
          <AuthFormInput
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            wrapperClass="md:w-96"
          />
          <AuthFormInput
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            wrapperClass="w-auto md:w-96"
          />
          {/* <div className="flex justify-between text-xs pb-4">
            <div className="flex items-center gap-x-2">
              <input type="checkbox" />
              <span className="font-medium mt-[1px]">Remember me</span>
            </div>
            <button className="text-[#5B86E5]">Forgot password</button>
          </div> */}
          <ErrorMessage error={message} />
          <div className="md:px-5 pt-5">
            <SubmitButton className="w-full mb-4">Sign in</SubmitButton>
            {/* <a
              type="button"
              href="#"
              className="border border-[#5B86E5] rounded-lg text-xs w-full flex justify-center gap-x-2 py-2.5 font-medium"
            >
              <Image
                width={15}
                layout="response"
                src={GoogleIcon}
                alt={`Google icon`}
              />
              Sign in with Google
            </a> */}
          </div>
          <span className="text-center text-ui-fg-base text-small-regular mt-2 flex justify-center">
            Not registered yet?
            <button
              type="button"
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
              className="text-[#5B86E5] ml-1"
            >
              Sign up
            </button>
          </span>
        </div>
      </FormAuth>
    </div>
  )
}

export default Login
