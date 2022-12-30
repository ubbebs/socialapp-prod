import { useMutation } from '@tanstack/react-query'
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

  if (isLoadingMyFollowing) return <p>Loading...</p>

  return Object.keys(dataMyFollowing).includes(uid) ? (
    <button
      type="button"
      className="flex p-2 px-7 bg-zinc-400 rounded-full text-white text-sm font-semibold justify-center items-center gap-1"
      onClick={removeFollow}
    >
      Unfollow
    </button>
  ) : (
    <button
      type="button"
      className="flex p-2 px-7 bg-zinc-400 rounded-full text-white text-sm font-semibold justify-center items-center gap-1"
      onClick={addFollow}
    >
      Follow
    </button>
  )
}
