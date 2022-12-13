import { useGetMyFBData } from './utils/getMyFBData'
import { useGetMyPosts } from './utils/getPosts'
import { useGetPersonalInfo } from './utils/getPersonalInfo'
import { Loader } from '../../components/loader/Loader'
import { stateStore } from '../../stateStore'
import { Wrapper } from './components/wrapper/Wrapper'

type HomePageType = {
  subpage: JSX.Element
}

const HomePage = (props: HomePageType) => {
  const { subpage } = props
  const { isLoading: isLoadingUserData } = useGetMyFBData(
    stateStore.userid || ''
  )
  const { isLoading: isLoadingPersonalInfo } = useGetPersonalInfo(
    stateStore.userid || ''
  )
  const { isLoading: isLoadingPosts } = useGetMyPosts(stateStore.userid || '')

  return !isLoadingPersonalInfo && !isLoadingPosts && !isLoadingUserData ? (
    <Wrapper>{subpage}</Wrapper>
  ) : (
    <Loader />
  )
}

export { HomePage }
