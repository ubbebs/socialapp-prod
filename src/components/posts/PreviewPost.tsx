import moment from 'moment'
import { Link } from 'react-router-dom'
import { background } from '../../utils/background'

type MapPostType = {
  description: string
  imageURL: string
  timestamp: number
  authorid: string
}

type PreviewPostType = {
  post: MapPostType
  backgroundImage: string
}

const PreviewPost = (args: PreviewPostType) => {
  const { post, backgroundImage } = args
  return (
    <Link
      to={`/post/${post.authorid}/${post.timestamp}`}
      className="w-full h-full flex"
    >
      <div
        className="w-[130px] h-[130px] m-[10px] flex-shrink rounded-lg bg-no-repeat bg-center bg-cover"
        style={background(backgroundImage)}
      />
      <div className="p-3 flex-grow flex flex-col justify-between">
        <p>{post.description}</p>
        <p>{moment.unix(post.timestamp / 1000).format('DD/MM/YYYY')}</p>
      </div>
    </Link>
  )
}

export { PreviewPost }
