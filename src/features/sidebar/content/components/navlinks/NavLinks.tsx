import { AiFillHome } from 'react-icons/ai'
import { CiSearch, CiSettings } from 'react-icons/ci'
import { BiMoviePlay } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import React from 'react'
import { logout } from '../utils/logout'
import { useGetMyData } from '../../../../../services/getMyData'
import NavLinksButton from './components/NavLinksButton'

type NavLinksType = {
  func: React.Dispatch<React.SetStateAction<boolean>>
}

const NavLinks = (props: NavLinksType) => {
  const { func } = props
  const { remove } = useGetMyData('')

  const logoutWithClearData = (e: React.FormEvent) => {
    e.preventDefault()
    remove()
    logout()
  }
  return (
    <div className="flex flex-col gap-4 w-full max-w-[275px] px-3">
      <NavLinksButton
        redirect="/"
        func={func}
        icon={<AiFillHome />}
        text="Home"
      />
      <NavLinksButton
        redirect="/explore"
        func={func}
        icon={<CiSearch />}
        text="Explore"
      />
      <NavLinksButton
        redirect="/"
        func={func}
        icon={<BiMoviePlay />}
        text="Reels"
      />
      <NavLinksButton
        redirect="/editprofile"
        func={func}
        icon={<CiSettings />}
        text="Edit profile"
      />
      <button
        type="button"
        className="flex justify-start items-center gap-3 px-3 py-1 duration-500 hover:text-gradient"
        onClick={logoutWithClearData}
      >
        <FiLogOut />
        Logout
      </button>
    </div>
  )
}

export { NavLinks }
