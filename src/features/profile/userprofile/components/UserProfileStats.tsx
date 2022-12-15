import { useParams } from 'react-router-dom'
import { useGetUserPosts } from '../../../../services/getUserPosts'

const UserProfileStats = () => {
  const { uid } = useParams()
  const { data: dataPosts } = useGetUserPosts(uid || '')
  const postLength = Object.keys(dataPosts).length
  return (
    <div className="flex gap-5 w-full max-w-[500px]">
      <p className="font-normal text-center text-md">
        Posts: <b>{postLength}</b>
      </p>
      <p className="font-normal text-center text-md">
        <b>{0}</b> following
      </p>
      <p className="font-normal text-center text-md">
        <b>{0}</b> followers
      </p>
    </div>
  )
}

export { UserProfileStats }