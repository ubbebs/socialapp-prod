import { useGetMyFollowingPosts } from '../../../services/getMyFollowingPosts'
import { stateStore } from '../../../stateStore'
import { FollowingPostDiv } from './components/FollowingPostDiv'
import { FollowingPostsLoader } from '../../../components/loaders/FollowingPostsLoader'

type FollowingPostsElem = {
  authorid: string
  description: string | null
  imageURL: string
  timestamp: number
}

export const FollowingPosts = () => {
  const { data: dataMyFollowingPosts, isLoading: isLoadingMyFollowingPosts } =
    useGetMyFollowingPosts(stateStore.userid || '')

  if (isLoadingMyFollowingPosts) return <FollowingPostsLoader />

  return dataMyFollowingPosts ? (
    <div className="grow overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-10 w-full">
      {dataMyFollowingPosts.map((elem: FollowingPostsElem, index: number) => {
        return <FollowingPostDiv data={elem} key={index} />
      })}
    </div>
  ) : null
}
