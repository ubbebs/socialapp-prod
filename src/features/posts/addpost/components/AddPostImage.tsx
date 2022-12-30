import { ChangeEvent } from 'react'
import { ImageNotSelected } from '../../../../components/images/ImageNotSelected'
import { ImageSelected } from '../../../../components/images/ImageSelected'

type AddPostImageType = {
  ImageState: File | null
  setImageState: React.Dispatch<React.SetStateAction<File | null>>
}

export const AddPostImage = ({
  ImageState,
  setImageState,
}: AddPostImageType) => {
  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImageState(e.target.files[0])
  }
  const handleDeleteImage = () => {
    setImageState(null)
  }
  return (
    <div className="w-[250px] h-[250px] relative lg:w-[500px] lg:h-[500px]">
      {ImageState ? (
        <ImageSelected func={handleDeleteImage} AvatarState={ImageState} />
      ) : (
        <ImageNotSelected func={handleSelectFile} />
      )}
    </div>
  )
}
