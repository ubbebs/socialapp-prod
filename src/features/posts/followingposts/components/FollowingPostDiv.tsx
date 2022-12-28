import { AuthorHeader } from '../../../../components/posts/components/AuthorHeader'
import { PreviewPost } from '../../../../components/posts/PreviewPost'
import { useGetUserData } from '../../../../services/getUserData'

type FollowingPostDivType = {
  data: {
    authorid: string
    description: string | null
    imageURL: string
    timestamp: number
  }
}

const FollowingPostDiv = ({ data }: FollowingPostDivType) => {
  const { authorid, description, timestamp } = data
  const { data: dataUserData, isLoading: isLoadingUserData } = useGetUserData(
    authorid || ''
  )
  return !isLoadingUserData ? (
    <>
      <div className="border rounded-xl p-3 flex flex-col gap-3">
        <AuthorHeader
          data={{
            photoURL: dataUserData.photoURL,
            displayName: dataUserData.displayName,
            authorid: dataUserData.uid,
            timestamp,
          }}
        />
        <PreviewPost post={data} />
        <p>{description}</p>
      </div>
    </>
  ) : null
}

export { FollowingPostDiv }
