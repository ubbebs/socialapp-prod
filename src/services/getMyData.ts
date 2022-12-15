import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetMyData = (uid: string) => {
  const getPersonalInfo = async (userid: string) => {
    const res = await axios.get(
      `${VITE_SERVER_URL}/getPersonalInfo?uid=${userid}`
    )
    return res.data
  }

  return useQuery(['mydata'], () => getPersonalInfo(uid), {
    enabled: !!uid,
  })
}

export { useGetMyData }
