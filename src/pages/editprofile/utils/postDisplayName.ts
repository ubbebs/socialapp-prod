import axios from 'axios'

export type PostDisplayNameType = {
  displayName: string
  uid: string
}

const postDisplayName = async (data: PostDisplayNameType) => {
  const { displayName, uid } = data
  await axios
    .post(`http://localhost:8383/updateDisplayName`, {
      displayName,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postDisplayName }
