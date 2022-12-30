import { useQuery } from '@tanstack/react-query'
import { FollowerType } from '../types/FollowerType'
import { fetcher } from '../utils/fetcher'

export const useGetUserFollowing = (uid: string) => {
  return useQuery(
    ['userfollowing'],
    async () =>
      fetcher<Record<string, FollowerType>>(`/getFollowing?uid=${uid}`),
    {
      enabled: !!uid,
    }
  )
}
