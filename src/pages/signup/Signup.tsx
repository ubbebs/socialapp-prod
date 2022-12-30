import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { getAuth } from 'firebase/auth'
import { OuterPage } from '../../layouts/outerpagewrapper/OuterPageWrapper'
import { signupExecute } from '../../features/account/utils/signupExecute'
import { InputDiv } from '../../components/inputs/InputDiv'
import { LinkText } from '../../components/text/LinkText'
import { SubmitButton } from '../../components/buttons/SubmitButton'
import { HeaderText } from '../../components/text/HeaderText'
import { ErrorText } from '../../components/text/ErrorText'

export const Signup = () => {
  const auth = getAuth()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [registerError, setRegisterError] = useState<boolean | string>(false)
  const signupFunc = (e: React.FormEvent) => {
    signupExecute({
      e,
      auth,
      emailRef,
      passwordRef,
      passwordConfirmRef,
      navigate,
      setState: setRegisterError,
    })
  }

  return (
    <OuterPage>
      <>
        <HeaderText text="Sign Up" />
        <InputDiv
          icon={
            <FaRegUserCircle
              className="text-zinc-400 w-[27px] text-center"
              size="17px"
            />
          }
          valueRef={emailRef}
          title="Email"
          type="email"
          name="Email"
        />
        <InputDiv
          icon={
            <MdLockOutline
              className="text-zinc-400 w-[25px] text-center"
              size="20px"
            />
          }
          valueRef={passwordRef}
          title="Password"
          type="password"
          name="Password"
        />
        <InputDiv
          icon={
            <MdLockOutline
              className="text-zinc-400 w-[25px] text-center"
              size="20px"
            />
          }
          valueRef={passwordConfirmRef}
          title="Confirm Password"
          type="password"
          name="PasswordConfirm"
        />
        {registerError && <ErrorText text={registerError} />}
        <SubmitButton func={signupFunc} value="Register" />
        <LinkText url="/signin" text="Login here" />
      </>
    </OuterPage>
  )
}
