import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { SERVER_URL } = process.env

export type PostPersonalInfoType = {
  accountName: string
  displayName: string
  description: string
  timestamp: string
  uid: string
}

const postPersonalInfo = async (data: PostPersonalInfoType) => {
  const { accountName, displayName, description, timestamp, uid } = data
  await axios
    .post(`${SERVER_URL}/setPersonalInfo`, {
      accountName,
      displayName,
      description,
      timestamp,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postPersonalInfo }
