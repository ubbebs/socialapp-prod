import { useMutation } from '@tanstack/react-query'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { ChangeEvent, useRef, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'
import { FaRegUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { SubmitButton } from './components/SubmitButton'
import { changeAvatarHandler } from './utils/changeAvatarHandler'
import { changeDescriptionHandler } from './utils/changeDescritpionHandler'
import { changeDisplayNameHandler } from './utils/changeDisplayNameHandler'
import { updateAvatar } from './utils/updateAvatar'
import { updateDescription } from './utils/updateDescription'
import { updateDisplayName } from './utils/updateDisplayName'

function EditProfile() {
  const auth = getAuth()
  const storage = getStorage()
  const navigate = useNavigate()
  const { mutate: mutateAvatar } = useMutation(updateAvatar)
  const { mutate: mutateDisplayName } = useMutation(updateDisplayName)
  const { mutate: mutateDescription } = useMutation(updateDescription)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const displayNameRef = useRef<HTMLInputElement>(null)
  const [avatarError, setAvatarError] = useState<boolean>(false)
  const [successAvatar, setSuccessAvatar] = useState<boolean>(false)
  const [displayNameError, setDisplayNameError] = useState<boolean>(false)
  const [successDisplayName, setSuccessDisplayName] = useState<
    boolean | string
  >(false)
  const [successDescription, setSuccessDescription] = useState<boolean>(false)
  const [postImg, setPostImg] = useState<File | null>()
  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setPostImg(e.target.files[0])
  }
  const handleChangeAvatar = (e: React.FormEvent) => {
    e.preventDefault()
    if (postImg && auth.currentUser) {
      setAvatarError(false)
      changeAvatarHandler({
        storage,
        userid: auth.currentUser.uid,
        postImg,
        mutateAvatar,
        setSuccessAvatar,
      })
    } else {
      setAvatarError(true)
    }
  }
  const handleChangeDisplayName = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      displayNameRef.current &&
      /^(\w\s?){4,24}$/g.test(displayNameRef.current.value) &&
      auth.currentUser
    ) {
      setDisplayNameError(false)
      changeDisplayNameHandler({
        displayName: displayNameRef.current.value,
        userid: auth.currentUser.uid,
        mutateDisplayName,
        setSuccessDisplayName,
      })
    } else {
      setSuccessDisplayName(false)
      setDisplayNameError(true)
    }
  }
  const handleChangeDescritpion = (e: React.FormEvent) => {
    e.preventDefault()
    if (auth.currentUser) {
      changeDescriptionHandler({
        description: descriptionRef.current
          ? descriptionRef.current.value
          : null,
        userid: auth.currentUser.uid,
        mutateDescription,
        setSuccessDescription,
      })
    }
  }
  const handleDeleteImage = () => {
    setPostImg(null)
    setSuccessAvatar(false)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center gradient-cross">
      <div className="w-full md:w-[400px] h-full md:h-auto md:min-h-[600px] bg-white box-border p-8 flex flex-col justify-between md:rounded-xl">
        <div className="flex flex-col gap-3 p-5 items-center">
          <button
            type="button"
            className="w-full flex justify-start items-center p-2"
            onClick={() => navigate(-1)}
          >
            <AiOutlineArrowLeft size={13} />
            <p>Back</p>
          </button>
          <h1 className="font-bold text-center text-2xl">Edit Profile</h1>
          <label className="pl-1 text-xs" htmlFor="Login">
            Avatar
          </label>
          <div className="relative w-[150px] aspect-square">
            {postImg ? (
              <>
                <div className="w-full h-full bg-white rounded-3xl flex justify-center absolute">
                  <img
                    src={URL.createObjectURL(postImg)}
                    alt="Upload preview"
                    className="h-auto w-auto max-w-full max-h-full rounded-3xl"
                  />
                </div>
                <button
                  type="button"
                  className="w-full h-full flex flex-col justify-center items-center opacity-0 bg-red-800/50 hover:opacity-100 rounded-3xl absolute duration-300 text-white"
                  onClick={handleDeleteImage}
                >
                  <BiTrashAlt />
                  <p>Delete image</p>
                </button>
              </>
            ) : (
              <div>
                <div className="w-full h-full flex justify-center items-center flex-col border-2 border-black border-dashed rounded-3xl absolute top-0 left-0">
                  <label className="pl-1 text-xs" htmlFor="File">
                    Click here to select image
                  </label>
                </div>
                <input
                  className="focus:outline-none absolute w-full h-full top-0 left-0 opacity-0"
                  type="file"
                  name="file"
                  id="File"
                  accept="image/jpeg"
                  onChange={handleSelectFile}
                />
              </div>
            )}
          </div>
          <SubmitButton func={handleChangeAvatar}>Change image</SubmitButton>
          {successAvatar ? <p>Done!</p> : null}
          {avatarError ? <p>Image error</p> : null}
          <label className="pl-1 text-xs mt-4" htmlFor="Password">
            Display name
          </label>
          <div className="flex w-full items-center bg-zinc-100 gap-2 p-2 rounded-full">
            <FaRegUserCircle
              className="text-zinc-400 w-[27px] text-center"
              size="17px"
            />
            <input
              className="flex-1 focus:outline-none bg-zinc-100"
              type="text"
              name="displayName"
              id="displayName"
              ref={displayNameRef}
            />
          </div>
          <SubmitButton func={handleChangeDisplayName}>
            Change your name
          </SubmitButton>
          {successDisplayName ? (
            <p>Done! Nick changed to {successDisplayName}</p>
          ) : null}
          {displayNameError ? <p>Name error</p> : null}
          <label className="pl-1 text-xs mt-4" htmlFor="Password">
            Description
          </label>
          <textarea
            className="focus:outline-none w-full h-auto bg-red break-words resize-none p-4 rounded-lg bg-zinc-100"
            maxLength={200}
            ref={descriptionRef}
          />
          <SubmitButton func={handleChangeDescritpion}>
            Change description
          </SubmitButton>
          {successDescription ? <p>Description changed</p> : null}
        </div>
        <p className="text-center mt-5x">strusiub</p>
      </div>
    </div>
  )
}

export { EditProfile }
