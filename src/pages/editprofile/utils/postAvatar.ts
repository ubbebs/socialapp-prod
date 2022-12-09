import axios from 'axios'

export type PostAvatarType = {
  timestamp: string
  uid: string
}

const postAvatar = async (data: PostAvatarType) => {
  const { timestamp, uid } = data
  await axios
    .post(`http://localhost:8383/updateAvatar`, {
      timestamp,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postAvatar }
