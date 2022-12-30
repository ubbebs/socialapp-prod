import { stateStore } from '../../../stateStore'
import { useGetMyPosts } from '../../../services/getMyPosts'
import { PostMapper } from '../components/PostMapper'

export const MyPosts = () => {
  const { data: dataMyPosts, isLoading: isLoadingMyPosts } = useGetMyPosts(
    stateStore.userid || ''
  )

  return !isLoadingMyPosts && dataMyPosts ? (
    <>
      {console.log(dataMyPosts)}
      <PostMapper data={dataMyPosts} />
    </>
  ) : (
    <p>Loading</p>
  )
}
