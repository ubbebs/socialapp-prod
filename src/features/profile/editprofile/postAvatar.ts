import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostAvatarType = {
  timestamp: string
  uid: string
}

export const postAvatar = async ({ timestamp, uid }: PostAvatarType) => {
  await axios.post(`${VITE_SERVER_URL}/updateAvatar`, {
    timestamp,
    uid,
  })
}
