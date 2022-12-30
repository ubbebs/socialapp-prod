import { useGetUserData } from '../../services/getUserData'
import { AuthorHeader } from '../../components/posts/components/AuthorHeader'

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
  return !isLoadingUserData && dataUserData ? (
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
      <p className="ml-[66px] py-2">{comment}</p>
    </div>
  ) : null
}
