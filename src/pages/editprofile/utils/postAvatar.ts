import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { SERVER_URL } = process.env

export type PostAvatarType = {
  timestamp: string
  uid: string
}

const postAvatar = async (data: PostAvatarType) => {
  const { timestamp, uid } = data
  await axios
    .post(`${SERVER_URL}/updateAvatar`, {
      timestamp,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postAvatar }
