import { FirebaseStorage, ref, uploadBytes } from 'firebase/storage'

type StorageAvatarType = {
  storage: FirebaseStorage
  userid: string
  elem: File
  timestamp: string
}

export const storageAvatar = async ({
  storage,
  userid,
  elem,
  timestamp,
}: StorageAvatarType) => {
  const avatarImageRef = ref(storage, `avatar/${userid}_${timestamp}`)
  await uploadBytes(avatarImageRef, elem)
}
