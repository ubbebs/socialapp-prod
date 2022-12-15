import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query'
import { BsFillTrashFill } from 'react-icons/bs'
import { executeRemovePost } from '../utils/executeRemovePost'

type ButtonRemovePostType = {
  timestamp: number
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>
}

const ButtonRemovePost = (args: ButtonRemovePostType) => {
  const { timestamp, refetch } = args
  const funcRemovePost = () => {
    executeRemovePost({
      time: timestamp,
      refetch,
    })
  }
  return (
    <div className="absolute bottom-0 right-0 flex justify-center items-center bg-white rounded-tl-2xl">
      <button
        type="button"
        className="px-2 py-1 m-3 rounded-3xl bg-red-500 text-white flex text-xs justify-center items-center gap-1"
        onClick={() => funcRemovePost()}
      >
        <p>Delete post</p>
        <BsFillTrashFill />
      </button>
    </div>
  )
}

export { ButtonRemovePost }
