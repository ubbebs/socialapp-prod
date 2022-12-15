import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostSetProfileType = {
  accountName: string
  displayName: string
  description: string
  timestamp: string
  uid: string
}

const postSetProfile = async (data: PostSetProfileType) => {
  const { accountName, displayName, description, timestamp, uid } = data
  await axios
    .post(`${VITE_SERVER_URL}/setPersonalInfo`, {
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

export { postSetProfile }
