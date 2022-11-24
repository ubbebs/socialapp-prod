import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUserData = (uid: string) => {
  const getUserData = async (userid: string) => {
    const res = await axios.get(
      `http://localhost:8383/getUserData?uid=${userid}`
    )
    return res.data
  }

  return useQuery(['userData'], () => getUserData(uid), { enabled: !!uid })
}

export { useGetUserData }
