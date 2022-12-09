import { ChangeEvent } from 'react'
import { ImageNotSelected } from '../../imagePreview/ImageNotSelected'
import { ImageSelected } from '../../imagePreview/ImageSelected'

type AvatarSelectType = {
  AvatarState: File | null
  setAvatarState: React.Dispatch<React.SetStateAction<File | null>>
  title: string
}

const AvatarPersonalInfo = (args: AvatarSelectType) => {
  const { AvatarState, setAvatarState, title } = args
  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    return e.target.files && setAvatarState(e.target.files[0])
  }
  const handleDeleteFile = () => {
    setAvatarState(null)
  }
  return (
    <>
      <label className="pl-1 text-xs" htmlFor="Login">
        {title}
      </label>
      <div className="relative w-[150px] aspect-square">
        {AvatarState ? (
          <ImageSelected func={handleDeleteFile} AvatarState={AvatarState} />
        ) : (
          <ImageNotSelected func={handleSelectFile} />
        )}
      </div>
    </>
  )
}

export { AvatarPersonalInfo }
