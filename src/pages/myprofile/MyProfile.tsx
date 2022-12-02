import { AddPost } from '../homepage/components/main/addpost/AddPost'
import { MyPosts } from './myposts/MyPosts'
import { ProfileDetails } from './profiledetails/ProfileDetails'

const MyProfile = () => {
  return (
    <>
      <ProfileDetails />
      <AddPost />
      <MyPosts />
    </>
  )
}

export { MyProfile }
