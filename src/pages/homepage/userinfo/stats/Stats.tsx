import { useSnapshot } from 'valtio'
import { stateStore } from '../../../../stateStore'

const Stats = () => {
  const state = useSnapshot(stateStore)
  const postLength = state.posts ? Object.keys(state.posts).length : 0
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
