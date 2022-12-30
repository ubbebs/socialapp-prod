import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostDisplayNameType = {
  displayName: string
  uid: string
}

export const postDisplayName = async ({
  displayName,
  uid,
}: PostDisplayNameType) => {
  await axios.post(`${VITE_SERVER_URL}/updateDisplayName`, {
    displayName,
    uid,
  })
}
