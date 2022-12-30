import { useQuery } from '@tanstack/react-query'
import { PersonalInfoType } from '../types/PersonalInfo'
import { fetcher } from '../utils/fetcher'

export const useGetUserData = (search: string | null) => {
  return useQuery(
    ['userdata', { search }],
    async () => fetcher<PersonalInfoType>(`/getUserData?uid=${search}`),
    {
      enabled: !!search,
    }
  )
}
