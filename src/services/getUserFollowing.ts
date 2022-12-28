import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetUserFollowing = (uid: string) => {
  const getUserFollowing = async (userid: string) => {
    const res = await axios.get(`${VITE_SERVER_URL}/getFollowing?uid=${userid}`)
    return res.data
  }

  return useQuery(['userfollowing'], () => getUserFollowing(uid), {
    enabled: !!uid,
  })
}

export { useGetUserFollowing }
