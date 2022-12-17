import { ButtonAddPost } from '../../components/buttons/ButtonAddPost'
import { MyPosts } from '../../features/posts/myposts/MyPosts'
import { ButtonEditProfile } from '../../features/profile/myprofile/components/ButtonEditProfile'
import { MyProfileDetails } from '../../features/profile/myprofile/MyProfileDetails'

const MyProfile = () => {
  return (
    <div className="max-w-[600px] lg:max-w-[1200px] w-full flex flex-col gap-5 p-12">
      <MyProfileDetails />
      <div className="flex gap-5">
        <ButtonAddPost />
        <ButtonEditProfile />
      </div>
      <div className="w-full flex justify-center">
        <MyPosts />
      </div>
    </div>
  )
}

export { MyProfile }
