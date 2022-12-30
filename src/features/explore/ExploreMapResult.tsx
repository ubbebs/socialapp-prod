import { Link } from 'react-router-dom'
import { stateStore } from '../../stateStore'
import { background } from '../../utils/background'

type ExploreMapResultType = {
  data: {
    accountName: string
    displayName: string
    photoURL: string
    uid: string
  }
}

export const ExploreMapResult = ({
  data: { accountName, displayName, photoURL, uid },
}: ExploreMapResultType) => {
  return (
    <Link to={stateStore.userid === uid ? '/myprofile' : `/profile/${uid}`}>
      <div className="w-full bg-white flex items-center gap-3 rounded-full">
        <div
          className="w-[50px] h-[50px] m-[5px] flex-shrink rounded-full bg-no-repeat bg-center bg-cover"
          style={background(photoURL)}
        />
        <p className="font-semibold">{displayName}</p>
        <p className="font-semibold text-zinc-400">(@{accountName})</p>
      </div>
    </Link>
  )
}
