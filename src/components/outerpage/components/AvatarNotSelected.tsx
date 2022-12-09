import { ChangeEvent } from 'react'

type AvatarNotSelectedType = {
  func: (e: ChangeEvent<HTMLInputElement>) => void | null
}

const AvatarNotSelected = (args: AvatarNotSelectedType) => {
  const { func } = args
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col border-2 border-black border-dashed rounded-3xl absolute top-0 left-0">
        <label className="pl-1 text-xs" htmlFor="File">
          Click here to select image
        </label>
      </div>
      <input
        className="focus:outline-none absolute w-full h-full top-0 left-0 opacity-0"
        type="file"
        name="file"
        id="File"
        accept="image/jpeg"
        onChange={func}
      />
    </>
  )
}

export default AvatarNotSelected
