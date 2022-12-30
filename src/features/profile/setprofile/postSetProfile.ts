import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostSetProfileType = {
  accountName: string
  displayName: string
  description: string
  timestamp: string
  uid: string
}

export const postSetProfile = async ({
  accountName,
  displayName,
  description,
  timestamp,
  uid,
}: PostSetProfileType) => {
  await axios.post(`${VITE_SERVER_URL}/setPersonalInfo`, {
    accountName,
    displayName,
    description,
    timestamp,
    uid,
  })
}
