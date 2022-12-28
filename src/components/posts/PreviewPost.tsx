import { Link } from 'react-router-dom'
import { background } from '../../utils/background'

type MapPostType = {
  description: string | null
  imageURL: string
  timestamp: number
  authorid: string
}

type PreviewPostType = {
  post: MapPostType
}

const PreviewPost = (args: PreviewPostType) => {
  const { post } = args
  return (
    <Link
      to={`/post/${post.authorid}/${post.timestamp}`}
      className="w-full aspect-square flex border rounded-lg"
    >
      <div
        className="w-full h-full rounded-lg bg-no-repeat bg-center bg-cover"
        style={background(post.imageURL)}
      />
    </Link>
  )
}

export { PreviewPost }
