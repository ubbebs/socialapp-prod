import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../utils/fetcher'

export const useGetAuthData = (uid: string) => {
  return useQuery(
    ['authdata'],
    async () => fetcher(`/getMyFBData?uid=${uid}`),
    {
      enabled: !!uid,
    }
  )
}
