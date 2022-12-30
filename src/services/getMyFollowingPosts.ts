import { useQuery } from '@tanstack/react-query'
import { MyFollowingPost } from '../types/FollowingPostType'
import { fetcher } from '../utils/fetcher'

export const useGetMyFollowingPosts = (uid: string) => {
  return useQuery(
    ['myfollowingposts'],
    async () => fetcher<MyFollowingPost[]>(`/getFollowingPosts?uid=${uid}`),
    {
      enabled: !!uid,
    }
  )
}
