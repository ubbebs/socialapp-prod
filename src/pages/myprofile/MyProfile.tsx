import { ButtonAddPost } from '../../components/buttons/ButtonAddPost'
import { MyPosts } from '../../features/posts/myposts/MyPosts'
import { ProfileDetails } from '../../features/profile/myprofile/ProfileDetails'

const MyProfile = () => {
  return (
    <>
      <ProfileDetails />
      <ButtonAddPost />
      <MyPosts />
    </>
  )
}

export { MyProfile }
