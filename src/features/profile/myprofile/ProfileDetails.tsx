import { stateStore } from '../../../stateStore'
import { useGetMyData } from '../../../services/getMyData'
import { ProfileStats } from './components/Stats'
import { background } from '../../../utils/background'

const ProfileDetails = () => {
  const { data: dataMyData, isLoading: isLoadingMyData } = useGetMyData(
    stateStore.userid || ''
  )

  return !isLoadingMyData ? (
    <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:items-start my-3">
      <div
        className="w-[150px] h-[150px] flex-shrink rounded-full bg-no-repeat bg-center bg-cover"
        style={background(dataMyData.photoURL)}
      />
      <div className="grow flex h-full flex-col gap-3 items-center sm:items-start">
        <p className="font-semibold text-xl">{dataMyData.displayName}</p>
        <p className="font-normal text-sm">@{dataMyData.accountName}</p>
        <p>{dataMyData.description}</p>
        <ProfileStats />
      </div>
    </div>
  ) : null
}

export { ProfileDetails }
