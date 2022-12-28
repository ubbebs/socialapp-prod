import { useGetAuthData } from '../../services/getAuthData'
import { useGetMyPosts } from '../../services/getMyPosts'
import { useGetMyData } from '../../services/getMyData'
import { Loader } from '../../components/loaders/Loader'
import { stateStore } from '../../stateStore'
import { Wrapper } from './HomePageWrapper'
import { useGetMyFollowingPosts } from '../../services/getMyFollowingPosts'

type HomePageDataType = {
  subpage: JSX.Element
}

const HomePageData = (props: HomePageDataType) => {
  const { subpage } = props
  const { isLoading: isLoadingAuthData } = useGetAuthData(
    stateStore.userid || ''
  )
  const { isLoading: isLoadingMyData } = useGetMyData(stateStore.userid || '')
  const { isLoading: isLoadingMyPosts } = useGetMyPosts(stateStore.userid || '')
  const { isLoading: isLoadingMyFollowingPosts } = useGetMyFollowingPosts(
    stateStore.userid || ''
  )

  return !isLoadingAuthData &&
    !isLoadingMyPosts &&
    !isLoadingMyData &&
    !isLoadingMyFollowingPosts ? (
    <Wrapper>{subpage}</Wrapper>
  ) : (
    <Loader />
  )
}

export { HomePageData }
