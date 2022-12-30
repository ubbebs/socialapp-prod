import { useQuery } from '@tanstack/react-query'
import { PostType } from '../types/PostType'
import { fetcher } from '../utils/fetcher'

export const useGetPost = (uid: string, key: string | boolean) => {
  return useQuery(
    ['post'],
    async () => fetcher<PostType>(`/getPost?authorid=${uid}&key=${key}`),
    { enabled: !!uid }
  )
}
