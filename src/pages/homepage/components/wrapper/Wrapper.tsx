import { useState } from 'react'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'

type WrapperType = {
  children: JSX.Element
}

const Wrapper = (args: WrapperType) => {
  const { children } = args
  const [toggleUserInfo, setToggleUserInfo] = useState<boolean>(false)
  const handleClick = () => {
    setToggleUserInfo((prev) => !prev)
  }
  return (
    <div className="w-full min-h-screen flex flex-col lg:h-screen lg:flex-row">
      <div className="w-full flex flex-col lg:w-[300px] lg:gap-5 lg:shrink-0">
        <Header func={handleClick} stateFunc={setToggleUserInfo} />
        <Sidebar hidden={toggleUserInfo} func={setToggleUserInfo} />
      </div>
      <div className="grow mt-[100px] lg:my-[20px] lg:mr-[20px] flex flex-col items-center relative">
        <div className="grow flex flex-col gap-4 max-w-[640px] lg:max-w-none w-full h-full rounded-3xl p-3 lg:p-7 lg:h-full lg:bg-zinc-100 relative scrollbar">
          {children}
        </div>
      </div>
    </div>
  )
}

export { Wrapper }
