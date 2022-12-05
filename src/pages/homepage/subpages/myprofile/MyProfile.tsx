import { AddPost } from '../main/addpost/AddPost'
import { MyPosts } from './myposts/MyPosts'
import { ProfileDetails } from './profiledetails/ProfileDetails'

const MyProfile = () => {
  return (
    <div className="relative w-full h-full">
      <ProfileDetails />
      <AddPost />
      <MyPosts />
    </div>
  )
}

export { MyProfile }
