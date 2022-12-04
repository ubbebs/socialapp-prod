import axios from 'axios'

type SetPersonalInfoType = {
  accountName: string
  displayName: string
  description: string
  timestamp: string
  uid: string
}

const setPersonalInfo = async (data: SetPersonalInfoType) => {
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

export { setPersonalInfo }
