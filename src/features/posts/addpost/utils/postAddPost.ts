import axios from 'axios'

export type PostAddPostType = {
  description: string | undefined | null
  userid: string | null
  time: number
}

const postAddPost = async (data: PostAddPostType) => {
  const { description, userid, time } = data
  await axios.post(`http://localhost:8383/addPost`, {
    description,
    userid,
    time,
  })
}

export { postAddPost }
