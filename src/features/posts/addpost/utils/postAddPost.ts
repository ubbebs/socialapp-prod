import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

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
  await axios.post(`${VITE_SERVER_URL}/addPost`, {
    description,
    userid,
    time,
  })
}
