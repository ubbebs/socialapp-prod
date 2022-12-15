import { PreviewPost } from '../../../components/posts/PreviewPost'
import { ButtonRemovePost } from './components/ButtonRemovePost'
import { stateStore } from '../../../stateStore'
import { useGetMyPosts } from '../../../services/getMyPosts'

const MyPosts = () => {
  const {
    refetch,
    data: dataPosts,
    isLoading: isLoadingPosts,
  } = useGetMyPosts(stateStore.userid || '')

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
              <ButtonRemovePost timestamp={post.timestamp} refetch={refetch} />
            </li>
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
