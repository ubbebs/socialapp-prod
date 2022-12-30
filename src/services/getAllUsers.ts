import { useQuery } from '@tanstack/react-query'
import { UserType } from '../types/UserType'
import { fetcher } from '../utils/fetcher'

export const useGetAllUsers = (uid: string) => {
  return useQuery(
    ['allusers'],
    async () => fetcher<Record<string, UserType>>('/getAllUsers'),
    {
      enabled: !!uid,
    }
  )
}
