import { useQuery } from '@tanstack/react-query'
import { FollowerType } from '../types/FollowerType'
import { fetcher } from '../utils/fetcher'

export const useGetMyFollowers = (uid: string) => {
  return useQuery(
    ['myfollowers'],
    async () =>
      fetcher<Record<string, FollowerType> | undefined>(
        `/getFollowers?uid=${uid}`
      ),
    {
      enabled: !!uid,
    }
  )
}
