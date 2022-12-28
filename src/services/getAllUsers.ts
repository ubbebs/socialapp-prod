import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetAllUsers = (uid: string) => {
  const getAllUsers = async () => {
    const res = await axios.get(`${VITE_SERVER_URL}/getAllUsers`)
    return res.data
  }

  return useQuery(['allusers'], () => getAllUsers(), {
    enabled: !!uid,
  })
}

export { useGetAllUsers }
