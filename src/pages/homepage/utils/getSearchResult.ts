import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetSearchUser = (search: string | null) => {
  const getSearchUser = async () => {
    const res = await axios.get(
      `http://localhost:8383/getSearchUser?search=${search}`
    )
    return res.data
  }

  return useQuery(['searchUser', { search }], getSearchUser, {
    enabled: !!search,
  })
}

export { useGetSearchUser }
