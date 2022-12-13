import { useParams } from 'react-router-dom'
import { useGetUsersPosts } from '../../../utils/getPosts'
import { PostElem } from './components/PostElem'

const UsersPosts = () => {
  const { uid } = useParams()
  const { data: dataPosts, isLoading: isLoadingPosts } = useGetUsersPosts(
    uid || ''
  )

  return !isLoadingPosts ? (
    <ul className="overflow-auto flex gap-4 flex-col-reverse px-3 my-3">
      {dataPosts !== '' ? (
        Object.values(dataPosts).map((post: any, index) => {
          const backgroundImage = {
            backgroundImage: `url('${post.imageURL}')`,
          }
          return (
            <PostElem
              post={post}
              backgroundImage={backgroundImage}
              key={index}
            />
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
