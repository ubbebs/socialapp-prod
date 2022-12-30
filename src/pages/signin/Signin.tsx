import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { OuterPage } from '../../layouts/outerpagewrapper/OuterPageWrapper'
import { LinkText } from '../../components/text/LinkText'
import { signinExecute } from '../../features/account/utils/signinExecute'
import { SubmitButton } from '../../components/buttons/SubmitButton'
import { InputDiv } from '../../components/inputs/InputDiv'
import { HeaderText } from '../../components/text/HeaderText'

export const Signin = () => {
  const auth = getAuth()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState<boolean>(false)
  const signinFunc = (e: React.FormEvent) => {
    signinExecute({
      e,
      auth,
      emailRef,
      passwordRef,
      navigate,
      setState: setLoginError,
    })
  }

  return (
    <OuterPage>
      <>
        <HeaderText text="Sign In" />
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
        <SubmitButton func={signinFunc} value="Login" />
        {loginError && (
          <p className="text-center p-1 text-red-500 font-semibold">
            Nieprawidłowy login lub hasło.
          </p>
        )}
        <LinkText url="/signup" text="Register here" />
      </>
    </OuterPage>
  )
}
