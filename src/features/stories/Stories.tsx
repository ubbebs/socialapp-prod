import { useGetMyFollowing } from '../../services/getMyFollowing'
import { stateStore } from '../../stateStore'
import { StoryAvatar } from './components/StoryAvatar'

export const Stories = () => {
  const { data: dataMyFollowing, isLoading: isLoadingMyFollowing } =
    useGetMyFollowing(stateStore.userid || '')

  if (isLoadingMyFollowing) return null

  return dataMyFollowing ? (
    <div className="overflow-x-hidden">
      <div className="w-full bg-zinc-50 rounded-xl p-4">
        <div className="overflow-x-auto flex gap-2 shrink-0 scrollbar pb-3">
          {Object.keys(dataMyFollowing).map((elem: string, index: number) => (
            <StoryAvatar id={elem} key={index} />
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
