import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import { NavigateFunction } from 'react-router-dom'
import { storageAvatar } from '../utils/storageAvatar'
import { PostSetProfileType } from './postSetProfile'

type UpdateSetProfileType = {
  auth: Auth
  storage: FirebaseStorage
  postImg: File
  mutate: UseMutateFunction<void, unknown, PostSetProfileType, unknown>
  accountNameRef: React.RefObject<HTMLInputElement>
  displayNameRef: React.RefObject<HTMLInputElement>
  descriptionRef: React.RefObject<HTMLTextAreaElement>
  navigate: NavigateFunction
}

export const updateSetProfile = ({
  auth,
  storage,
  postImg,
  mutate,
  accountNameRef,
  displayNameRef,
  descriptionRef,
  navigate,
}: UpdateSetProfileType) => {
  const timestamp = (Date.now() / 1000).toString()
  storageAvatar({
    storage,
    userid: auth.currentUser?.uid || '',
    elem: postImg,
    timestamp,
  }).then(() => {
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
