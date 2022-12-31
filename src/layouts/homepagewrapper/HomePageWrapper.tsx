import { useState } from 'react'
import { Header } from '../../features/sidebar/header/Header'
import { Sidebar } from '../../features/sidebar/content/Sidebar'

type WrapperType = {
  children: JSX.Element
}

export const Wrapper = ({ children }: WrapperType) => {
  const [toggleUserInfo, setToggleUserInfo] = useState<boolean>(false)
  const handleClick = () => {
    setToggleUserInfo((prev) => !prev)
  }
  return (
    <div className="w-full min-h-screen flex flex-col lg:h-screen lg:flex-row bg-zinc-100">
      <div className="w-full flex flex-col lg:w-[325px] lg:gap-5 lg:shrink-0 font-medium">
        <Header
          func={handleClick}
          stateFunc={setToggleUserInfo}
          hidden={toggleUserInfo}
        />
        <Sidebar hidden={toggleUserInfo} func={setToggleUserInfo} />
      </div>
      <div className="grow w-full mt-[100px] lg:mt-0 flex bg-white rounded-none lg:rounded-l-3xl overflow-x-hidden">
        <div className="flex flex-col gap-4 w-full h-full items-center rounded-none lg:rounded-l-3xl lg:h-full lg:bg-white scrollbar overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}
