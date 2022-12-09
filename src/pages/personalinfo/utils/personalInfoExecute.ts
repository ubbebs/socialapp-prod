import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import React from 'react'
import { NavigateFunction } from 'react-router-dom'
import { PostPersonalInfoType } from './postPersonalInfo'
import { setPersonalInfo } from './setPersonalInfo'
import { validatePersonalInfo } from './validatePersonalInfo'

type PersonalInfoExecuteType = {
  e: React.FormEvent
  auth: Auth
  storage: FirebaseStorage
  postImg: File | null
  accountNameRef: React.RefObject<HTMLInputElement>
  displayNameRef: React.RefObject<HTMLInputElement>
  descriptionRef: React.RefObject<HTMLTextAreaElement>
  mutate: UseMutateFunction<void, unknown, PostPersonalInfoType, unknown>
  navigate: NavigateFunction
  setAccountNameError: React.Dispatch<React.SetStateAction<boolean>>
  setDisplayNameError: React.Dispatch<React.SetStateAction<boolean>>
  setPostImgError: React.Dispatch<React.SetStateAction<boolean>>
}

const personalInfoExecute = (args: PersonalInfoExecuteType) => {
  const {
    e,
    auth,
    storage,
    postImg,
    accountNameRef,
    displayNameRef,
    descriptionRef,
    mutate,
    navigate,
    setAccountNameError,
    setDisplayNameError,
    setPostImgError,
  } = args
  e.preventDefault()
  if (
    validatePersonalInfo({
      auth,
      postImg,
      accountNameRef,
      displayNameRef,
    }) &&
    postImg
  ) {
    setPersonalInfo({
      auth,
      storage,
      postImg,
      mutate,
      accountNameRef,
      displayNameRef,
      descriptionRef,
      navigate,
    })
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

export { personalInfoExecute }
