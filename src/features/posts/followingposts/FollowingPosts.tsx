import { useGetMyFollowingPosts } from '../../../services/getMyFollowingPosts'
import { stateStore } from '../../../stateStore'
import { FollowingPostDiv } from './components/FollowingPostDiv'

type FollowingPostsElem = {
  authorid: string
  description: string | null
  imageURL: string
  timestamp: number
}

export const FollowingPosts = () => {
  const { data: dataMyFollowingPosts, isLoading: isLoadingMyFollowingPosts } =
    useGetMyFollowingPosts(stateStore.userid || '')

  return !isLoadingMyFollowingPosts ? (
    <div className="grow overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-10 scrollbar w-full">
      {dataMyFollowingPosts &&
        dataMyFollowingPosts.map((elem: FollowingPostsElem, index: number) => {
          return <FollowingPostDiv data={elem} key={index} />
        })}
    </div>
  ) : null
}
