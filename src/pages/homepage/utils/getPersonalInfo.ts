import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { SERVER_URL } = process.env

const useGetPersonalInfo = (uid: string) => {
  const getPersonalInfo = async (userid: string) => {
    const res = await axios.get(`${SERVER_URL}/getPersonalInfo?uid=${userid}`)
    return res.data
  }

  return useQuery(['personalInfo'], () => getPersonalInfo(uid), {
    enabled: !!uid,
  })
}

export { useGetPersonalInfo }
