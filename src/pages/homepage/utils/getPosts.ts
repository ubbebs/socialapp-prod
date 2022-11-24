import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = (uid: string) => {
  const getPosts = async (userid: string) => {
    const res = await axios.get(`http://localhost:8383/getPosts?uid=${userid}`)
    return res.data
  }

  return useQuery(['posts'], () => getPosts(uid), { enabled: !!uid })
}

export { useGetPosts }
