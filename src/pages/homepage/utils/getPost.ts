import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { SERVER_URL } = process.env

const useGetPost = (uid: string, key: string | boolean) => {
  const getPosts = async (userid: string, postkey: string | boolean) => {
    const res = await axios.get(
      `${SERVER_URL}/getPost?uid=${userid}&key=${postkey}`
    )
    return res.data
  }

  return useQuery(['post'], () => getPosts(uid, key), { enabled: !!uid })
}

export { useGetPost }
