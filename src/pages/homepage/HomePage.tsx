import { useState } from 'react'
import { Header } from './components/header/Header'
import { UserInfo } from './components/userinfo/UserInfo'
import { useGetUserData } from './utils/getUserData'
import { useGetPosts } from './utils/getPosts'
import { useGetPersonalInfo } from './utils/getPersonalInfo'
import { Loader } from '../../components/loader/Loader'
import { stateStore } from '../../stateStore'

type HomePageType = {
  subpage: JSX.Element
}

const HomePage = (props: HomePageType) => {
  const { subpage } = props
  const [toggleUserInfo, setToggleUserInfo] = useState<boolean>(false)
  const { isLoading: isLoadingUserData } = useGetUserData(
    stateStore.userid || ''
  )
  const { isLoading: isLoadingPersonalInfo } = useGetPersonalInfo(
    stateStore.userid || ''
  )
  const { isLoading: isLoadingPosts } = useGetPosts(stateStore.userid || '')

  const handleClick = () => {
    setToggleUserInfo((prev) => !prev)
  }

  return !isLoadingPersonalInfo && !isLoadingPosts && !isLoadingUserData ? (
    <div className="w-full min-h-screen flex flex-col lg:h-screen lg:flex-row">
      <div className="w-full flex flex-col lg:w-[300px] lg:gap-5 lg:shrink-0">
        <Header func={handleClick} stateFunc={setToggleUserInfo} />
        <UserInfo hidden={toggleUserInfo} func={setToggleUserInfo} />
      </div>
      <div className="grow mt-[100px] lg:my-[20px] lg:mr-[20px] flex flex-col relative">
        <div className="grow flex flex-col gap-4 w-full h-full rounded-3xl p-3 lg:p-7 lg:h-full lg:bg-zinc-100 relative scrollbar">
          {subpage}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export { HomePage }
