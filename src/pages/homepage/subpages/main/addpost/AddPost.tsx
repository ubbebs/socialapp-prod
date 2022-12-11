import { Link } from 'react-router-dom'

const AddPost = () => {
  return (
    <Link to="/addpost">
      <button
        type="button"
        className="p-2 px-7 gradient-linear rounded-full text-white text-sm font-semibold"
      >
        <span>+</span>
        <span className="hidden lg:inline-block"> Create a post</span>
      </button>
    </Link>
  )
}

export { AddPost }
