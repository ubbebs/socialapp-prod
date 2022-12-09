import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import { NavigateFunction } from 'react-router-dom'
import { PostPersonalInfoType } from './postPersonalInfo'
import { setAvatarHandle } from './setAvatarHandle'

type SetPersonalInfoType = {
  auth: Auth
  storage: FirebaseStorage
  postImg: File
  mutate: UseMutateFunction<void, unknown, PostPersonalInfoType, unknown>
  accountNameRef: React.RefObject<HTMLInputElement>
  displayNameRef: React.RefObject<HTMLInputElement>
  descriptionRef: React.RefObject<HTMLTextAreaElement>
  navigate: NavigateFunction
}

const setPersonalInfo = (args: SetPersonalInfoType) => {
  const {
    auth,
    storage,
    postImg,
    mutate,
    accountNameRef,
    displayNameRef,
    descriptionRef,
    navigate,
  } = args
  const timestamp = (Date.now() / 1000).toString()
  setAvatarHandle(
    storage,
    auth.currentUser?.uid || '',
    postImg,
    timestamp
  ).then(() => {
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
  })
}

export { setPersonalInfo }
