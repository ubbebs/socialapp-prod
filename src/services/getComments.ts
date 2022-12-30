import { useQuery } from '@tanstack/react-query'
import { CommentType } from '../types/CommentType'
import { fetcher } from '../utils/fetcher'

export const useGetComments = (uid: string, key: string | boolean) => {
  return useQuery(
    ['comments'],
    async () =>
      fetcher<Record<string, CommentType>>(
        `/getComments?authorid=${uid}&key=${key}`
      ),
    { enabled: !!uid }
  )
}
