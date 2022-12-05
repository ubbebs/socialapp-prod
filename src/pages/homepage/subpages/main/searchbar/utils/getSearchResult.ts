import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetSearchUser = (search: string | null) => {
  const getSearchUser = async (serachKey: string | null) => {
    const res = await axios.get(
      `http://localhost:8383/getSearchUser?search=${serachKey}`
    )
    return res.data
  }

  return useQuery(['searchUser'], () => getSearchUser(search), {
    enabled: !!search,
  })
}

export { useGetSearchUser }
