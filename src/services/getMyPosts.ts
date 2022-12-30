import { useQuery } from '@tanstack/react-query'
import { PostType } from '../types/PostType'
import { fetcher } from '../utils/fetcher'

export const useGetMyPosts = (uid: string) => {
  return useQuery(
    ['myposts'],
    async () => fetcher<Record<number, PostType>>(`/getPosts?uid=${uid}`),
    {
      enabled: !!uid,
    }
  )
}
