import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import React from 'react'
import { NavigateFunction } from 'react-router-dom'
import { PostSetProfileType } from './postSetProfile'
import { updateSetProfile } from './updateSetProfile'
import { ErrorsType } from '../../../pages/setprofile/SetProfile.utils'
import { validateSetProfile } from './validateSetProfile'

type ExecuteSetProfileType = {
  e: React.FormEvent
  auth: Auth
  storage: FirebaseStorage
  postImg: File | null
  accountNameRef: React.RefObject<HTMLInputElement>
  displayNameRef: React.RefObject<HTMLInputElement>
  descriptionRef: React.RefObject<HTMLTextAreaElement>
  mutate: UseMutateFunction<void, unknown, PostSetProfileType, unknown>
  navigate: NavigateFunction
  setErrors: React.Dispatch<React.SetStateAction<ErrorsType>>
}

const executeSetProfile = (args: ExecuteSetProfileType) => {
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
  const validation = validateSetProfile({
    auth,
    postImg,
    accountNameRef,
    displayNameRef,
  })
  e.preventDefault()
  if (validation.ok && postImg) {
    updateSetProfile({
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
  if (validation.errorAccountName) {
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
  if (validation.errorDisplayName) {
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
  if (validation.errorImg) {
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

export { executeSetProfile }
