import { Link } from 'react-router-dom'
import { useGetUserData } from '../../../services/getUserData'
import { background } from '../../../utils/background'

type StoryAvatarType = {
  id: string
}

const StoryAvatar = ({ id }: StoryAvatarType) => {
  const { data: dataUserData, isLoading: isLoadingUserData } = useGetUserData(
    id || ''
  )
  return !isLoadingUserData ? (
    <Link to={`/profile/${dataUserData.uid}`}>
      <div className="w-[120px] flex flex-col items-center gap-1">
        <div
          style={background(dataUserData.photoURL)}
          className="h-[90px] aspect-square rounded-full bg-center bg-cover bg-no-repeat"
        />
        <p className="text-center text-sm font-semibold">
          @{dataUserData.accountName}
        </p>
      </div>
    </Link>
  ) : null
}

export { StoryAvatar }
