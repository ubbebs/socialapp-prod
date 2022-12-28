import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetMyFollowers = (uid: string) => {
  const getMyFollowers = async (userid: string) => {
    const res = await axios.get(`${VITE_SERVER_URL}/getFollowers?uid=${userid}`)
    return res.data
  }

  return useQuery(['myfollowers'], () => getMyFollowers(uid), {
    enabled: !!uid,
  })
}

export { useGetMyFollowers }
