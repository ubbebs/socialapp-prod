import { UseMutateFunction } from '@tanstack/react-query'
import { stateStore } from '../../../../stateStore'
import { queryClient } from '../../../../utils/queryClient'
import { PostUserFollowType } from './postUserAddFollow'

type ExecuteUserRemoveFollowType = {
  mutateRemoveFollow: UseMutateFunction<
    void,
    unknown,
    PostUserFollowType,
    unknown
  >
  uid: string
}

export const executeUserRemoveFollow = ({
  mutateRemoveFollow,
  uid,
}: ExecuteUserRemoveFollowType) => {
  mutateRemoveFollow(
    {
      userid: uid,
      myid: stateStore.userid || '',
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries()
      },
    }
  )
}
