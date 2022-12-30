import { useQuery } from '@tanstack/react-query'
import { FollowingType } from '../types/FollowingType'
import { fetcher } from '../utils/fetcher'

export const useGetMyFollowing = (uid: string) => {
  return useQuery(
    ['myfollowing'],
    async () =>
      fetcher<Record<string, FollowingType> | undefined>(
        `/getFollowing?uid=${uid}`
      ),
    {
      enabled: !!uid,
    }
  )
}
