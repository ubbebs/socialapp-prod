import { ChangeEvent } from 'react'
import AvatarNotSelected from './AvatarNotSelected'
import AvatarSelected from './AvatarSelected'

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
          <AvatarSelected func={handleDeleteFile} AvatarState={AvatarState} />
        ) : (
          <AvatarNotSelected func={handleSelectFile} />
        )}
      </div>
    </>
  )
}

export { AvatarPersonalInfo }
