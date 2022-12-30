import { useQuery } from '@tanstack/react-query'
import { PostType } from '../types/PostType'
import { fetcher } from '../utils/fetcher'

export const useGetUserPosts = (uid: string) => {
  return useQuery(
    ['userposts'],
    async () => fetcher<Record<number, PostType>>(`/getPosts?uid=${uid}`),
    {
      enabled: !!uid,
    }
  )
}
