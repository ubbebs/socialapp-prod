import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { SERVER_URL } = process.env

const useGetUserData = (uid: string) => {
  const getUserData = async (userid: string) => {
    const res = await axios.get(`${SERVER_URL}/getUserData?uid=${userid}`)
    return res.data
  }

  return useQuery(['userData'], () => getUserData(uid), { enabled: !!uid })
}

export { useGetUserData }
