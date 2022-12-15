import { FirebaseStorage, ref, uploadBytes } from 'firebase/storage'

type StorageAvatarType = {
  storage: FirebaseStorage
  userid: string
  elem: File
  timestamp: string
}

const storageAvatar = async (args: StorageAvatarType) => {
  const { storage, userid, elem, timestamp } = args
  const avatarImageRef = ref(storage, `avatar/${userid}_${timestamp}`)
  await uploadBytes(avatarImageRef, elem).catch((error) => {
    console.log(error)
  })
}

export { storageAvatar }
