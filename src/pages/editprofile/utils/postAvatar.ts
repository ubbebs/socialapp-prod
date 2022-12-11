import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostAvatarType = {
  timestamp: string
  uid: string
}

const postAvatar = async (data: PostAvatarType) => {
  const { timestamp, uid } = data
  await axios
    .post(`${VITE_SERVER_URL}/updateAvatar`, {
      timestamp,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postAvatar }
