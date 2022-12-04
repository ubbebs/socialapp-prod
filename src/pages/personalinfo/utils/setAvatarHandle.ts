import { FirebaseStorage, ref, uploadBytes } from 'firebase/storage'

const setAvatarHandle = async (
  storage: FirebaseStorage,
  userid: string,
  elem: File,
  timestamp: string
) => {
  const avatarImageRef = ref(storage, `avatar/${userid}_${timestamp}`)
  await uploadBytes(avatarImageRef, elem).catch((error) => {
    console.log(error)
  })
}

export { setAvatarHandle }
