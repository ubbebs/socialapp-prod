import { FirebaseStorage, ref, uploadBytes } from 'firebase/storage'

type AddPostHandleType = {
  storage: FirebaseStorage
  userid: string | null
  elem: File
  time: number
}

const addPostStorage = async (data: AddPostHandleType) => {
  const time = data.time.toString()
  const postImageRef = ref(data.storage, `posts/${data.userid}/${time}`)
  await uploadBytes(postImageRef, data.elem).catch((error) => {
    console.log(error)
  })
}

export { addPostStorage }
