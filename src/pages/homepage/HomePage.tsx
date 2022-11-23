import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Header } from './header/Header'
import { UserInfo } from './userinfo/UserInfo'
import { stateStore } from '../../stateStore'

type HomePageType = {
  subpage: JSX.Element
}

const HomePage = (props: HomePageType) => {
  const { subpage } = props
  const navigate = useNavigate()
  const [toggleUserInfo, setToggleUserInfo] = useState<boolean>(false)
  const localstorageValidate = () => {
    if (localStorage.getItem('userid') && !stateStore.userid) {
      stateStore.userid = localStorage.getItem('userid')
    }
    if (stateStore.userid) {
      localStorage.setItem('userid', stateStore.userid)
    }
  }
  localstorageValidate()
  const { userid } = stateStore

  const handleClick = () => {
    setToggleUserInfo((prev) => !prev)
  }

  const getUserData = async (uid: string) => {
    const res = await axios.get(`http://localhost:8383/getUserData?uid=${uid}`)
    return res.data
  }

  const getPersonalInfo = async (uid: string) => {
    const res = await axios.get(
      `http://localhost:8383/getPersonalInfo?uid=${uid}`
    )
    return res.data
  }

  const queryPosts = async (uid: string) => {
    const res = await axios.get(`http://localhost:8383/getPosts?uid=${uid}`)
    return res.data
  }

  const { data: dataUserData, isLoading: isLoadingUserData } = useQuery(
    ['userData'],
    () => getUserData(userid || ''),
    {
      enabled: !!userid,
    }
  )

  const { data: dataPersonalInfo, isLoading: isLoadingPersonalInfo } = useQuery(
    ['personalInfo'],
    () => getPersonalInfo(userid || ''),
    {
      enabled: !!userid,
    }
  )

  const { data: dataPosts, isLoading: isLoadingPosts } = useQuery(
    ['posts'],
    () => queryPosts(stateStore.userid || ''),
    {
      enabled: !!stateStore.userid,
    }
  )

  useEffect(() => {
    if (!isLoadingUserData && !isLoadingPersonalInfo && !isLoadingPosts) {
      stateStore.userData = {
        displayName: dataUserData.displayName,
        email: dataUserData.email,
        photoURL: dataUserData.photoURL,
      }
      stateStore.personalInfo = {
        description: dataPersonalInfo.description,
        name: dataPersonalInfo.name,
      }
      stateStore.posts = dataPosts
    }

    return () => {
      stateStore.userData = null
      stateStore.personalInfo = null
      stateStore.posts = null
    }
  }, [
    dataPersonalInfo,
    dataPosts,
    dataUserData,
    isLoadingPersonalInfo,
    isLoadingPosts,
    isLoadingUserData,
    navigate,
  ])

  return (
    <div className="w-full min-h-screen flex flex-col lg:h-screen lg:flex-row">
      <div className="w-full flex flex-col lg:w-[300px] lg:gap-5 lg:shrink-0">
        <Header func={handleClick} />
        <UserInfo hidden={toggleUserInfo} />
      </div>
      <div className="grow mt-[100px] lg:mt-0 lg:py-[20px] lg:pr-[20px]">
        <div className="flex flex-col gap-4 w-full rounded-[50px] p-3 lg:p-7 lg:h-full lg:bg-zinc-100 relative scrollbar">
          {subpage}
        </div>
      </div>
    </div>
  )
}

export { HomePage }
