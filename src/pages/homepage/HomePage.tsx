import { RiMessengerLine } from 'react-icons/ri'
import { CgBell } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { ButtonAddPost } from '../../components/buttons/ButtonAddPost'
import { FollowingPosts } from '../../features/posts/followingposts/FollowingPosts'
import { Stories } from '../../features/stories/Stories'

export const HomePage = () => {
  return (
    <div className="max-w-[600px] lg:max-w-[1200px] w-full flex flex-col gap-5 p-12">
      <div className="flex w-full items-center gap-3 lg:gap-0 lg:justify-between flex-col lg:flex-row">
        <Link to="/explore" className="duration-500 hover:text-gradient">
          <button
            type="button"
            className="flex justify-start w-[300px] items-center gap-2 p-2 bg-zinc-100 rounded-full text-sm text-zinc-500"
          >
            <>
              <CiSearch />
              <p>Explore</p>
            </>
          </button>
        </Link>
        <div className="flex gap-5 justify-between items-center text-zinc-600">
          <CgBell size={25} />
          <RiMessengerLine size={25} />
          <ButtonAddPost />
        </div>
      </div>
      <Stories />
      <FollowingPosts />
    </div>
  )
}
