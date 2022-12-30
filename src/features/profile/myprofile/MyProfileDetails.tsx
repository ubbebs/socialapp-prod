import { stateStore } from '../../../stateStore'
import { useGetMyData } from '../../../services/getMyData'
import { MyProfileStats } from './components/MyProfileStats'
import { ProfileLayout } from '../components/ProfileLayout'

export const MyProfileDetails = () => {
  const { data: dataMyData, isLoading: isLoadingMyData } = useGetMyData(
    stateStore.userid || ''
  )

  return !isLoadingMyData ? (
    <ProfileLayout
      data={{
        photoURL: dataMyData.photoURL,
        displayName: dataMyData.displayName,
        accountName: dataMyData.accountName,
        description: dataMyData.description,
      }}
      stats={<MyProfileStats />}
    />
  ) : null
}
