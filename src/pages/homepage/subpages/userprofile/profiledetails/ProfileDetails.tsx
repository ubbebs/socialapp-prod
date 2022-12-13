import { useParams } from 'react-router-dom'
import { useGetUsersPosts } from '../../../utils/getPosts'
import { useGetUserData } from '../../../utils/getUserData'
import { ProfileStats } from './stats/Stats'

const ProfileDetails = () => {
  const { uid } = useParams()
  const { data: dataUserData, isLoading: isLoadingUserData } = useGetUserData(
    uid || ''
  )
  const { isLoading: isLoadingUsersPosts } = useGetUsersPosts(uid || '')

  return !isLoadingUserData && !isLoadingUsersPosts ? (
    <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:items-start my-3">
      <div
        className="w-[150px] h-[150px] flex-shrink rounded-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url('${dataUserData.photoURL}')` }}
      />
      <div className="grow flex h-full flex-col gap-3 items-center sm:items-start">
        <p className="font-semibold text-xl">{dataUserData.displayName}</p>
        <p className="font-normal text-sm">@{dataUserData.accountName}</p>
        <p>{dataUserData.description}</p>
        <ProfileStats />
      </div>
    </div>
  ) : null
}

export { ProfileDetails }
