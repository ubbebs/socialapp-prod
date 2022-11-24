import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPersonalInfo = (uid: string) => {
  const getPersonalInfo = async (userid: string) => {
    const res = await axios.get(
      `http://localhost:8383/getPersonalInfo?uid=${userid}`
    )
    return res.data
  }

  return useQuery(['personalInfo'], () => getPersonalInfo(uid), {
    enabled: !!uid,
  })
}

export { useGetPersonalInfo }
