import { useParams } from 'react-router-dom'
import { UserProfileDetails } from '../../features/profile/userprofile/UserProfileDetails'
import { UserPosts } from '../../features/posts/userposts/UserPost'
import { ButtonFollowUser } from '../../features/profile/userprofile/components/ButtonFollowUser'

export const UserProfile = () => {
  const { uid } = useParams()

  return (
    <div className="max-w-[600px] lg:max-w-[1200px] w-full flex flex-col gap-5 p-12">
      <UserProfileDetails />
      <ButtonFollowUser uid={uid || ''} />
      <UserPosts />
    </div>
  )
}
