import { updateProfile, User } from 'firebase/auth'
import { FirebaseStorage, ref, uploadBytes } from 'firebase/storage'
import { NavigateFunction } from 'react-router-dom'

const editAvatarHandle = (
  storage: FirebaseStorage,
  user: User,
  elem: FileList,
  navigate: NavigateFunction
) => {
  const avatarImageRef = ref(storage, `avatar/${user.uid}.jpg`)
  uploadBytes(avatarImageRef, elem[0])
    .then(() => {
      if (user) {
        updateProfile(user, {
          photoURL: `https://firebasestorage.googleapis.com/v0/b/socialapp-c3f3f.appspot.com/o/avatar%2F${user.uid}.jpg?alt=media`,
        })
          .then(() => {
            navigate('/')
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export { editAvatarHandle }
