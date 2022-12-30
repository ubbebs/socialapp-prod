import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export const fetcher = async <T = unknown>(query: string) => {
  const res = await axios.get<T>(`${VITE_SERVER_URL}${query}`)
  return res.data
}
