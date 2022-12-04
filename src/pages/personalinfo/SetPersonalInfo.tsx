import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { stateStore } from '../../stateStore'
import { app } from '../../../config'
import { setAvatarHandle } from './utils/setAvatarHandle'
import { useGetPersonalInfo } from '../homepage/utils/getPersonalInfo'
import { Loader } from '../../components/loader/Loader'
import { setPersonalInfoHandle } from './utils/setPersonalInfoHandle'

function SetPersonalInfo() {
  const auth = getAuth(app)
  const navigate = useNavigate()
  const storage = getStorage()
  const { mutate } = useMutation(setPersonalInfoHandle)
  const accountNameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const displayNameRef = useRef<HTMLInputElement>(null)
  const [postImg, setPostImg] = useState<File | null>(null)
  const [accountNameError, setAccountNameError] = useState<boolean>(false)
  const [displayNameError, setDisplayNameError] = useState<boolean>(false)
  const [postImgError, setPostImgError] = useState<boolean>(false)

  const { data: dataPersonalInfo, isLoading: isLoadingPersonalInfo } =
    useGetPersonalInfo(stateStore.userid || '')

  useEffect(() => {
    if (!isLoadingPersonalInfo && dataPersonalInfo.accountName) navigate('/')
  }, [dataPersonalInfo, isLoadingPersonalInfo, navigate])

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setPostImg(e.target.files[0])
  }

  const handlePostPersonalInfo = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      auth.currentUser &&
      accountNameRef.current &&
      displayNameRef.current &&
      /^\w{4,16}$/g.test(accountNameRef.current.value) &&
      /^(\w\s?){4,24}$/g.test(displayNameRef.current.value) &&
      postImg
    ) {
      const timestamp = (Date.now() / 1000).toString()
      setAvatarHandle(storage, auth.currentUser.uid, postImg, timestamp).then(
        () => {
          mutate(
            {
              accountName: accountNameRef.current?.value || '',
              displayName: displayNameRef.current?.value || '',
              description: descriptionRef.current?.value || '',
              timestamp,
              uid: auth.currentUser?.uid || '',
            },
            {
              onSuccess: () => {
                navigate('/')
              },
            }
          )
        }
      )
    }
    if (
      !accountNameRef.current ||
      !/^\w{4,16}$/g.test(accountNameRef.current.value)
    ) {
      setAccountNameError(true)
    } else {
      setAccountNameError(false)
    }
    if (
      !displayNameRef.current ||
      !/^(\w\s?){4,24}$/gs.test(displayNameRef.current.value)
    ) {
      setDisplayNameError(true)
    } else {
      setDisplayNameError(false)
    }
    if (!postImg) {
      setPostImgError(true)
    } else {
      setPostImgError(false)
    }
  }

  return !isLoadingPersonalInfo ? (
    <div className="w-screen h-screen flex justify-center items-center gradient-cross">
      <div className="w-full md:w-[400px] min-h-full md:min-h-[600px] bg-white box-border p-8 flex flex-col justify-between md:rounded-xl">
        <div className="flex flex-col gap-5 p-5">
          <h1 className="font-bold text-center text-2xl">Set your profile</h1>
          <form className="flex flex-col items-center gap-4 w-full">
            <label className="w-full pl-1 text-xs" htmlFor="File">
              Profile picture:
            </label>
            <input
              className="pb-1 flex-1 focus:outline-none"
              type="file"
              name="file"
              id="File"
              accept="image/jpeg"
              onChange={handleSelectFile}
            />
            {postImgError ? (
              <p className="text-xs text-red-500">
                No files uploaded. Upload profile picture
              </p>
            ) : null}
            <label className="w-full pl-1 text-xs" htmlFor="Login">
              Display name:
            </label>
            <input
              className="border-b-[1px] border-zinc-400 pb-1 flex-1 focus:outline-none"
              type="text"
              name="displaynickname"
              id="DisplayNickname"
              ref={displayNameRef}
            />
            {displayNameError ? (
              <p className="text-xs text-red-500">
                Invalid display name (4-24 chars)
              </p>
            ) : null}
            <label className="w-full pl-1 text-xs" htmlFor="Login">
              Account name:
            </label>
            <input
              className="border-b-[1px] border-zinc-400 pb-1 flex-1 focus:outline-none"
              type="text"
              name="accountname"
              id="Accountname"
              ref={accountNameRef}
            />
            {accountNameError ? (
              <p className="text-xs text-red-500">
                Invalid account name (4-16 chars, no spaces)
              </p>
            ) : null}
            <label className="w-full pl-1 text-xs" htmlFor="Login">
              Description:
            </label>
            <input
              className="border-b-[1px] border-zinc-400 pb-1 flex-1 focus:outline-none"
              type="text"
              name="description"
              id="Description"
              ref={descriptionRef}
            />
            <button
              className="rounded-full w-full gradient-linear text-white hover:tracking-[1px] duration-300 text-sm font-bold p-2 uppercase mt-10 mb-5"
              type="submit"
              onClick={handlePostPersonalInfo}
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
  ) : (
    <Loader />
  )
}

export { SetPersonalInfo }
