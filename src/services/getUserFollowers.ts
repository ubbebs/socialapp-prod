import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetUserFollowers = (uid: string) => {
  const getUserFollowers = async (userid: string) => {
    const res = await axios.get(`${VITE_SERVER_URL}/getFollowers?uid=${userid}`)
    return res.data
  }

  return useQuery(['userfollowers'], () => getUserFollowers(uid), {
    enabled: !!uid,
  })
}

export { useGetUserFollowers }
