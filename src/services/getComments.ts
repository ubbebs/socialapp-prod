import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

const useGetComments = (uid: string, key: string | boolean) => {
  const getComments = async () => {
    const res = await axios.get(
      `${VITE_SERVER_URL}/getComments?authorid=${uid}&key=${key}`
    )
    return res.data
  }

  return useQuery(['comments'], () => getComments(), { enabled: !!uid })
}

export { useGetComments }
