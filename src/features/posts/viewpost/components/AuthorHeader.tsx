import moment from 'moment'
import { Link } from 'react-router-dom'
import { background } from '../../../../utils/background'

type AuthorHeaderType = {
  data: {
    photoURL: string
    displayName: string
    authorid: string
    timestamp: number
  }
}

const AuthorHeader = ({ data }: AuthorHeaderType) => {
  const { photoURL, displayName, authorid, timestamp } = data
  return (
    <Link
      to={`/profile/${authorid}`}
      className="w-full flex items-center gap-4"
    >
      <div
        className="w-[50px] lg:w-[50px] h-[50px] lg:h-[50px] bg-no-repeat bg-center bg-cover rounded-full"
        style={background(photoURL)}
      />
      <div>
        <p className="font-semibold text-xl">{displayName}</p>
        <p className="text-xs">
          Added: {moment.unix(timestamp / 1000).format('DD/MM/YYYY')}
        </p>
      </div>
    </Link>
  )
}

export { AuthorHeader }
