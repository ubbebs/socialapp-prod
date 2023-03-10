import { ButtonAddPost } from '../../components/buttons/ButtonAddPost'
import { MyPosts } from '../../features/posts/myposts/MyPosts'
import { ButtonEditProfile } from '../../features/profile/myprofile/components/ButtonEditProfile'
import { MyProfileDetails } from '../../features/profile/myprofile/MyProfileDetails'

export const MyProfile = () => {
  return (
    <div className="max-w-[600px] lg:max-w-[1200px] w-full flex flex-col gap-5 px-12 pb-12 lg:p-12">
      <MyProfileDetails />
      <div className="flex gap-2 sm:gap-5 flex-col sm:flex-row justify-start">
        <ButtonAddPost />
        <ButtonEditProfile />
      </div>
      <div className="w-full flex justify-center">
        <MyPosts />
      </div>
    </div>
  )
}
