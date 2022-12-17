import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  UseMutateFunction,
} from '@tanstack/react-query'
import { PostAddCommentType } from '../../../features/posts/viewpost/utils/postAddComment'

type ExecuteAddCommentType = {
  e: React.FormEvent
  mutate: UseMutateFunction<void, unknown, PostAddCommentType, unknown>
  comment: React.RefObject<HTMLTextAreaElement>
  data: {
    authorid: string
    postid: string
    userid: string
  }
  refetchComments: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
}

const executeAddComment = (args: ExecuteAddCommentType) => {
  const { e, mutate, comment, data, refetchComments, setError } = args
  e.preventDefault()
  const time = Date.now()
  if (comment.current && comment.current.value.length > 0) {
    mutate(
      {
        authorid: data.authorid || '',
        postid: data.postid || '',
        comment: comment.current?.value || '',
        userid: data.userid || '',
        time,
      },
      {
        onSuccess: () => {
          refetchComments()
        },
      }
    )
    comment.current.value = ''
    setError(false)
  } else {
    setError(true)
  }
}

export { executeAddComment }
