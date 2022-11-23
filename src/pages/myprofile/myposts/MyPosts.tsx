import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { stateStore } from '../../../stateStore'

type ElemType = {
  description: string | null
  imageURL: string
}

const MyPosts = () => {
  const queryPosts = async (uid: string) => {
    const res = await axios.get(`http://localhost:8383/getPosts?uid=${uid}`)
    return res.data
  }

  const { data: dataPosts, isLoading: isLoadingPosts } = useQuery(
    ['posts'],
    () => queryPosts(stateStore.userid || ''),
    {
      enabled: !!stateStore.userid,
    }
  )

  useEffect(() => {
    if (!isLoadingPosts) {
      stateStore.posts = dataPosts
      console.log(stateStore.posts)
      console.log(dataPosts)
    }
  }, [dataPosts, isLoadingPosts])

  return (
    <>
      {!dataPosts ? (
        <p>No posts :C</p>
      ) : (
        Object.values(dataPosts).map((elem: any, index) => {
          return (
            <div key={index}>
              <p>{elem.description}</p>
              <img src={elem.imageURL} alt="siema" className="w-[100px]" />
            </div>
          )
        })
      )}
    </>
  )
}

export { MyPosts }
