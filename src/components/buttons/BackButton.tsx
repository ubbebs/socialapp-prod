import { AiOutlineArrowLeft } from 'react-icons/ai'
import { NavigateFunction } from 'react-router-dom'

type BackButtonType = {
  navigate: NavigateFunction
}

const BackButton = (args: BackButtonType) => {
  const { navigate } = args
  return (
    <button
      type="button"
      className="w-full flex justify-start items-center p-2"
      onClick={() => navigate(-1)}
    >
      <AiOutlineArrowLeft size={13} />
      <p>Back</p>
    </button>
  )
}

export { BackButton }
