import { useQuery } from '@tanstack/react-query'
import { FollowingType } from '../types/FollowingType'
import { fetcher } from '../utils/fetcher'

export const useGetUserFollowers = (uid: string) => {
  return useQuery(
    ['userfollowers'],
    async () =>
      fetcher<Record<string, FollowingType>>(`/getFollowers?uid=${uid}`),
    {
      enabled: !!uid,
    }
  )
}
