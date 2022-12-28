import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

type PostRemovePostPost = {
  userid: string | null
  time: number
}

const postRemovePost = async (data: PostRemovePostPost) => {
  const { userid, time } = data
  await axios.post(`${VITE_SERVER_URL}/removePost`, {
    userid,
    time,
  })
}

export { postRemovePost }
