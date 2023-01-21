import { useParams } from 'react-router-dom'
import { UserProfileDetails } from '../../features/profile/userprofile/UserProfileDetails'
import { UserPosts } from '../../features/posts/userposts/UserPost'
import { ButtonFollowUser } from '../../features/profile/userprofile/components/ButtonFollowUser'
import { useGetUserData } from '../../services/getUserData'
import { SmallLoader } from '../../components/loaders/SmallLoader'

export const UserProfile = () => {
  const { uid } = useParams()
  const { data, isLoading } = useGetUserData(uid || '')

  if (isLoading) return <SmallLoader />

  return (
    <div className="max-w-[600px] lg:max-w-[1200px] w-full flex flex-col gap-5 px-12 pb-12 lg:p-12">
      {data ? (
        <>
          <UserProfileDetails />
          <ButtonFollowUser uid={uid || ''} />
          <UserPosts />
        </>
      ) : (
        <h2 className="text-2xl font-semibold text-center text-zinc-500">
          User not found :C
        </h2>
      )}
    </div>
  )
}
