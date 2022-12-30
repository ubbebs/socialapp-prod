import { FirebaseStorage, ref, uploadBytes } from 'firebase/storage'

type StorageAddPostType = {
  storage: FirebaseStorage
  userid: string | null
  elem: File
  time: number
}

export const storageAddPost = async ({
  storage,
  userid,
  elem,
  time,
}: StorageAddPostType) => {
  const timestamp = time.toString()
  const postImageRef = ref(storage, `posts/${userid}/${timestamp}`)
  await uploadBytes(postImageRef, elem).catch((error) => {
    console.log(error)
  })
}
