import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetMyFollowingPosts = (uid: string) => {
  const getMyFollowingPosts = async (userid: string) => {
    const res = await axios.get(
      `${VITE_SERVER_URL}/getFollowingPosts?uid=${userid}`
    )
    return res.data
  }

  return useQuery(['myfollowingposts'], () => getMyFollowingPosts(uid), {
    enabled: !!uid,
  })
}

export { useGetMyFollowingPosts }
