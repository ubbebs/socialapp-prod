import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { SERVER_URL } = process.env

export type PostDisplayNameType = {
  displayName: string
  uid: string
}

const postDisplayName = async (data: PostDisplayNameType) => {
  const { displayName, uid } = data
  await axios
    .post(`${SERVER_URL}/updateDisplayName`, {
      displayName,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postDisplayName }
