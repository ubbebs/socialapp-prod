import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Loader } from '../../components/loader/Loader'
import { useGetPosts } from '../homepage/utils/getPosts'
import { stateStore } from '../../stateStore'

const RefetchPosts = () => {
  const navigate = useNavigate()
  const { isLoading: isLoadingPosts } = useGetPosts(stateStore.userid || '')
  useEffect(() => {
    if (!isLoadingPosts) {
      navigate('/')
    }
  }, [isLoadingPosts, navigate])
  return <Loader />
}

export { RefetchPosts }
