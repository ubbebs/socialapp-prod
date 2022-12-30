import { useQuery } from '@tanstack/react-query'
import { UserType } from '../types/UserType'
import { fetcher } from '../utils/fetcher'

export const useGetSearchUser = (search: string | null) => {
  return useQuery(
    ['searchresult', { search }],
    async () => fetcher<UserType[]>(`/getSearchUser?search=${search}`),
    {
      enabled: !!search,
    }
  )
}
