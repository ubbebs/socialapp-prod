import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { OuterPage } from '../../components/outerpage/OuterPage'
import { LinkTo } from '../../components/outerpage/components/LinkTo'
import { signinExecute } from './utils/signinExecute'
import { SubmitButton } from '../../components/outerpage/components/SubmitButton'
import { InputDiv } from '../../components/outerpage/components/InputDiv'
import { Title } from '../../components/outerpage/components/Title'

function Signin() {
  const auth = getAuth()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState(false)

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
        <Title title="Sign In" />
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
        <LinkTo url="/signup" value="Register here" />
      </>
    </OuterPage>
  )
}

export { Signin }
