import { useGetMyFollowing } from '../../services/getMyFollowing'
import { stateStore } from '../../stateStore'
import { StoryAvatar } from './components/StoryAvatar'

const Stories = () => {
  const { data: dataMyFollowing, isLoading: isLoadingMyFollowing } =
    useGetMyFollowing(stateStore.userid || '')

  return !isLoadingMyFollowing && dataMyFollowing ? (
    <div className="overflow-x-hidden">
      <div className="w-full bg-zinc-50 rounded-xl p-4">
        <div className="overflow-x-auto flex gap-2 shrink-0 scrollbar pb-3">
          {Object.values(dataMyFollowing).map((elem: any, index: number) => (
            <StoryAvatar id={elem.following_id} key={index} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <p className="text-center font-semibold p-6">
      You are not following anyone... maybe its time to find some users?
    </p>
  )
}

export { Stories }
