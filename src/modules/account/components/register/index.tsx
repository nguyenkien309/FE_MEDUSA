"use client"

import { signUp } from "@modules/account/actions"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import AuthFormInput from "@modules/common/components/input/AuthFormInput"
import { useFormState } from "react-dom"
import FormAuth from "../form-auth"
import SignUpImage from "/public/images/account/signup.jpg"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)
  return (
    <div>
      <FormAuth
        title="Create Account"
        imageUrl={SignUpImage.src}
        formAction={formAction}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <AuthFormInput
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <AuthFormInput
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <AuthFormInput
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <AuthFormInput
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
          <AuthFormInput
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            width={110}
          />
          <AuthFormInput
            label="Confirm Password"
            name="confirm_password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <ErrorMessage error={message} />
        <div className="md:px-5 pt-6">
          <SubmitButton className="w-full mb-4">Create Account</SubmitButton>
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
            Sign up with Google
          </a> */}
        </div>

        <span className="text-center text-ui-fg-base text-small-regular mt-2 flex justify-center">
          Already have an account?
          <button
            type="button"
            onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
            className="text-[#5B86E5] ml-1"
          >
            Login
          </button>
        </span>
      </FormAuth>
    </div>
  )
}

export default Register
