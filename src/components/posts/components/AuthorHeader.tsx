import moment from 'moment'
import { Link } from 'react-router-dom'
import { background } from '../../../utils/background'

type AuthorHeaderType = {
  data: {
    photoURL: string
    displayName: string
    authorid: string
    timestamp: number | null
  }
}

export const AuthorHeader = ({
  data: { photoURL, displayName, authorid, timestamp },
}: AuthorHeaderType) => {
  return (
    <Link
      to={`/profile/${authorid}`}
      className="w-full flex items-center gap-4"
    >
      <div
        className="w-[50px] lg:w-[50px] h-[50px] lg:h-[50px] bg-no-repeat bg-center bg-cover rounded-full flex shrink-0"
        style={background(photoURL)}
      />
      <div>
        <p className="font-semibold text-basic">{displayName}</p>
        {timestamp && (
          <p
            className="text-xs"
            title={moment.unix(timestamp / 1000).format('DD MMMM YYYY HH:MM')}
          >
            {moment.unix(timestamp / 1000).format('DD/MM/YY')}
          </p>
        )}
      </div>
    </Link>
  )
}
