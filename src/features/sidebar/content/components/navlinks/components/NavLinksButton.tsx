import React from 'react'
import { Link } from 'react-router-dom'

type NavLinksButtonType = {
  redirect: string
  func: React.Dispatch<React.SetStateAction<boolean>>
  icon: JSX.Element
  text: string
}

const NavLinksButton = (args: NavLinksButtonType) => {
  const { redirect, func, icon, text } = args
  return (
    <Link
      to={redirect}
      onClick={() => func(false)}
      className="duration-500 hover:text-gradient"
    >
      <button
        type="button"
        className="flex justify-start items-center gap-3 px-3 py-1"
      >
        <>
          {icon}
          <p>{text}</p>
        </>
      </button>
    </Link>
  )
}

export default NavLinksButton
