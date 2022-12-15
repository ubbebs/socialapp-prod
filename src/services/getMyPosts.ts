import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetMyPosts = (uid: string) => {
  const getMyPosts = async (userid: string) => {
    const res = await axios.get(`${VITE_SERVER_URL}/getPosts?uid=${userid}`)
    return res.data
  }

  return useQuery(['myposts'], () => getMyPosts(uid), { enabled: !!uid })
}

export { useGetMyPosts }
