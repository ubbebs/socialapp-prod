import axios from 'axios'

type QueryAddPostType = {
  description: string | undefined | null
  userid: string | null
  time: number
}

const queryAddPost = async (data: QueryAddPostType) => {
  const time = data.time.toString()
  const sendDescription =
    data.description !== undefined ? `desc=${data.description}&` : ''
  const sendKey = `key=${time}&`
  const sendUserID = `uid=${data.userid}`
  await axios.post(
    `http://localhost:8383/addPost?${sendKey + sendDescription + sendUserID}`
  )
}

export { queryAddPost }
