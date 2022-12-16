import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query'
import { NavigateFunction } from 'react-router-dom'
import { stateStore } from '../../../../stateStore'
import { postRemovePost } from './postRemovePost'

type ExecuteRemovePostType = {
  time: number
  navigate: NavigateFunction
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>
}

const executeRemovePost = (args: ExecuteRemovePostType) => {
  const { time, navigate, refetch } = args
  postRemovePost({
    userid: stateStore.userid,
    time,
  })
  navigate(-1)
  refetch()
}

export { executeRemovePost }
