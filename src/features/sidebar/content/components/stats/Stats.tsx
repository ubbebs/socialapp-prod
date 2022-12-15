import { useGetMyPosts } from '../../../../../services/getMyPosts'
import { stateStore } from '../../../../../stateStore'

const Stats = () => {
  const { data: dataMyPosts } = useGetMyPosts(stateStore.userid || '')
  const postLength = Object.keys(dataMyPosts).length
  return (
    <div className="grid grid-cols-3 grid-rows-1 w-full max-w-[300px] text-md">
      <p className="text-center">Posts: {postLength}</p>
      <p className="text-center border-solid border-black border-x-[1px]">
        Posts: {0}
      </p>
      <p className="text-center">Posts: {0}</p>
    </div>
  )
}

export { Stats }
