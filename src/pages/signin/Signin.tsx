import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { stateStore } from '../../stateStore'

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
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential
          stateStore.userid = user.uid
          console.log(user.uid, stateStore.userid)
          navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setLoginError(true)
          // ..
        })
    }
  }
  // w-[400px] bg-white h-[600px] p-8 flex flex-col justify-between rounded-xl

  return (
    <div className="w-screen h-screen md:min-h-screen flex justify-center items-end md:items-center gradient-cross">
      <div className="w-full md:w-[400px] h-full md:h-[600px] bg-white box-border p-8 flex flex-col justify-between md:rounded-xl">
        <div className="flex flex-col gap-5 p-5">
          <h1 className="font-bold text-center text-2xl">Sign In</h1>
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
              className="rounded-full gradient-linear text-white hover:tracking-[4px] duration-300 text-sm font-bold p-2 uppercase mt-10 mb-5"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center">
            <Link to="/signup">Register here</Link>
          </p>
        </div>
        <div>
          <p className="text-center">strusiub</p>
        </div>
      </div>
    </div>
  )
}

export { Signin }
