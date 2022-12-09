import axios from 'axios'

type QueryAddPostType = {
  description: string | undefined | null
  userid: string | null
  time: number
}

const queryAddPost = async (data: QueryAddPostType) => {
  const { description, userid, time } = data
  await axios.post(`http://localhost:8383/addPost`, {
    description,
    userid,
    time,
  })
}

export { queryAddPost }
