import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query'
import { stateStore } from '../../../../stateStore'
import { postRemovePost } from './postRemovePost'

type ExecuteRemovePostType = {
  time: number
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>
}

const executeRemovePost = (args: ExecuteRemovePostType) => {
  const { time, refetch } = args
  postRemovePost({
    userid: stateStore.userid,
    time,
  })
  refetch()
}

export { executeRemovePost }
