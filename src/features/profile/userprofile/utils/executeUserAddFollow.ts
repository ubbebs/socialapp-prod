import { UseMutateFunction } from '@tanstack/react-query'
import { stateStore } from '../../../../stateStore'
import { queryClient } from '../../../../utils/queryClient'
import { PostUserFollowType } from './postUserAddFollow'

type ExecuteUserAddFollowType = {
  mutateAddFollow: UseMutateFunction<void, unknown, PostUserFollowType, unknown>
  uid: string
}

export const executeUserAddFollow = ({
  mutateAddFollow,
  uid,
}: ExecuteUserAddFollowType) => {
  mutateAddFollow(
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
