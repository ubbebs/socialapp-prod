import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetMyFollowing = (uid: string) => {
  const getMyFollowing = async (userid: string) => {
    const res = await axios.get(`${VITE_SERVER_URL}/getFollowing?uid=${userid}`)
    return res.data
  }

  return useQuery(['myfollowing'], () => getMyFollowing(uid), {
    enabled: !!uid,
  })
}

export { useGetMyFollowing }
