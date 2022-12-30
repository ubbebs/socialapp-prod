import { BsFillTrashFill } from 'react-icons/bs'
import { NavigateFunction } from 'react-router-dom'
import { executeRemovePost } from '../utils/executeRemovePost'

type ButtonRemovePostType = {
  timestamp: number
  navigate: NavigateFunction
}

export const ButtonRemovePost = ({
  timestamp,
  navigate,
}: ButtonRemovePostType) => {
  const funcRemovePost = () => {
    executeRemovePost({
      time: timestamp,
      navigate,
    })
  }
  return (
    <button
      type="button"
      className="p-3 m-3 rounded-3xl bg-red-500 text-white flex text-xs justify-center items-center gap-1"
      onClick={() => funcRemovePost()}
    >
      <BsFillTrashFill />
    </button>
  )
}
