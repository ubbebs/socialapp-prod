import axios from 'axios'

export type PostAddPostType = {
  description: string | undefined | null
  userid: string | null
  time: number
}

export const postAddPost = async ({
  description,
  userid,
  time,
}: PostAddPostType) => {
  await axios.post(`http://localhost:8383/addPost`, {
    description,
    userid,
    time,
  })
}
