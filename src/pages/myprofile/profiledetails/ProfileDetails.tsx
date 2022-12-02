import { IoMdSettings } from 'react-icons/io'
import { stateStore } from '../../../stateStore'
import { useGetPersonalInfo } from '../../homepage/utils/getPersonalInfo'
import { ProfileStats } from './stats/Stats'

const ProfileDetails = () => {
  const { data: dataPersonalInfo, isLoading: isLoadingPersonalInfo } =
    useGetPersonalInfo(stateStore.userid || '')
  const backgroundImage = {
    backgroundImage: `url('${dataPersonalInfo.photoURL}')`,
  }

  return !isLoadingPersonalInfo ? (
    <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:items-start my-3">
      <div
        className="w-[150px] h-[150px] flex-shrink rounded-full bg-no-repeat bg-center bg-cover"
        style={backgroundImage}
      />
      <div className="grow flex h-full flex-col gap-3 items-center sm:items-start">
        <div className="flex gap-2">
          <p className="font-semibold text-xl">
            {dataPersonalInfo.displayName}
          </p>
          <button
            type="button"
            className="shrink-0 bg-zinc-100 p-2 rounded-3xl"
          >
            <IoMdSettings />
          </button>
        </div>
        <p className="font-normal text-sm">@{dataPersonalInfo.accountName}</p>
        <p>{dataPersonalInfo.description}</p>
        <ProfileStats />
      </div>
    </div>
  ) : null
}

export { ProfileDetails }
