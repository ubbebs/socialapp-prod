import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query'
import moment from 'moment'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { stateStore } from '../../../../../../stateStore'
import { queryRemovePost } from '../utils/queryRemovePost'

type MapPostType = {
  description: string
  imageURL: string
  timestamp: number
}

type PostElemType = {
  post: MapPostType
  backgroundImage: { backgroundImage: string }
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>
}

const PostElem = (args: PostElemType) => {
  const { post, backgroundImage, refetch } = args
  return (
    <li className="h-[150px] w-full bg-zinc-100 lg:bg-white flex rounded-lg cursor-pointer">
      <Link to={`/post/${post.timestamp}`} className="w-full h-full flex">
        <div
          className="w-[130px] h-[130px] m-[10px] flex-shrink rounded-lg bg-no-repeat bg-center bg-cover"
          style={backgroundImage}
        />
        <div className="p-3 flex-grow flex flex-col justify-between">
          <p>{post.description}</p>
          <p>{moment.unix(post.timestamp / 1000).format('DD/MM/YYYY')}</p>
        </div>
      </Link>
      <button
        type="button"
        className="p-1 rounded-md bg-red-500 text-white h-auto"
        onClick={() => {
          queryRemovePost({
            userid: stateStore.userid,
            time: post.timestamp,
          })
          refetch()
        }}
      >
        <BsFillTrashFill />
      </button>
    </li>
  )
}

export { PostElem }
