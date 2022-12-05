import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { getAuth } from 'firebase/auth'
import { OuterPage } from '../../components/outerpage/OuterPage'
import { signupExecute } from './utils/signupExecute'
import InputDiv from '../../components/outerpage/components/InputDiv'
import { LinkTo } from '../../components/outerpage/components/LinkTo'
import { SubmitButton } from '../../components/outerpage/components/SubmitButton'

function Signup() {
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
    <OuterPage title="Sign Up">
      <>
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
        <SubmitButton func={signupFunc} value="Register" />
        {registerError && (
          <p className="text-semibold text-red-500">{registerError}</p>
        )}
        <LinkTo url="/signin" value="Login here" />
      </>
    </OuterPage>
  )
}

export { Signup }
