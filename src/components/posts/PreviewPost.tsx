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
      className="w-full aspect-square flex"
    >
      <div
        className="w-full h-full rounded-lg bg-no-repeat bg-center bg-cover"
        style={background(backgroundImage)}
      />
    </Link>
  )
}

export { PreviewPost }
