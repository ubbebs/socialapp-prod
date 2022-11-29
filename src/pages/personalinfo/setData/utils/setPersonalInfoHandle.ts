import axios from 'axios'

type SetPersonalInfoType = {
  accountName: string
  displayName: string
  description: string
  userid: string
}

const setPersonalInfo = async (data: SetPersonalInfoType) => {
  const sendAccountName = `acc=${data.accountName}&`
  const sendDisplayName = `name=${data.displayName}&`
  const sendDescription = `desc=${data.description}&`
  const sendUserID = `uid=${data.userid}`
  await axios.post(
    `http://localhost:8383/setPersonalInfo?${
      sendAccountName + sendDisplayName + sendDescription + sendUserID
    }`
  )
}

export { setPersonalInfo }
