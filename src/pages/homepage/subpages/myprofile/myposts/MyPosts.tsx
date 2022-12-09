import { stateStore } from '../../../../../stateStore'
import { useGetPosts } from '../../../utils/getPosts'
import { PostElem } from './components/PostElem'

const MyPosts = () => {
  const {
    refetch,
    data: dataPosts,
    isLoading: isLoadingPosts,
  } = useGetPosts(stateStore.userid || '')

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
              refetch={refetch}
              key={index}
            />
          )
        })
      ) : (
        <li>No posts... yet. Wanna add some post?</li>
      )}
    </ul>
  ) : (
    <p>Loading</p>
  )
}

export { MyPosts }
