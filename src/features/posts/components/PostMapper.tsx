import { PreviewPost } from '../../../components/posts/PreviewPost'

type PostMapperType = {
  data: any
}

const PostMapper = (args: PostMapperType) => {
  const { data } = args
  return (
    <div className="overflow-y-auto grid grid-cols-3 gap-5 sm:gap-10 scrollbar w-full">
      {data !== '' ? (
        Object.values(data)
          .reverse()
          .map((post: any, index) => {
            return (
              <PreviewPost
                post={post}
                backgroundImage={post.imageURL}
                key={index}
              />
            )
          })
      ) : (
        <p>No posts... yet.</p>
      )}
    </div>
  )
}

export { PostMapper }
