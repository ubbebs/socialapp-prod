import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

type PostRemovePostPost = {
  userid: string | null
  time: number
}

export const postRemovePost = async ({ userid, time }: PostRemovePostPost) => {
  await axios.post(`${VITE_SERVER_URL}/removePost`, {
    userid,
    time,
  })
}
