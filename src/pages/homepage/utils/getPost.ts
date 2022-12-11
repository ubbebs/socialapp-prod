import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetPost = (uid: string, key: string | boolean) => {
  const getPosts = async (userid: string, postkey: string | boolean) => {
    const res = await axios.get(
      `${VITE_SERVER_URL}/getPost?uid=${userid}&key=${postkey}`
    )
    return res.data
  }

  return useQuery(['post'], () => getPosts(uid, key), { enabled: !!uid })
}

export { useGetPost }
