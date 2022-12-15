import { FirebaseStorage, ref, uploadBytes } from 'firebase/storage'

type StorageAddPostType = {
  storage: FirebaseStorage
  userid: string | null
  elem: File
  time: number
}

const storageAddPost = async (data: StorageAddPostType) => {
  const time = data.time.toString()
  const postImageRef = ref(data.storage, `posts/${data.userid}/${time}`)
  await uploadBytes(postImageRef, data.elem).catch((error) => {
    console.log(error)
  })
}

export { storageAddPost }
