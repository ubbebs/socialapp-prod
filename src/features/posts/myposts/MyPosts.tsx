import { stateStore } from '../../../stateStore'
import { useGetMyPosts } from '../../../services/getMyPosts'
import { PostMapper } from '../components/PostMapper'
import { PostMapperLoader } from '../../../components/loaders/PostMapperLoader'

export const MyPosts = () => {
  const { data: dataMyPosts, isLoading: isLoadingMyPosts } = useGetMyPosts(
    stateStore.userid || ''
  )

  if (isLoadingMyPosts) return <PostMapperLoader />

  return dataMyPosts ? (
    <PostMapper data={dataMyPosts} />
  ) : (
    <p>There is no posts... yet.</p>
  )
}
