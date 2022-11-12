import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { editAvatarHandle } from './editAvatarHandle'

function EditAvatar() {
  const auth = getAuth()
  const storage = getStorage()
  const avatarRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const handlePostForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      auth.currentUser &&
      avatarRef.current?.files?.length !== 0 &&
      avatarRef.current?.files
    ) {
      editAvatarHandle(
        storage,
        auth.currentUser,
        avatarRef.current.files,
        navigate
      )
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
              className="flex-1 focus:outline-none"
              type="file"
              name="file"
              id="File"
              accept="image/jpeg"
              ref={avatarRef}
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

export { EditAvatar }
