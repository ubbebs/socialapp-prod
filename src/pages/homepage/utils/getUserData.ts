import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUserData = (search: string | null) => {
  const getUserData = async () => {
    const res = await axios.get(
      `http://localhost:8383/getUserData?uid=${search}`
    )
    return res.data
  }

  return useQuery(['userData', { search }], getUserData, {
    enabled: !!search,
  })
}

export { useGetUserData }
