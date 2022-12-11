import { UseMutateFunction } from '@tanstack/react-query'
import { FirebaseStorage } from 'firebase/storage'
import { avatarStorage } from '../../../utils/avatarStorage'
import { PostAvatarType } from './postAvatar'
import { SuccessMutationType } from './SuccessMutationType'

export type ChangeAvatarType = {
  storage: FirebaseStorage
  userid: string
  postImg: File
  mutateAvatar: UseMutateFunction<void, unknown, PostAvatarType, unknown>
  setSuccessMutation: React.Dispatch<React.SetStateAction<SuccessMutationType>>
}

const changeAvatar = async (args: ChangeAvatarType) => {
  const { storage, userid, postImg, mutateAvatar, setSuccessMutation } = args
  const timestamp = (Date.now() / 1000).toString()
  avatarStorage(storage, userid, postImg, timestamp).then(() => {
    mutateAvatar(
      {
        timestamp,
        uid: userid,
      },
      {
        onSuccess: () => {
          setSuccessMutation((prev) => ({
            ...prev,
            okAvatar: true,
          }))
        },
      }
    )
  })
}

export { changeAvatar }
