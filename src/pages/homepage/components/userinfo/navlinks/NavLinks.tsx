import { AiFillHome } from 'react-icons/ai'
import { CiSearch, CiSettings } from 'react-icons/ci'
import { BiMoviePlay } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { logout } from '../utils/logout'

type NavLinksType = {
  func: React.Dispatch<React.SetStateAction<boolean>>
}

const NavLinks = (props: NavLinksType) => {
  const { func } = props
  return (
    <div className="flex flex-col gap-5 w-full px-6">
      <Link to="/" onClick={() => func(false)}>
        <button type="button" className="flex justify-start items-center gap-3">
          <AiFillHome />
          <p>Home</p>
        </button>
      </Link>
      <button type="button" className="flex justify-start items-center gap-3">
        <CiSearch />
        <p>Explore</p>
      </button>
      <button type="button" className="flex justify-start items-center gap-3">
        <BiMoviePlay />
        <p>Reels</p>
      </button>
      <Link to="/personalInfo" onClick={() => func(false)}>
        <button type="button" className="flex justify-start items-center gap-3">
          <CiSettings />
          Edit profile
        </button>
      </Link>
      <button
        type="button"
        className="flex justify-start items-center gap-3"
        onClick={logout}
      >
        <FiLogOut />
        Logout
      </button>
    </div>
  )
}

export { NavLinks }
