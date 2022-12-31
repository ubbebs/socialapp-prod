import { useParams } from 'react-router-dom'
import { ProfileLayoutLoader } from '../../../components/loaders/ProfileLayoutLoader'
import { useGetUserData } from '../../../services/getUserData'
import { useGetUserPosts } from '../../../services/getUserPosts'
import { ProfileLayout } from '../components/ProfileLayout'
import { UserProfileStats } from './components/UserProfileStats'

export const UserProfileDetails = () => {
  const { uid } = useParams()
  const { data: dataUserData, isLoading: isLoadingUserData } = useGetUserData(
    uid || ''
  )
  const { isLoading: isLoadingUsersPosts } = useGetUserPosts(uid || '')

  if (isLoadingUserData || isLoadingUsersPosts) return <ProfileLayoutLoader />

  return !isLoadingUserData && !isLoadingUsersPosts && dataUserData ? (
    <ProfileLayout
      data={{
        photoURL: dataUserData.photoURL,
        displayName: dataUserData.displayName,
        accountName: dataUserData.accountName,
        description: dataUserData.description,
      }}
      stats={<UserProfileStats />}
    />
  ) : null
}
