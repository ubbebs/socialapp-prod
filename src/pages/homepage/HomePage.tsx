import { useState } from 'react'
import { Header } from '../../components/header/Header'
import { UserInfo } from '../../components/userinfo/UserInfo'

const HomePage = () => {
  const [toggleUserInfo, setToggleUserInfo] = useState<boolean>(false)

  const handleClick = () => {
    setToggleUserInfo((prev) => !prev)
  }

  return (
    <div className="w-full flex flex-col">
      <Header func={handleClick} />
      <UserInfo hidden={toggleUserInfo} />
      <p>HomePage</p>
    </div>
  )
}

export { HomePage }
