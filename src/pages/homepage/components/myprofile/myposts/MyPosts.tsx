import moment from 'moment'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { stateStore } from '../../../../../stateStore'
import { useGetPosts } from '../../../utils/getPosts'
import { queryRemovePost } from './utils/queryRemovePost'

const MyPosts = () => {
  const {
    refetch,
    data: dataPosts,
    isLoading: isLoadingPosts,
  } = useGetPosts(stateStore.userid || '')

  return !isLoadingPosts ? (
    dataPosts !== '' ? (
      <ul className="overflow-auto flex gap-4 flex-col px-3 my-3">
        {Object.values(dataPosts).map((post: any, index) => {
          const backgroundImage = {
            backgroundImage: `url('${post.imageURL}')`,
          }
          return (
            <li
              className="h-[150px] w-full bg-zinc-100 lg:bg-white flex rounded-lg cursor-pointer"
              key={index}
            >
              <Link
                to={`/post/${post.timestamp}`}
                className="w-full h-full flex"
              >
                <div
                  className="w-[130px] h-[130px] m-[10px] flex-shrink rounded-lg bg-no-repeat bg-center bg-cover"
                  style={backgroundImage}
                />
                <div className="p-3 flex-grow flex flex-col justify-between">
                  <p>{post.description}</p>
                  <p>
                    {moment.unix(post.timestamp / 1000).format('DD/MM/YYYY')}
                  </p>
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
        })}
      </ul>
    ) : (
      <p>No posts... yet. Wanna add some post?</p>
    )
  ) : (
    <p>Loading</p>
  )
}

export { MyPosts }
