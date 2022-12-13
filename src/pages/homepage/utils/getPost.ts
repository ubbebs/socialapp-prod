import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetPost = (uid: string, key: string | boolean) => {
  const getPosts = async () => {
    const res = await axios.get(
      `${VITE_SERVER_URL}/getPost?authorid=${uid}&key=${key}`
    )
    return res.data
  }

  return useQuery(['post'], () => getPosts(), { enabled: !!uid })
}

export { useGetPost }
