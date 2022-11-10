import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, updateProfile } from 'firebase/auth'
import { HiOutlineUserCircle } from 'react-icons/hi'

function EditProfile() {
  const auth = getAuth()
  const displayNameRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [editError, setEditError] = useState(false)

  const handlePostForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: displayNameRef.current?.value,
      })
        .then(() => {
          console.log('Success')
          navigate('/editavatar')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setEditError(true)
          // ..
        })
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center gradient-cross">
      <div className="w-full md:w-[400px] h-full md:h-[600px] bg-white box-border p-8 flex flex-col justify-between md:rounded-xl">
        <div className="flex flex-col gap-5 p-5">
          <h1 className="font-bold text-center text-2xl">Set your profile</h1>
          <form
            onSubmit={handlePostForm}
            className="flex flex-col items-center gap-3 w-full"
          >
            <HiOutlineUserCircle
              className="text-zinc-400 w-[100px] text-center"
              size="100px"
            />
            <label className="pl-1 text-xs" htmlFor="Login">
              Your name
            </label>
            <input
              className="border-b-[1px] border-zinc-400 pb-1 flex-1 focus:outline-none"
              type="text"
              name="nickname"
              id="Nickname"
              ref={displayNameRef}
            />
            <button
              className="rounded-full w-full gradient-linear text-white hover:tracking-[4px] duration-300 text-sm font-bold p-2 uppercase mt-10 mb-5"
              type="submit"
            >
              Confirm
            </button>
          </form>
        </div>
        <div>
          <p className="text-center">strusiub</p>
        </div>
      </div>
    </div>
  )
}

export { EditProfile }
