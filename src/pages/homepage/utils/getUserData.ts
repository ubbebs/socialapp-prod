import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetUserData = (uid: string) => {
  const getUserData = async (userid: string) => {
    const res = await axios.get(`${VITE_SERVER_URL}/getUserData?uid=${userid}`)
    return res.data
  }

  return useQuery(['userData'], () => getUserData(uid), { enabled: !!uid })
}

export { useGetUserData }
