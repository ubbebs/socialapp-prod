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
    <button
      type="button"
      className="p-1 rounded-md bg-red-500 text-white h-auto"
      onClick={() => funcRemovePost()}
    >
      <BsFillTrashFill />
    </button>
  )
}

export { ButtonRemovePost }
