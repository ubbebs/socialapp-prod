import { ChangeEvent } from 'react'
import { ImageNotSelected } from '../../../../../components/imagePreview/ImageNotSelected'
import { ImageSelected } from '../../../../../components/imagePreview/ImageSelected'

type ImageAddPostType = {
  ImageState: File | null
  setImageState: React.Dispatch<React.SetStateAction<File | null>>
}

const ImageAddPost = (args: ImageAddPostType) => {
  const { ImageState, setImageState } = args
  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImageState(e.target.files[0])
  }
  const handleDeleteImage = () => {
    setImageState(null)
  }
  return (
    <div className="w-[400px] h-[400px] relative xl:w-[500px] xl:h-[500px]">
      {ImageState ? (
        <ImageSelected func={handleDeleteImage} AvatarState={ImageState} />
      ) : (
        <ImageNotSelected func={handleSelectFile} />
      )}
    </div>
  )
}

export { ImageAddPost }
