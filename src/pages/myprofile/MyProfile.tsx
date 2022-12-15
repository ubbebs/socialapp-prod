import { ButtonAddPost } from '../../components/buttons/ButtonAddPost'
import { MyPosts } from '../../features/posts/myposts/MyPosts'
import { ButtonEditProfile } from '../../features/profile/myprofile/components/ButtonEditProfile'
import { MyProfileDetails } from '../../features/profile/myprofile/MyProfileDetails'

const MyProfile = () => {
  return (
    <>
      <MyProfileDetails />
      <div className="flex gap-5">
        <ButtonAddPost />
        <ButtonEditProfile />
      </div>
      <div className="w-full flex justify-center">
        <MyPosts />
      </div>
    </>
  )
}

export { MyProfile }
