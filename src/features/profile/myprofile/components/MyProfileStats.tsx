/* eslint-disable prettier/prettier */
import { useGetMyFollowers } from '../../../../services/getMyFollowers'
import { useGetMyFollowing } from '../../../../services/getMyFollowing'
import { useGetMyPosts } from '../../../../services/getMyPosts'

const MyProfileStats = () => {
  const { data: dataMyPosts, isLoading: isLoadingMyPosts } = useGetMyPosts('')
  const { data: dataMyFollowers, isLoading: isLoadingMyFollowers } = useGetMyFollowers('')
  const { data: dataMyFollowing, isLoading: isLoadingMyFollowing } = useGetMyFollowing('')
  const postsLength = dataMyPosts ? Object.keys(dataMyPosts).length : 0
  const myfollowersLength = dataMyFollowers ? Object.keys(dataMyFollowers).length : 0
  const myfollowingLength = dataMyFollowing ? Object.keys(dataMyFollowing).length : 0

  return !isLoadingMyPosts && !isLoadingMyFollowers && !isLoadingMyFollowing ? (
    <div className="flex gap-5 w-full max-w-[500px]">
      <p className="font-normal text-center text-md">
        Posts: <b>{postsLength}</b>
      </p>
      <p className="font-normal text-center text-md">
        <b>{myfollowersLength}</b> followers
      </p>
      <p className="font-normal text-center text-md">
        <b>{myfollowingLength}</b> following
      </p>
    </div>
  ) : null
}

export { MyProfileStats }
