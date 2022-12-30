import { useGetMyFollowers } from '../../../../services/getMyFollowers'
import { useGetMyFollowing } from '../../../../services/getMyFollowing'
import { useGetMyPosts } from '../../../../services/getMyPosts'
import { stateStore } from '../../../../stateStore'

export const MyProfileStats = () => {
  const { data: dataMyPosts, isLoading: isLoadingMyPosts } = useGetMyPosts(
    stateStore.userid || ''
  )
  const { data: dataMyFollowers, isLoading: isLoadingMyFollowers } =
    useGetMyFollowers(stateStore.userid || '')
  const { data: dataMyFollowing, isLoading: isLoadingMyFollowing } =
    useGetMyFollowing(stateStore.userid || '')

  return !isLoadingMyPosts &&
    !isLoadingMyFollowers &&
    !isLoadingMyFollowing &&
    dataMyPosts &&
    dataMyFollowers &&
    dataMyFollowing ? (
    <div className="flex gap-5 w-full max-w-[500px]">
      <p className="font-normal text-center text-md">
        Posts: <b>{Object.keys(dataMyPosts)?.length || 0}</b>
      </p>
      <p className="font-normal text-center text-md">
        <b>{Object.keys(dataMyFollowers)?.length || 0}</b> followers
      </p>
      <p className="font-normal text-center text-md">
        <b>{Object.keys(dataMyFollowing)?.length || 0}</b> following
      </p>
    </div>
  ) : null
}
