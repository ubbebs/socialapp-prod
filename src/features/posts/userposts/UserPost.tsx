import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useGetUserPosts } from '../../../services/getUserPosts'
import { PostMapper } from '../components/PostMapper'
import { PostMapperLoader } from '../../../components/loaders/PostMapperLoader'

export const UserPosts = () => {
  const { uid } = useParams()
  const {
    remove,
    data: dataUserPosts,
    isLoading: isLoadingUserPosts,
  } = useGetUserPosts(uid || '')

  useEffect(() => {
    return remove
  }, [remove])

  if (isLoadingUserPosts) return <PostMapperLoader />

  return dataUserPosts ? (
    <PostMapper data={dataUserPosts} />
  ) : (
    <p>There is no posts... yet.</p>
  )
}
