import { stateStore } from '../../../../../stateStore'
import { useGetPosts } from '../../../utils/getPosts'

const Stats = () => {
  const { data: dataPosts } = useGetPosts(stateStore.userid || '')
  const postLength = Object.keys(dataPosts).length
  return (
    <div className="grid grid-cols-3 grid-rows-1 w-full max-w-[300px]">
      <p className="font-normal text-center text-md bg-white ">
        Posts: {postLength}
      </p>
      <p className="font-normal text-center text-md bg-white border-solid border-black border-x-[1px]">
        Posts: {0}
      </p>
      <p className="font-normal text-center text-md bg-white">Posts: {0}</p>
    </div>
  )
}

export { Stats }
