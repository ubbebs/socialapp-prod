import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import React from 'react'
import { changeDescription } from './changeDescritpion'
import { PostDescriptionType } from './postDescription'
import { SuccessMutationType } from '../../../pages/editprofile/EditProfile.utils'

type ExecuteDescriptionType = {
  e: React.FormEvent
  auth: Auth
  descriptionRef: React.RefObject<HTMLTextAreaElement>
  mutateDescription: UseMutateFunction<
    void,
    unknown,
    PostDescriptionType,
    unknown
  >
  setSuccessMutation: React.Dispatch<React.SetStateAction<SuccessMutationType>>
}

const executeDescription = (args: ExecuteDescriptionType) => {
  const { e, auth, descriptionRef, mutateDescription, setSuccessMutation } =
    args
  e.preventDefault()
  if (auth.currentUser) {
    changeDescription({
      description: descriptionRef.current && descriptionRef.current.value,
      userid: auth.currentUser.uid,
      mutateDescription,
      setSuccessMutation,
    })
  }
}

export { executeDescription }
