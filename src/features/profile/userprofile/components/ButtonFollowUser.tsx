import { useMutation } from '@tanstack/react-query'
import { FollowButton } from '../../../../components/buttons/FollowButton'
import { FollowButtonLoader } from '../../../../components/loaders/FollowButtonLoader'
import { useGetMyFollowing } from '../../../../services/getMyFollowing'
import { stateStore } from '../../../../stateStore'
import { executeUserAddFollow } from '../utils/executeUserAddFollow'
import { executeUserRemoveFollow } from '../utils/executeUserRemoveFollow'
import { postUserAddFollow } from '../utils/postUserAddFollow'
import { postUserRemoveFollow } from '../utils/postUserRemoveFollow'

type ButtonFollowUserType = {
  uid: string
}

export const ButtonFollowUser = ({ uid }: ButtonFollowUserType) => {
  const { mutate: mutateAddFollow } = useMutation(postUserAddFollow)
  const { mutate: mutateRemoveFollow } = useMutation(postUserRemoveFollow)
  const { data: dataMyFollowing, isLoading: isLoadingMyFollowing } =
    useGetMyFollowing(stateStore.userid || '')
  const addFollow = () => {
    executeUserAddFollow({
      mutateAddFollow,
      uid,
    })
  }
  const removeFollow = () => {
    executeUserRemoveFollow({
      mutateRemoveFollow,
      uid,
    })
  }

  if (isLoadingMyFollowing) return <FollowButtonLoader />

  return dataMyFollowing && Object.keys(dataMyFollowing).includes(uid) ? (
    <FollowButton func={removeFollow} text="Unfollow" />
  ) : (
    <FollowButton func={addFollow} text="Follow" />
  )
}
