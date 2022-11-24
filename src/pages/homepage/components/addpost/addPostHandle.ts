import { FirebaseStorage, ref as refS, uploadBytes } from 'firebase/storage'

type AddPostHandleType = {
  storage: FirebaseStorage
  userid: string | null
  elem: File
  time: number
}

const addPostHandle = (data: AddPostHandleType) => {
  const time = data.time.toString()
  const postImageRef = refS(data.storage, `posts/${data.userid}/${time}.jpg`)
  uploadBytes(postImageRef, data.elem)
}

export { addPostHandle }
