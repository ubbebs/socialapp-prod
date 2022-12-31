import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserFollowers } from '../../../../services/getUserFollowers'
import { useGetUserFollowing } from '../../../../services/getUserFollowing'
import { useGetUserPosts } from '../../../../services/getUserPosts'

export const UserProfileStats = () => {
  const { uid } = useParams()
  const { data: dataUserPosts, isLoading: isLoadingMyPosts } = useGetUserPosts(
    uid || ''
  )
  const { data: dataUserFollowers, isLoading: isLoadingMyFollowers } =
    useGetUserFollowers(uid || '')
  const { data: dataUserFollowing, isLoading: isLoadingMyFollowing } =
    useGetUserFollowing(uid || '')

  if (isLoadingMyFollowers || isLoadingMyPosts || isLoadingMyFollowing)
    return null

  return dataUserPosts && dataUserFollowing && dataUserFollowers ? (
    <div className="flex gap-5 w-full max-w-[500px]">
      <p className="font-normal text-center text-md">
        Posts: <b>{Object.keys(dataUserPosts).length ?? 0}</b>
      </p>
      <p className="font-normal text-center text-md">
        <b>{Object.keys(dataUserFollowers).length ?? 0}</b> followers
      </p>
      <p className="font-normal text-center text-md">
        <b>{Object.keys(dataUserFollowing).length ?? 0}</b> following
      </p>
    </div>
  ) : null
}
