import { UseMutateFunction } from '@tanstack/react-query'
import { FirebaseStorage } from 'firebase/storage'
import React from 'react'
import { addPostStorage } from './addPostStorage'
import { PostAddPostType } from './postAddPost'

export type SuccessMutationType = {
  ok: boolean
  error: string
}

type AddPostExecuteType = {
  e: React.FormEvent
  userid: string | null
  postImg: File | null
  storage: FirebaseStorage
  mutate: UseMutateFunction<void, unknown, PostAddPostType, unknown>
  descriptionRef: React.RefObject<HTMLTextAreaElement>
  setSuccessMutation: React.Dispatch<React.SetStateAction<SuccessMutationType>>
}

const addPostExecute = (args: AddPostExecuteType) => {
  const {
    e,
    userid,
    postImg,
    storage,
    mutate,
    descriptionRef,
    setSuccessMutation,
  } = args
  e.preventDefault()
  if (!postImg) {
    setSuccessMutation({
      ok: false,
      error: 'No image selected',
    })
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
              setSuccessMutation({
                ok: true,
                error: '',
              })
            },
          }
        )
      })
    }
  }
}

export { addPostExecute }
