import { useMutation } from '@tanstack/react-query'
import { useGetMyFollowing } from '../../../../services/getMyFollowing'
import { stateStore } from '../../../../stateStore'
import { postUserAddFollow } from '../utils/postUserAddFollow'
import { postUserRemoveFollow } from '../utils/postUserRemoveFollow'

type ButtonFollowUserType = {
  uid: string
}

const ButtonFollowUser = (args: ButtonFollowUserType) => {
  const { uid } = args
  const { mutate: mutateAddFollow } = useMutation(postUserAddFollow)
  const { mutate: mutateRemoveFollow } = useMutation(postUserRemoveFollow)
  const {
    refetch: refetchMyFollowing,
    data: dataMyFollowing,
    isLoading: isLoadingMyFollowing,
  } = useGetMyFollowing(stateStore.userid || '')

  const addFollow = () => {
    mutateAddFollow(
      {
        userid: uid,
        myid: stateStore.userid || '',
      },
      {
        onSuccess: () => {
          refetchMyFollowing()
        },
      }
    )
  }

  const removeFollow = () => {
    mutateRemoveFollow(
      {
        userid: uid,
        myid: stateStore.userid || '',
      },
      {
        onSuccess: () => {
          refetchMyFollowing()
        },
      }
    )
  }

  return !isLoadingMyFollowing &&
    dataMyFollowing &&
    Object.keys(dataMyFollowing).includes(uid) ? (
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

export { ButtonFollowUser }
