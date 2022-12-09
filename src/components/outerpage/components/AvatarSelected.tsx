import { BiTrashAlt } from 'react-icons/bi'

type AvatarSelectedType = {
  func: () => void
  AvatarState: File
}

const AvatarSelected = (args: AvatarSelectedType) => {
  const { func, AvatarState } = args
  return (
    <>
      <div className="w-full h-full bg-white rounded-3xl flex justify-center absolute">
        <img
          src={URL.createObjectURL(AvatarState)}
          alt="Upload preview"
          className="h-auto w-auto max-w-full max-h-full rounded-3xl"
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

export default AvatarSelected
