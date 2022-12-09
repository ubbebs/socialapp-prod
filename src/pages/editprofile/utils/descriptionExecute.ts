import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import React from 'react'
import { changeDescription } from './changeDescritpion'
import { PostDescriptionType } from './postDescription'

type DescriptionExecuteType = {
  e: React.FormEvent
  auth: Auth
  descriptionRef: React.RefObject<HTMLTextAreaElement>
  mutateDescription: UseMutateFunction<
    void,
    unknown,
    PostDescriptionType,
    unknown
  >
  setSuccessDescription: React.Dispatch<React.SetStateAction<boolean>>
}

const descriptionExecute = (args: DescriptionExecuteType) => {
  const { e, auth, descriptionRef, mutateDescription, setSuccessDescription } =
    args
  e.preventDefault()
  if (auth.currentUser) {
    changeDescription({
      description: descriptionRef.current && descriptionRef.current.value,
      userid: auth.currentUser.uid,
      mutateDescription,
      setSuccessDescription,
    })
  }
}

export { descriptionExecute }
