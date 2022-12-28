/* eslint-disable prettier/prettier */
import { useParams } from 'react-router-dom'
import { useGetUserFollowers } from '../../../../services/getUserFollowers'
import { useGetUserFollowing } from '../../../../services/getUserFollowing'
import { useGetUserPosts } from '../../../../services/getUserPosts'

const UserProfileStats = () => {
  const { uid } = useParams()
  const { data: dataUserPosts, isLoading: isLoadingMyPosts } = useGetUserPosts(uid || '')
  const { data: dataUserFollowers, isLoading: isLoadingMyFollowers } = useGetUserFollowers(uid || '')
  const { data: dataUserFollowing, isLoading: isLoadingMyFollowing } = useGetUserFollowing(uid || '')
  const postsLength = dataUserPosts ? Object.keys(dataUserPosts).length : 0
  const userfollowersLength = dataUserFollowers ? Object.keys(dataUserFollowers).length : 0
  const userfollowingLength = dataUserFollowing ? Object.keys(dataUserFollowing).length : 0
  return !isLoadingMyFollowers && !isLoadingMyPosts && !isLoadingMyFollowing ? (
    <div className="flex gap-5 w-full max-w-[500px]">
      <p className="font-normal text-center text-md">
        Posts: <b>{postsLength}</b>
      </p>
      <p className="font-normal text-center text-md">
        <b>{userfollowersLength}</b> followers
      </p>
      <p className="font-normal text-center text-md">
        <b>{userfollowingLength}</b> following
      </p>
    </div>
  ) : null
}

export { UserProfileStats }
