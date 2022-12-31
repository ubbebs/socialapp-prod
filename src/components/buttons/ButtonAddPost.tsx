import { Link } from 'react-router-dom'

export const ButtonAddPost = () => {
  return (
    <Link to="/addpost" className="grow lg:grow-0">
      <button
        type="button"
        className="w-full p-2 px-7 gradient-linear rounded-full text-white text-sm font-semibold"
      >
        + Create a post
      </button>
    </Link>
  )
}
