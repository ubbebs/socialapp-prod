import { MyPosts } from './myposts/MyPosts'
import { ProfileDetails } from './profiledetails/ProfileDetails'

const MyProfile = () => {
  return (
    <>
      <ProfileDetails />
      <MyPosts />
    </>
  )
}

export { MyProfile }
