import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { stateStore } from '../../../stateStore'

type ElemType = {
  description: string | null
  imageURL: string
}

const MyPosts = () => {
  const state = useSnapshot(stateStore)
  return (
    <>
      {!state.posts ? (
        <p>No posts :C</p>
      ) : (
        Object.values(state.posts).map((elem: any, index) => {
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
