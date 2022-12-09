import axios from 'axios'

type QueryRemovePost = {
  userid: string | null
  time: number
}

const queryRemovePost = async (data: QueryRemovePost) => {
  const { userid, time } = data
  await axios.post(`http://localhost:8383/removePost`, {
    userid,
    time,
  })
}

export { queryRemovePost }
