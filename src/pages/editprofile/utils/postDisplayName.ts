import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostDisplayNameType = {
  displayName: string
  uid: string
}

const postDisplayName = async (data: PostDisplayNameType) => {
  const { displayName, uid } = data
  await axios
    .post(`${VITE_SERVER_URL}/updateDisplayName`, {
      displayName,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postDisplayName }
