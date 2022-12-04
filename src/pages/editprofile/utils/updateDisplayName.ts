import axios from 'axios'

type UpdateDisplayNameType = {
  displayName: string
  uid: string
}

const updateDisplayName = async (data: UpdateDisplayNameType) => {
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

export { updateDisplayName }
