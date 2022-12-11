import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetPosts = (uid: string) => {
  const getPosts = async (userid: string) => {
    const res = await axios.get(`${VITE_SERVER_URL}/getPosts?uid=${userid}`)
    return res.data
  }

  return useQuery(['posts'], () => getPosts(uid), { enabled: !!uid })
}

export { useGetPosts }
