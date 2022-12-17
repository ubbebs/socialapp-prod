import { UserProfileDetails } from '../../features/profile/userprofile/UserProfileDetails'
import { UserPosts } from '../../features/posts/userposts/UserPost'

const UserProfile = () => {
  return (
    <div className="max-w-[600px] lg:max-w-[1200px] w-full flex flex-col gap-5 p-12">
      <UserProfileDetails />
      <UserPosts />
    </div>
  )
}

export { UserProfile }
