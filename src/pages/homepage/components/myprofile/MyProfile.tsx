import { useState } from 'react'
import { AddPost } from '../main/addpost/AddPost'
import { MyPosts } from './myposts/MyPosts'
import { EditModal } from './profiledetails/editModal/EditModal'
import { ProfileDetails } from './profiledetails/ProfileDetails'

const MyProfile = () => {
  const [editModal, setEditModal] = useState<boolean>(false)
  return (
    <div className="relative w-full h-full">
      <ProfileDetails func={setEditModal} />
      <AddPost />
      <MyPosts />
      {editModal ? <EditModal func={setEditModal} /> : null}
    </div>
  )
}

export { MyProfile }
