/* eslint-disable prettier/prettier */
import { useGetMyFollowers } from '../../../../../services/getMyFollowers'
import { useGetMyFollowing } from '../../../../../services/getMyFollowing'
import { useGetMyPosts } from '../../../../../services/getMyPosts'
import { stateStore } from '../../../../../stateStore'

const Stats = () => {
  const { data: dataMyPosts, isLoading: isLoadingMyPosts } = useGetMyPosts(stateStore.userid || '')
  const { data: dataMyFollowers, isLoading: isLoadingMyFollowers } = useGetMyFollowers(stateStore.userid || '')
  const { data: dataMyFollowing, isLoading: isLoadingMyFollowing } = useGetMyFollowing(stateStore.userid || '')

  return !isLoadingMyPosts && !isLoadingMyFollowers && !isLoadingMyFollowing ? (
    <div className="grid grid-cols-3 grid-rows-1 w-full max-w-[300px] text-md">
      <p className="text-center">
        {dataMyPosts ? Object.keys(dataMyPosts).length : 0} posts
      </p>
      <p className="text-center border-solid border-black border-x-[1px]">
        {dataMyFollowers ? Object.keys(dataMyFollowers).length : 0} followers
      </p>
      <p className="text-center">
        {dataMyFollowing ? Object.keys(dataMyFollowing).length : 0} following
      </p>
    </div>
  ) : null
}

export { Stats }
