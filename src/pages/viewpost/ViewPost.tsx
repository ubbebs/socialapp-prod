import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdSend } from 'react-icons/io'
import { useMutation } from '@tanstack/react-query'
import { useGetPost } from '../../services/getPost'
import { useGetUserData } from '../../services/getUserData'
import { SmallLoader } from '../../components/loaders/SmallLoader'
import { AuthorHeader } from '../../components/posts/components/AuthorHeader'
import { stateStore } from '../../stateStore'
import { ButtonRemovePost } from '../../features/posts/myposts/components/ButtonRemovePost'
import { postAddComment } from '../../features/posts/viewpost/utils/postAddComment'
import { useGetComments } from '../../services/getComments'
import { PostComment } from '../../features/comment/PostComment'
import { executeAddComment } from './utils/executeAddComment'

const ViewPost = () => {
  const { userid } = stateStore
  const { authorid, key } = useParams()
  const navigate = useNavigate()
  const comment = useRef<HTMLTextAreaElement>(null)
  const [error, setError] = useState<boolean>(false)
  const { mutate } = useMutation(postAddComment)
  const {
    remove: removePost,
    refetch: refetchPost,
    data: dataPost,
    isLoading: isLoadingPost,
  } = useGetPost(authorid || '', key || '')
  const {
    remove: removeComments,
    refetch: refetchComments,
    data: dataComments,
    isLoading: isLoadingComments,
  } = useGetComments(authorid || '', key || '')
  const { data: dataUserData, isLoading: isLoadingUserData } = useGetUserData(
    authorid || ''
  )

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
      refetchComments,
      setError,
    })
  }

  useEffect(() => {
    return () => {
      removePost()
      removeComments()
    }
  }, [removeComments, removePost])

  return dataPost &&
    !isLoadingPost &&
    !isLoadingUserData &&
    !isLoadingComments ? (
    <div className="max-w-[600px] lg:max-w-[1200px] w-full flex flex-col gap-5 p-12">
      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start rounded-lg">
        <div
          className="w-[300px] h-[300px] mt-5 xl:mt-0 flex-shrink bg-no-repeat bg-center bg-contain xl:w-[500px] xl:h-[500px] rounded-3xl border"
          style={{
            backgroundImage: `url('${dataPost.imageURL}')`,
          }}
        />
        <div className="flex flex-col grow p-5 gap-3">
          <div className="flex flex-row gap-3">
            <AuthorHeader
              data={{
                photoURL: dataUserData.photoURL,
                displayName: dataUserData.displayName,
                authorid: dataUserData.uid,
                timestamp: dataPost.timestamp,
              }}
            />
            {userid === dataPost.authorid && (
              <ButtonRemovePost
                timestamp={dataPost.timestamp}
                navigate={navigate}
                refetch={refetchPost}
              />
            )}
          </div>
          <p>{dataPost.description}</p>
        </div>
      </div>
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
      <div className="flex flex-col gap-2">
        {dataComments &&
          Object.values(dataComments)
            .reverse()
            .map((elem: any, index) => {
              return (
                <PostComment
                  data={{
                    authorid: elem.authorid,
                    comment: elem.comment,
                    time: elem.timestamp,
                  }}
                  key={index}
                />
              )
            })}
      </div>
    </div>
  ) : (
    <SmallLoader />
  )
}

export { ViewPost }
