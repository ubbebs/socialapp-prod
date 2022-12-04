import axios from 'axios'

type UpdateAvatarType = {
  timestamp: string
  uid: string
}

const updateAvatar = async (data: UpdateAvatarType) => {
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

export { updateAvatar }
