import { UseMutateFunction } from '@tanstack/react-query'
import { FirebaseStorage } from 'firebase/storage'
import { storageAvatar } from '../utils/storageAvatar'
import { PostAvatarType } from './postAvatar'
import { SuccessMutationType } from '../../../pages/editprofile/EditProfile.utils'

export type ChangeAvatarType = {
  storage: FirebaseStorage
  userid: string
  postImg: File
  mutateAvatar: UseMutateFunction<void, unknown, PostAvatarType, unknown>
  setSuccessMutation: React.Dispatch<React.SetStateAction<SuccessMutationType>>
}

export const changeAvatar = async ({
  storage,
  userid,
  postImg,
  mutateAvatar,
  setSuccessMutation,
}: ChangeAvatarType) => {
  const timestamp = (Date.now() / 1000).toString()
  storageAvatar({ storage, userid, elem: postImg, timestamp }).then(() => {
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
