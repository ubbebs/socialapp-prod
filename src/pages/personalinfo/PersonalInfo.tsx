import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { child, get, getDatabase, ref } from 'firebase/database'
import { validate } from './personalInfoValidate'
import { personalInfoHandlePostForm } from './personalInfoHandle'
import { app } from '../../../config'

function PersonalInfo() {
  const [nameError, setNameError] = useState(false)
  const [descError, setDescError] = useState(false)
  const [personalInfo, setPersonalInfo] = useState<any>()
  const auth = getAuth(app)
  const db = getDatabase()
  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const uid = auth.currentUser?.uid

  get(child(ref(db), `personalInfo/${uid}`))
    .then((snapshot) => {
      setPersonalInfo(snapshot.val())
    })
    .catch((error) => {
      console.error(error)
    })

  const handlePostForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (nameRef.current?.value && nameRef.current?.value.length < 3) {
      setNameError(true)
    } else if (
      descriptionRef.current?.value &&
      descriptionRef.current?.value.length < 3
    ) {
      setDescError(true)
    } else {
      const { name, desc } = validate(
        nameRef.current?.value,
        descriptionRef.current?.value,
        personalInfo ? personalInfo.name : '',
        personalInfo ? personalInfo.description : ''
      )
      personalInfoHandlePostForm(name, desc, uid, navigate)
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
              ref={nameRef}
            />
            {nameError && (
              <p className="text-center p-1 text-red-500 font-semibold">
                Your name is too short
              </p>
            )}
            <label className="pl-1 text-xs" htmlFor="Login">
              Description
            </label>
            <input
              className="border-b-[1px] border-zinc-400 pb-1 flex-1 focus:outline-none"
              type="text"
              name="nickname"
              id="Nickname"
              ref={descriptionRef}
            />
            {descError && (
              <p className="text-center p-1 text-red-500 font-semibold">
                Your description is too short
              </p>
            )}
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

export { PersonalInfo }
