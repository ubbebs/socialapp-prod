import { ChangeEvent, useState } from 'react'
import { ImageNotSelected } from '../../../../components/images/ImageNotSelected'
import { ImageSelected } from '../../../../components/images/ImageSelected'

type AddPostImageType = {
  ImageState: File | null
  setImageState: React.Dispatch<React.SetStateAction<File | null>>
}

const filetypes = ['image/jpeg', 'image/jpg', 'image/png']

export const AddPostImage = ({
  ImageState,
  setImageState,
}: AddPostImageType) => {
  const [errorMsg, setErrorMsg] = useState(false)
  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.files &&
      filetypes.includes(e.target.files[0].type) &&
      e.target.files[0].size < 5242880
    ) {
      setErrorMsg(false)
      setImageState(e.target.files[0])
    } else {
      setErrorMsg(true)
    }
  }
  const handleDeleteImage = () => {
    setImageState(null)
  }
  return (
    <div className="w-[250px] h-[250px] relative lg:w-[500px] lg:h-[500px]">
      {ImageState ? (
        <ImageSelected func={handleDeleteImage} AvatarState={ImageState} />
      ) : (
        <>
          <ImageNotSelected func={handleSelectFile} />
          {errorMsg && (
            <p className="absolute w-full text-center -bottom-12 lg:-bottom-8 text-red-500 font-semibold">
              File too large or invalid file format (upload JPG/JPEG/PNG)
            </p>
          )}
        </>
      )}
    </div>
  )
}
