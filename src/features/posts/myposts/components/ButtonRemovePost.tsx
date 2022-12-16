import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query'
import { BsFillTrashFill } from 'react-icons/bs'
import { NavigateFunction } from 'react-router-dom'
import { executeRemovePost } from '../utils/executeRemovePost'

type ButtonRemovePostType = {
  timestamp: number
  navigate: NavigateFunction
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>
}

const ButtonRemovePost = (args: ButtonRemovePostType) => {
  const { timestamp, navigate, refetch } = args
  const funcRemovePost = () => {
    executeRemovePost({
      time: timestamp,
      navigate,
      refetch,
    })
  }
  return (
    <button
      type="button"
      className="p-3 m-3 rounded-3xl bg-red-500 text-white flex text-xs justify-center items-center gap-1"
      onClick={() => funcRemovePost()}
    >
      <BsFillTrashFill />
    </button>
  )
}

export { ButtonRemovePost }
