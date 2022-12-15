import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetUserPosts = (uid: string) => {
  const getUsersPosts = async (userid: string) => {
    const res = await axios.get(`${VITE_SERVER_URL}/getPosts?uid=${userid}`)
    return res.data
  }

  return useQuery(['userposts'], () => getUsersPosts(uid), { enabled: !!uid })
}

export { useGetUserPosts }
