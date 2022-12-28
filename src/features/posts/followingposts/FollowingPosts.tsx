import { useGetMyFollowingPosts } from '../../../services/getMyFollowingPosts'
import { FollowingPostDiv } from './components/FollowingPostDiv'

const FollowingPosts = () => {
  const { data: dataMyFollowingPosts, isLoading: isLoadingMyFollowingPosts } =
    useGetMyFollowingPosts('')

  return !isLoadingMyFollowingPosts ? (
    <div className="grow overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-10 scrollbar w-full">
      {dataMyFollowingPosts
        ? dataMyFollowingPosts.map((elem: any, index: number) => {
            return <FollowingPostDiv data={elem} key={index} />
          })
        : null}
    </div>
  ) : null
}

export { FollowingPosts }
