import { UseMutateFunction } from '@tanstack/react-query'
import { PostAddCommentType } from '../../../features/posts/viewpost/utils/postAddComment'
import { queryClient } from '../../../utils/queryClient'

type ExecuteAddCommentType = {
  e: React.FormEvent
  mutate: UseMutateFunction<void, unknown, PostAddCommentType, unknown>
  comment: React.RefObject<HTMLTextAreaElement>
  data: {
    authorid: string
    postid: string
    userid: string
  }
  setError: React.Dispatch<React.SetStateAction<boolean>>
}

export const executeAddComment = ({
  e,
  mutate,
  comment,
  data,
  setError,
}: ExecuteAddCommentType) => {
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
          queryClient.invalidateQueries()
        },
      }
    )
    // eslint-disable-next-line no-param-reassign
    comment.current.value = ''
    setError(false)
  } else {
    setError(true)
  }
}
