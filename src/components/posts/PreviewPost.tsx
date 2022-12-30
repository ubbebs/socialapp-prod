import { Link } from 'react-router-dom'
import { PostType } from '../../types/PostType'
import { background } from '../../utils/background'

type PreviewPostType = {
  post: PostType
}

const PreviewPost = ({
  post: { imageURL, timestamp, authorid },
}: PreviewPostType) => {
  return (
    <Link
      to={`/post/${authorid}/${timestamp}`}
      className="w-full aspect-square flex border rounded-lg"
    >
      <div
        className="w-full h-full rounded-lg bg-no-repeat bg-center bg-cover"
        style={background(imageURL)}
      />
    </Link>
  )
}

export { PreviewPost }
