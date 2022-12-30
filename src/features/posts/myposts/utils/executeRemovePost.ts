import { NavigateFunction } from 'react-router-dom'
import { stateStore } from '../../../../stateStore'
import { queryClient } from '../../../../utils/queryClient'
import { postRemovePost } from './postRemovePost'

type ExecuteRemovePostType = {
  time: number
  navigate: NavigateFunction
}

export const executeRemovePost = ({
  time,
  navigate,
}: ExecuteRemovePostType) => {
  postRemovePost({
    userid: stateStore.userid,
    time,
  })
  queryClient.invalidateQueries()
  navigate(-1)
}
