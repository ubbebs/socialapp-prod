import { useParams } from 'react-router-dom'
import { PreviewPost } from '../../../components/posts/PreviewPost'
import { useGetUserPosts } from '../../../services/getUserPosts'

const UsersPosts = () => {
  const { uid } = useParams()
  const { data: dataPosts, isLoading: isLoadingPosts } = useGetUserPosts(
    uid || ''
  )

  return !isLoadingPosts ? (
    <ul className="overflow-auto flex gap-4 flex-col-reverse px-3 my-3">
      {dataPosts !== '' ? (
        Object.values(dataPosts).map((post: any, index) => {
          return (
            <li
              className="h-[150px] w-full bg-zinc-100 lg:bg-white flex rounded-lg cursor-pointer"
              key={index}
            >
              <PreviewPost post={post} backgroundImage={post.imageURL} />
            </li>
          )
        })
      ) : (
        <li>No posts... yet.</li>
      )}
    </ul>
  ) : (
    <p>Loading</p>
  )
}

export { UsersPosts }
