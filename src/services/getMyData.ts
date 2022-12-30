import { useQuery } from '@tanstack/react-query'
import { PersonalInfoType } from '../types/PersonalInfo'
import { fetcher } from '../utils/fetcher'

export const useGetMyData = (uid: string) => {
  return useQuery(
    ['mydata'],
    async () => fetcher<PersonalInfoType>(`/getPersonalInfo?uid=${uid}`),
    {
      enabled: !!uid,
    }
  )
}
