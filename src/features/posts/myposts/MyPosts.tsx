import { stateStore } from '../../../stateStore'
import { useGetMyPosts } from '../../../services/getMyPosts'
import { PostMapper } from '../components/PostMapper'

const MyPosts = () => {
  const { data: dataMyPosts, isLoading: isLoadingMyPosts } = useGetMyPosts(
    stateStore.userid || ''
  )

  return !isLoadingMyPosts ? <PostMapper data={dataMyPosts} /> : <p>Loading</p>
}

export { MyPosts }
