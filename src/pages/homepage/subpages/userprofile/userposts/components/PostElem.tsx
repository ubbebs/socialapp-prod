import moment from 'moment'
import { Link } from 'react-router-dom'

type MapPostType = {
  description: string
  imageURL: string
  timestamp: number
  authorid: string
}

type PostElemType = {
  post: MapPostType
  backgroundImage: { backgroundImage: string }
}

const PostElem = (args: PostElemType) => {
  const { post, backgroundImage } = args
  return (
    <li className="h-[150px] w-full bg-zinc-100 lg:bg-white flex rounded-lg cursor-pointer">
      <Link
        to={`/post/${post.authorid}/${post.timestamp}`}
        className="w-full h-full flex"
      >
        <div
          className="w-[130px] h-[130px] m-[10px] flex-shrink rounded-lg bg-no-repeat bg-center bg-cover"
          style={backgroundImage}
        />
        <div className="p-3 flex-grow flex flex-col justify-between">
          <p>{post.description}</p>
          <p>{moment.unix(post.timestamp / 1000).format('DD/MM/YYYY')}</p>
        </div>
      </Link>
    </li>
  )
}

export { PostElem }
