import { useState } from 'react'
import { Header } from '../../features/sidebar/header/Header'
import { Sidebar } from '../../features/sidebar/content/Sidebar'

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
    <div className="w-full min-h-screen flex flex-col lg:h-screen lg:flex-row bg-zinc-100">
      <div className="w-full flex flex-col lg:w-[325px] lg:gap-5 lg:shrink-0 font-medium">
        <Header func={handleClick} stateFunc={setToggleUserInfo} />
        <Sidebar hidden={toggleUserInfo} func={setToggleUserInfo} />
      </div>
      <div className="grow w-full mt-[100px] lg:mt-0 flex flex-col items-center relative bg-white rounded-l-3xl">
        <div className="grow flex flex-col gap-4 max-w-[640px] lg:max-w-[1000px] w-full h-full rounded-l-3xl p-6 lg:p-12 lg:h-full lg:bg-white relative scrollbar">
          {children}
        </div>
      </div>
    </div>
  )
}

export { Wrapper }
