import { PreviewPost } from '../../../components/posts/PreviewPost'
import { PostType } from '../../../types/PostType'

type PostMapperType = {
  data: Record<number, PostType>
}

export const PostMapper = ({ data }: PostMapperType) => {
  return (
    <div className="overflow-y-auto grid grid-cols-3 gap-5 sm:gap-10 scrollbar w-full">
      {data ? (
        Object.values(data)
          .reverse()
          .map((post, index) => {
            return <PreviewPost post={post} key={index} />
          })
      ) : (
        <p>No posts... yet.</p>
      )}
    </div>
  )
}
