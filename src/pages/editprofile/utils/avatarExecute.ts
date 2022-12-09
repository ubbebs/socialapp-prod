import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import { changeAvatar } from './changeAvatar'
import { PostAvatarType } from './postAvatar'

type AvatarExecuteType = {
  e: React.FormEvent
  auth: Auth
  storage: FirebaseStorage
  postImg: File | null
  mutateAvatar: UseMutateFunction<void, unknown, PostAvatarType, unknown>
  setSuccessAvatar: React.Dispatch<React.SetStateAction<boolean>>
  setAvatarError: React.Dispatch<React.SetStateAction<boolean>>
}

const avatarExecute = (args: AvatarExecuteType) => {
  const {
    e,
    auth,
    storage,
    postImg,
    mutateAvatar,
    setSuccessAvatar,
    setAvatarError,
  } = args
  e.preventDefault()
  if (postImg && auth.currentUser) {
    setAvatarError(false)
    changeAvatar({
      storage,
      userid: auth.currentUser.uid,
      postImg,
      mutateAvatar,
      setSuccessAvatar,
    })
  } else {
    setAvatarError(true)
  }
}

export { avatarExecute }
