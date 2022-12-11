import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import React from 'react'
import { NavigateFunction } from 'react-router-dom'
import { PostPersonalInfoType } from './postPersonalInfo'
import { setPersonalInfo } from './setPersonalInfo'
import { ErrorsType } from './successPersonalInfoUtils'
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
  setErrors: React.Dispatch<React.SetStateAction<ErrorsType>>
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
    setErrors,
  } = args
  const personalInfo = validatePersonalInfo({
    auth,
    postImg,
    accountNameRef,
    displayNameRef,
  })
  e.preventDefault()
  if (
    validatePersonalInfo({
      auth,
      postImg,
      accountNameRef,
      displayNameRef,
    }).ok &&
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
  if (personalInfo.errorAccountName) {
    setErrors((prev) => ({
      ...prev,
      errorAccountName: true,
    }))
  } else {
    setErrors((prev) => ({
      ...prev,
      errorAccountName: false,
    }))
  }
  if (personalInfo.errorDisplayName) {
    setErrors((prev) => ({
      ...prev,
      errorDisplayName: true,
    }))
  } else {
    setErrors((prev) => ({
      ...prev,
      errorDisplayName: false,
    }))
  }
  if (personalInfo.errorImg) {
    setErrors((prev) => ({
      ...prev,
      errorImage: true,
    }))
  } else {
    setErrors((prev) => ({
      ...prev,
      errorImage: false,
    }))
  }
}

export { personalInfoExecute }
