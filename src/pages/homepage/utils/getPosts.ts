import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { SERVER_URL } = process.env

const useGetPosts = (uid: string) => {
  const getPosts = async (userid: string) => {
    const res = await axios.get(`${SERVER_URL}/getPosts?uid=${userid}`)
    return res.data
  }

  return useQuery(['posts'], () => getPosts(uid), { enabled: !!uid })
}

export { useGetPosts }
