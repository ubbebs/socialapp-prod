import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import { changeAvatar } from './changeAvatar'
import { PostAvatarType } from './postAvatar'
import { SuccessMutationType } from './successEditProfileUtils'

type AvatarExecuteType = {
  e: React.FormEvent
  auth: Auth
  storage: FirebaseStorage
  postImg: File | null
  mutateAvatar: UseMutateFunction<void, unknown, PostAvatarType, unknown>
  setSuccessMutation: React.Dispatch<React.SetStateAction<SuccessMutationType>>
}

const avatarExecute = (args: AvatarExecuteType) => {
  const { e, auth, storage, postImg, mutateAvatar, setSuccessMutation } = args
  e.preventDefault()
  if (postImg && auth.currentUser) {
    setSuccessMutation((prev) => ({
      ...prev,
      errorAvatar: '',
    }))
    changeAvatar({
      storage,
      userid: auth.currentUser.uid,
      postImg,
      mutateAvatar,
      setSuccessMutation,
    })
  } else {
    setSuccessMutation((prev) => ({
      ...prev,
      okAvatar: false,
      errorAvatar: 'No image selected',
    }))
  }
}

export { avatarExecute }
