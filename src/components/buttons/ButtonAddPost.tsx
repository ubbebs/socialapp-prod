import { Link } from 'react-router-dom'

export const ButtonAddPost = () => {
  return (
    <Link to="/addpost">
      <button
        type="button"
        className="p-2 px-7 gradient-linear rounded-full text-white text-sm font-semibold"
      >
        + Create a post
      </button>
    </Link>
  )
}
