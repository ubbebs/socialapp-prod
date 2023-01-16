import { useMutation } from '@tanstack/react-query'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { useRef, useState } from 'react'
import { MdLockOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { ProfileAvatarImage } from '../../features/profile/components/ProfileAvatarImage'
import { BackButton } from '../../components/buttons/BackButton'
import { InputDiv } from '../../components/inputs/InputDiv'
import { TextArea } from '../../components/text/TextArea'
import { HeaderText } from '../../components/text/HeaderText'
import { OuterPage } from '../../layouts/outerpagewrapper/OuterPageWrapper'
import { ErrorText } from '../../components/text/ErrorText'
import { SuccessText } from '../../components/text/SuccessText'
import { SubmitButton } from '../../components/buttons/SubmitButton'
import { executeAvatar } from '../../features/profile/editprofile/executeAvatar'
import { executeDescription } from '../../features/profile/editprofile/executeDescription'
import { executeDisplayName } from '../../features/profile/editprofile/executeDisplayName'
import { postAvatar } from '../../features/profile/editprofile/postAvatar'
import { postDescription } from '../../features/profile/editprofile/postDescription'
import { postDisplayName } from '../../features/profile/editprofile/postDisplayName'
import {
  defaultSuccessMutation,
  SuccessMutationType,
} from './EditProfile.utils'

export const EditProfile = () => {
  const auth = getAuth()
  const storage = getStorage()
  const navigate = useNavigate()
  const { mutate: mutateAvatar } = useMutation(postAvatar)
  const { mutate: mutateDisplayName } = useMutation(postDisplayName)
  const { mutate: mutateDescription } = useMutation(postDescription)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const displayNameRef = useRef<HTMLInputElement>(null)
  const [successMutation, setSuccessMutation] = useState<SuccessMutationType>(
    defaultSuccessMutation
  )
  const [postImg, setPostImg] = useState<File | null>(null)
  const avatarFunc = (e: React.FormEvent) => {
    executeAvatar({
      e,
      auth,
      storage,
      postImg,
      mutateAvatar,
      setSuccessMutation,
    })
  }
  const handleChangeDisplayName = (e: React.FormEvent) => {
    executeDisplayName({
      e,
      auth,
      mutateDisplayName,
      displayNameRef,
      setSuccessMutation,
    })
  }
  const descriptionFunc = (e: React.FormEvent) => {
    executeDescription({
      e,
      auth,
      descriptionRef,
      mutateDescription,
      setSuccessMutation,
    })
  }

  return (
    <OuterPage>
      <>
        <BackButton />
        <HeaderText text="Edit Profile" />
        <ProfileAvatarImage
          AvatarState={postImg}
          setAvatarState={setPostImg}
          title="Profile picture:"
        />
        <SubmitButton func={avatarFunc} value="Change image" />
        {successMutation.okAvatar && <SuccessText text="Done!" />}
        {successMutation.errorAvatar.length > 0 && (
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
        <SubmitButton func={handleChangeDisplayName} value="Change your name" />
        {successMutation.okDisplayName && (
          <SuccessText
            text={`Done! Nick changed to ${successMutation.displayNameValue}`}
          />
        )}
        {successMutation.errorDisplayName.length > 0 && (
          <ErrorText text="Name error" />
        )}
        <TextArea valueRef={descriptionRef} />
        <SubmitButton func={descriptionFunc} value="Change description" />
        {successMutation.okDescription && <SuccessText text="Done!" />}
      </>
    </OuterPage>
  )
}
