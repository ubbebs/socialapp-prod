import { useMutation } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import { postAddComment } from '../../../features/posts/viewpost/utils/postAddComment'
import { stateStore } from '../../../stateStore'
import { executeAddComment } from '../utils/executeAddComment'

export const ViewPostComment = () => {
  const { authorid, key } = useParams()
  const comment = useRef<HTMLTextAreaElement>(null)
  const [error, setError] = useState<boolean>(false)
  const { mutate } = useMutation(postAddComment)
  const { userid } = stateStore

  const funcAddComment = (e: React.FormEvent) => {
    executeAddComment({
      e,
      mutate,
      comment,
      data: {
        authorid: authorid || '',
        postid: key || '',
        userid: userid || '',
      },
      setError,
    })
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full p-2 bg-zinc-100 rounded-lg flex">
        <textarea
          className="focus:outline-none w-full break-words resize-none m-0 bg-zinc-100"
          maxLength={500}
          placeholder="Comment here"
          ref={comment}
        />
        <button
          type="button"
          className="px-2 flex flex-shrink justify-center items-center"
          onClick={(e) => funcAddComment(e)}
        >
          <IoMdSend />
        </button>
      </div>
      {error && (
        <p className="text-sm text-red-500">Comment cannot be empty!</p>
      )}
    </div>
  )
}
