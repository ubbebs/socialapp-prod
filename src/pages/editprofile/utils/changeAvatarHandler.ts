import { UseMutateFunction } from '@tanstack/react-query'
import { FirebaseStorage } from 'firebase/storage'
import { setAvatarHandle } from '../../personalinfo/utils/setAvatarHandle'

type UpdateAvatarType = {
  timestamp: string
  uid: string
}

type ChangeAvatarHandlerType = {
  storage: FirebaseStorage
  userid: string
  postImg: File
  mutateAvatar: UseMutateFunction<void, unknown, UpdateAvatarType, unknown>
  setSuccessAvatar: React.Dispatch<React.SetStateAction<boolean>>
}

const changeAvatarHandler = async (args: ChangeAvatarHandlerType) => {
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

export { changeAvatarHandler }
