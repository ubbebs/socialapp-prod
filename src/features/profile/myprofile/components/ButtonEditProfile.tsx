import { CiSettings } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export const ButtonEditProfile = () => {
  return (
    <Link to="/editprofile">
      <button
        type="button"
        className="flex p-2 px-7 bg-zinc-400 rounded-full text-white text-sm font-semibold justify-center items-center gap-1"
      >
        <CiSettings />
        Edit profile
      </button>
    </Link>
  )
}
