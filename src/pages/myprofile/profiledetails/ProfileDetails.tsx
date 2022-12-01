import { stateStore } from '../../../stateStore'
import { useGetPersonalInfo } from '../../homepage/utils/getPersonalInfo'

const ProfileDetails = () => {
  const { data: dataPersonalInfo, isLoading: isLoadingPersonalInfo } =
    useGetPersonalInfo(stateStore.userid || '')

  const backgroundImage = {
    backgroundImage: `url('${dataPersonalInfo.photoURL}')`,
  }
  return !isLoadingPersonalInfo ? (
    <div className="w-full bg-red-500 flex flex-col items-center gap-2 sm:flex-row sm:items-start">
      <div
        className="w-[150px] h-[150px] flex-shrink rounded-lg bg-no-repeat bg-center bg-cover"
        style={backgroundImage}
      />
      <div className="flex flex-col gap-2 items-center sm:items-start">
        <p className="font-semibold text-xl">{dataPersonalInfo.displayName}</p>
        <p className="font-normal text-sm">@{dataPersonalInfo.accountName}</p>
        <p>{dataPersonalInfo.description}</p>
      </div>
    </div>
  ) : null
}

export { ProfileDetails }
