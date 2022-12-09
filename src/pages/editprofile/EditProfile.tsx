import { useMutation } from '@tanstack/react-query'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { useRef, useState } from 'react'
import { MdLockOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { AvatarPersonalInfo } from '../../components/outerpage/components/AvatarPersonalInfo'
import { BackButton } from '../../components/outerpage/components/BackButton'
import { ErrorText } from '../../components/outerpage/components/ErrorText'
import { InputDiv } from '../../components/outerpage/components/InputDiv'
import { SuccessText } from '../../components/outerpage/components/SuccessText'
import { TextArea } from '../../components/outerpage/components/TextArea'
import { Title } from '../../components/outerpage/components/Title'
import { OuterPage } from '../../components/outerpage/OuterPage'
import { SubmitButton } from './components/SubmitButton'
import { avatarExecute } from './utils/avatarExecute'
import { descriptionExecute } from './utils/descriptionExecute'
import { displayNameExecute } from './utils/displayNameExecute'
import { postAvatar } from './utils/postAvatar'
import { postDescription } from './utils/postDescription'
import { postDisplayName } from './utils/postDisplayName'

function EditProfile() {
  const auth = getAuth()
  const storage = getStorage()
  const navigate = useNavigate()
  const { mutate: mutateAvatar } = useMutation(postAvatar)
  const { mutate: mutateDisplayName } = useMutation(postDisplayName)
  const { mutate: mutateDescription } = useMutation(postDescription)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const displayNameRef = useRef<HTMLInputElement>(null)
  const [avatarError, setAvatarError] = useState<boolean>(false)
  const [successAvatar, setSuccessAvatar] = useState<boolean>(false)
  const [displayNameError, setDisplayNameError] = useState<boolean>(false)
  const [successDisplayName, setSuccessDisplayName] = useState<
    boolean | string
  >(false)
  const [successDescription, setSuccessDescription] = useState<boolean>(false)
  const [postImg, setPostImg] = useState<File | null>(null)
  const avatarFunc = (e: React.FormEvent) => {
    avatarExecute({
      e,
      auth,
      storage,
      postImg,
      mutateAvatar,
      setSuccessAvatar,
      setAvatarError,
    })
  }
  const handleChangeDisplayName = (e: React.FormEvent) => {
    displayNameExecute({
      e,
      auth,
      mutateDisplayName,
      displayNameRef,
      setSuccessDisplayName,
      setDisplayNameError,
    })
  }
  const descriptionFunc = (e: React.FormEvent) => {
    descriptionExecute({
      e,
      auth,
      descriptionRef,
      mutateDescription,
      setSuccessDescription,
    })
  }

  return (
    <OuterPage>
      <>
        <BackButton navigate={navigate} />
        <Title title="Edit Profile" />
        <AvatarPersonalInfo
          AvatarState={postImg}
          setAvatarState={setPostImg}
          title="Profile picture:"
        />
        <SubmitButton func={avatarFunc}>Change image</SubmitButton>
        {successAvatar && <SuccessText text="Done!" />}
        {avatarError && (
          <ErrorText text="No files uploaded. Upload profile picture" />
        )}
        <InputDiv
          icon={
            <MdLockOutline
              className="text-zinc-400 w-[25px] text-center"
              size="20px"
            />
          }
          valueRef={displayNameRef}
          title="Display name"
          type="text"
          name="DisplayName"
        />
        <SubmitButton func={handleChangeDisplayName}>
          Change your name
        </SubmitButton>
        {successDisplayName && (
          <SuccessText text={`Done! Nick changed to ${successDisplayName}`} />
        )}
        {displayNameError && <ErrorText text="Name error" />}
        <TextArea valueRef={descriptionRef} />
        <SubmitButton func={descriptionFunc}>Change description</SubmitButton>
        {successDescription && <SuccessText text="Done!" />}
      </>
    </OuterPage>
  )
}

export { EditProfile }
