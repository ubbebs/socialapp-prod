import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPost = (uid: string, key: string | boolean) => {
  const getPosts = async (userid: string, postkey: string | boolean) => {
    const res = await axios.get(
      `http://localhost:8383/getPost?uid=${userid}&key=${postkey}`
    )
    return res.data
  }

  return useQuery(['post'], () => getPosts(uid, key), { enabled: !!uid })
}

export { useGetPost }
