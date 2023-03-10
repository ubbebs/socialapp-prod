import { useGetUserData } from '../../services/getUserData'
import { AuthorHeader } from '../../components/posts/components/AuthorHeader'
import { PostCommentLoader } from '../../components/loaders/PostCommentLoader'

export type PostCommentType = {
  data: {
    authorid: string
    comment: string
    time: number
  }
}

export const PostComment = ({
  data: { authorid, comment, time },
}: PostCommentType) => {
  const { data: dataUserData, isLoading: isLoadingUserData } = useGetUserData(
    authorid || ''
  )

  if (isLoadingUserData) return <PostCommentLoader />

  return dataUserData ? (
    <div className="flex flex-col w-full bg-zinc-100 rounded-3xl">
      <div className="bg-zinc-200 rounded-t-3xl p-2">
        <AuthorHeader
          data={{
            photoURL: dataUserData.photoURL,
            displayName: dataUserData.displayName,
            authorid,
            timestamp: time,
          }}
        />
      </div>
      <hr className="border-0 h-[2px] gradient-linear" />
      <p className="ml-[66px] py-2 pr-4 break-all">{comment}</p>
    </div>
  ) : null
}
