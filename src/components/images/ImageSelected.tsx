import { BiTrashAlt } from 'react-icons/bi'
import { background } from '../../utils/background'

type ImageSelectedType = {
  func: () => void
  AvatarState: File
}

export const ImageSelected = ({ func, AvatarState }: ImageSelectedType) => {
  return (
    <>
      <div className="w-full h-full bg-white rounded-3xl flex justify-center absolute">
        <div
          style={background(URL.createObjectURL(AvatarState))}
          className="h-full w-full max-w-full max-h-full rounded-3xl bg-center bg-contain bg-no-repeat"
        />
      </div>
      <button
        type="button"
        className="w-full h-full flex flex-col justify-center items-center opacity-0 bg-red-800/50 hover:opacity-100 rounded-3xl absolute duration-300 text-white"
        onClick={func}
      >
        <BiTrashAlt />
        <p>Delete image</p>
      </button>
    </>
  )
}
