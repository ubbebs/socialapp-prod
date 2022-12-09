import { UseMutateFunction } from '@tanstack/react-query'
import { FirebaseStorage } from 'firebase/storage'
import { setAvatarHandle } from '../../../utils/setAvatarHandle'
import { PostAvatarType } from './postAvatar'

export type ChangeAvatarType = {
  storage: FirebaseStorage
  userid: string
  postImg: File
  mutateAvatar: UseMutateFunction<void, unknown, PostAvatarType, unknown>
  setSuccessAvatar: React.Dispatch<React.SetStateAction<boolean>>
}

const changeAvatar = async (args: ChangeAvatarType) => {
  const { storage, userid, postImg, mutateAvatar, setSuccessAvatar } = args
  const timestamp = (Date.now() / 1000).toString()
  setAvatarHandle(storage, userid, postImg, timestamp).then(() => {
    mutateAvatar(
      {
        timestamp,
        uid: userid,
      },
      {
        onSuccess: () => {
          setSuccessAvatar(true)
        },
      }
    )
  })
}

export { changeAvatar }
