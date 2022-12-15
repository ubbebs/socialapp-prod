import { useParams } from 'react-router-dom'
import { PreviewPost } from '../../../components/posts/PreviewPost'
import { useGetUserPosts } from '../../../services/getUserPosts'
import { PostMapper } from '../components/PostMapper'

const UserPosts = () => {
  const { uid } = useParams()
  const { data: dataUserPosts, isLoading: isLoadingUserPosts } =
    useGetUserPosts(uid || '')

  return !isLoadingUserPosts ? (
    <PostMapper data={dataUserPosts} />
  ) : (
    <p>Loading</p>
  )
}

export { UserPosts }
