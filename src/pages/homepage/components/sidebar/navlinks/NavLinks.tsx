import { AiFillHome } from 'react-icons/ai'
import { CiSearch, CiSettings } from 'react-icons/ci'
import { BiMoviePlay } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import React from 'react'
import { logout } from '../utils/logout'
import { useGetPersonalInfo } from '../../../utils/getPersonalInfo'

type NavLinksType = {
  func: React.Dispatch<React.SetStateAction<boolean>>
}

const NavLinks = (props: NavLinksType) => {
  const { func } = props
  const { remove } = useGetPersonalInfo('')

  const logoutWithClearData = (e: React.FormEvent) => {
    e.preventDefault()
    remove()
    logout()
  }
  return (
    <div className="flex flex-col gap-2 w-full px-3">
      <Link
        to="/"
        onClick={() => func(false)}
        className="bg-white duration-500 hover:bg-indigo-600 hover:text-white rounded-2xl"
      >
        <button
          type="button"
          className="flex justify-start items-center gap-3 px-3 py-1"
        >
          <AiFillHome />
          <p>Home</p>
        </button>
      </Link>
      <Link
        to="/explore"
        onClick={() => func(false)}
        className="bg-white duration-500 hover:bg-indigo-600 hover:text-white rounded-2xl"
      >
        <button
          type="button"
          className="flex justify-start items-center gap-3 px-3 py-1"
        >
          <CiSearch />
          <p>Explore</p>
        </button>
      </Link>
      <button
        type="button"
        className="flex justify-start items-center gap-3 px-3 py-1 bg-white duration-500 hover:bg-indigo-600 hover:text-white rounded-2xl"
      >
        <BiMoviePlay />
        <p>Reels</p>
      </button>
      <Link
        to="/personalInfo"
        onClick={() => func(false)}
        className="bg-white duration-500 hover:bg-indigo-600 hover:text-white rounded-2xl"
      >
        <button
          type="button"
          className="flex justify-start items-center gap-3 px-3 py-1"
        >
          <CiSettings />
          Edit profile
        </button>
      </Link>
      <button
        type="button"
        className="flex justify-start items-center gap-3 px-3 py-1 bg-white duration-500 hover:bg-indigo-600 hover:text-white rounded-2xl"
        onClick={logoutWithClearData}
      >
        <FiLogOut />
        Logout
      </button>
    </div>
  )
}

export { NavLinks }
