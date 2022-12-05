import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { OuterPage } from '../../components/outerpage/OuterPage'
import { LinkTo } from '../../components/outerpage/components/LinkTo'

function Signin() {
  const auth = getAuth()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState(false)

  const handlePostForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailRef.current?.value && passwordRef.current?.value) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then(() => {
          navigate('/')
        })
        .catch((error) => {
          console.log(error)
          setLoginError(true)
        })
    }
  }

  return (
    <OuterPage title="Sign in">
      <>
        <form onSubmit={handlePostForm} className="flex flex-col gap-3">
          <label className="pl-1 text-xs" htmlFor="Login">
            Email
          </label>
          <div className="flex items-center border-b-[1px] border-zinc-400 gap-2 pb-1">
            <FaRegUserCircle
              className="text-zinc-400 w-[27px] text-center shrink-0"
              size="17px"
            />
            <input
              className="flex-1 focus:outline-none"
              type="email"
              name="email"
              id="Login"
              ref={emailRef}
            />
          </div>
          <label className="pl-1 text-xs" htmlFor="Password">
            Password
          </label>
          <div className="flex items-center border-b-[1px] border-zinc-400 gap-2 pb-1">
            <MdLockOutline
              className="text-zinc-400 w-[25px] text-center shrink-0"
              size="20px"
            />
            <input
              className="flex-1 w-auto focus:outline-none"
              type="password"
              name="password"
              id="Password"
              ref={passwordRef}
            />
          </div>
          <p className="text-xs text-right">Forgot password?</p>
          {loginError && (
            <p className="text-center p-1 text-red-500 font-semibold">
              Nieprawidłowy login lub hasło.
            </p>
          )}
          <button
            className="rounded-full gradient-linear text-white hover:tracking-[1px] duration-300 text-sm font-bold p-2 uppercase mt-10 mb-5"
            type="submit"
          >
            Login
          </button>
        </form>
        <LinkTo url="/signup" value="Register here" />
      </>
    </OuterPage>
  )
}

export { Signin }
