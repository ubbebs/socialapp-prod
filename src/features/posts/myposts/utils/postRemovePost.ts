import axios from 'axios'

type PostRemovePostPost = {
  userid: string | null
  time: number
}

const postRemovePost = async (data: PostRemovePostPost) => {
  const { userid, time } = data
  await axios.post(`http://localhost:8383/removePost`, {
    userid,
    time,
  })
}

export { postRemovePost }
