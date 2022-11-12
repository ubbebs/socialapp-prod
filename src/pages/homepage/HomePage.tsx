import { useState } from 'react'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { UserInfo } from '../../components/userinfo/UserInfo'

const HomePage = () => {
  const [toggleUserInfo, setToggleUserInfo] = useState<boolean>(false)

  const handleClick = () => {
    setToggleUserInfo((prev) => !prev)
  }

  return (
    <div className="w-full min-h-screen flex flex-col lg:h-screen lg:flex-row">
      <div className="w-full flex flex-col lg:w-[300px] lg:gap-5">
        <Header func={handleClick} />
        <UserInfo hidden={toggleUserInfo} />
      </div>
      <Main />
    </div>
  )
}

export { HomePage }
