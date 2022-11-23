import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { ChangeEvent, useRef, useState } from 'react'
import { useSnapshot } from 'valtio'
import { BiTrashAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { stateStore } from '../../../stateStore'
import { divStyle } from '../userinfo/utils/divstyle'
import { addPostHandle } from './addPostHandle'
import { queryAddPost } from './utils/queryAddPost'

const AddPost = () => {
  const auth = getAuth()
  const storage = getStorage()
  const [postImg, setPostImg] = useState<File | null>()
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const state = useSnapshot(stateStore)
  const navigate = useNavigate()
  const { mutate } = useMutation(queryAddPost)

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setPostImg(e.target.files[0])
  }

  const handleDeleteImage = () => {
    setPostImg(null)
  }

  const handleAddPostSubmit = () => {
    const time = Date.now()
    if (postImg) {
      addPostHandle({
        storage,
        userid: auth.currentUser?.uid,
        elem: postImg,
        time,
      })
    }
    mutate({
      description: descriptionRef.current?.value,
      userid: auth.currentUser?.uid,
      time,
    })
    navigate('/')
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 xl:flex-row">
      <div className="w-[400px] h-[400px] relative xl:w-[500px] xl:h-[500px]">
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
      <div className="w-[400px] flex flex-col bg-white xl:w-[300px] xl:h-[500px] p-4 rounded-3xl gap-3">
        <div className="w-full flex items-center gap-4">
          <div
            className="w-[50px] lg:w-[50px] h-[50px] lg:h-[50px] bg-no-repeat bg-center bg-cover rounded-full"
            style={divStyle(state.userData?.photoURL ?? '')}
          />
          <p className="font-semibold text-xl">{state.personalInfo?.name}</p>
        </div>
        <label>Description</label>
        <textarea
          className="focus:outline-none w-full h-full bg-red break-words resize-none p-4 rounded-lg bg-zinc-100"
          maxLength={200}
          ref={descriptionRef}
        />
        <button
          className="rounded-full gradient-linear text-white hover:tracking-[4px] duration-300 text-sm font-bold p-2 uppercase my-5"
          type="submit"
          onClick={handleAddPostSubmit}
        >
          Add post
        </button>
      </div>
    </div>
  )
}

export { AddPost }