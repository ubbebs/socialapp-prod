import axios from 'axios'

type QueryPersonalInfoType = {
  name: string | undefined
  description: string | undefined
  userid: string | null
}

const queryPersonalInfo = async (data: QueryPersonalInfoType) => {
  const sendName = data.name !== undefined ? `name=${data.name}&` : ''
  const sendDescription =
    data.description !== undefined ? `desc=${data.description}&` : ''
  const sendUserID = data.userid !== undefined ? `uid=${data.userid}` : ''
  await axios.post(
    `http://localhost:8383/setPersonalInfo?${
      sendName + sendDescription + sendUserID
    }`
  )
}

export { queryPersonalInfo }
