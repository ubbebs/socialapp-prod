import axios from 'axios'

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
    .post(`http://localhost:8383/setPersonalInfo`, {
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
