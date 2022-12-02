import { User } from 'firebase/auth'
import { FirebaseStorage, ref, uploadBytes } from 'firebase/storage'
import { NavigateFunction } from 'react-router-dom'

const setAvatarHandle = async (
  storage: FirebaseStorage,
  user: User,
  elem: File,
  navigate: NavigateFunction,
  timestamp: string
) => {
  const avatarImageRef = ref(storage, `avatar/${user.uid}_${timestamp}.jpg`)
  await uploadBytes(avatarImageRef, elem).catch((error) => {
    console.log(error)
  })
}

export { setAvatarHandle }
