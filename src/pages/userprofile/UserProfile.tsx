import { UserProfileDetails } from '../../features/profile/userprofile/UserProfileDetails'
import { UserPosts } from '../../features/posts/userposts/UserPost'

const UserProfile = () => {
  return (
    <>
      <UserProfileDetails />
      <UserPosts />
    </>
  )
}

export { UserProfile }
