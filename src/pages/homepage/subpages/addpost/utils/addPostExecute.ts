import { UseMutateFunction } from '@tanstack/react-query'
import { FirebaseStorage } from 'firebase/storage'
import React from 'react'
import { addPostStorage } from './addPostStorage'
import { PostAddPostType } from './postAddPost'

type AddPostExecuteType = {
  e: React.FormEvent
  userid: string | null
  postImg: File | null
  storage: FirebaseStorage
  mutate: UseMutateFunction<void, unknown, PostAddPostType, unknown>
  descriptionRef: React.RefObject<HTMLTextAreaElement>
  setErrorImg: React.Dispatch<React.SetStateAction<boolean>>
  setSuccessMutation: React.Dispatch<React.SetStateAction<boolean>>
}

const addPostExecute = (args: AddPostExecuteType) => {
  const {
    e,
    userid,
    postImg,
    storage,
    mutate,
    descriptionRef,
    setErrorImg,
    setSuccessMutation,
  } = args
  e.preventDefault()
  if (!postImg) {
    setErrorImg(true)
  } else {
    const time = Date.now()
    if (postImg) {
      addPostStorage({
        storage,
        userid,
        elem: postImg,
        time,
      }).then(() => {
        mutate(
          {
            description: descriptionRef.current?.value,
            userid,
            time,
          },
          {
            onSuccess: () => {
              setSuccessMutation(true)
            },
          }
        )
      })
    }
  }
}

export { addPostExecute }
