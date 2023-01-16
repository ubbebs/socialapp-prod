import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const navigate = useNavigate()
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
