import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetMyFBData = (uid: string) => {
  const getMyFBData = async (userid: string) => {
    const res = await axios.get(`${VITE_SERVER_URL}/getMyFBData?uid=${userid}`)
    return res.data
  }

  return useQuery(['userData'], () => getMyFBData(uid), { enabled: !!uid })
}

export { useGetMyFBData }
