import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { MdLockOutline } from 'react-icons/md'
import { stateStore } from '../../stateStore'
import { app } from '../../../config'
import { useGetMyData } from '../../services/getMyData'
import { Loader } from '../../components/loaders/Loader'
import { postSetProfile } from '../../features/profile/setprofile/postSetProfile'
import { executeSetProfile } from '../../features/profile/setprofile/executeSetProfile'
import { SubmitButton } from '../../components/buttons/SubmitButton'
import { TextArea } from '../../components/text/TextArea'
import { InputDiv } from '../../components/inputs/InputDiv'
import { OuterPage } from '../../layouts/outerpagewrapper/OuterPageWrapper'
import { ProfileAvatarImage } from '../../features/profile/components/ProfileAvatarImage'
import { HeaderText } from '../../components/text/HeaderText'
import { ErrorText } from '../../components/text/ErrorText'
import { defaultErrors, ErrorsType } from './SetProfile.utils'

function PersonalInfo() {
  const auth = getAuth(app)
  const navigate = useNavigate()
  const storage = getStorage()
  const { mutate } = useMutation(postSetProfile)
  const accountNameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const displayNameRef = useRef<HTMLInputElement>(null)
  const [postImg, setPostImg] = useState<File | null>(null)
  const [errors, setErrors] = useState<ErrorsType>(defaultErrors)
  const { data: dataMyData, isLoading: isLoadingMyData } = useGetMyData(
    stateStore.userid || ''
  )
  const personalInfoFunc = (e: React.FormEvent) => {
    executeSetProfile({
      e,
      auth,
      storage,
      postImg,
      accountNameRef,
      displayNameRef,
      descriptionRef,
      mutate,
      navigate,
      setErrors,
    })
  }

  useEffect(() => {
    if (!isLoadingMyData && dataMyData.accountName) navigate('/')
  }, [dataMyData, isLoadingMyData, navigate])

  return !isLoadingMyData ? (
    <OuterPage>
      <>
        <HeaderText text="Set your profile" />
        <ProfileAvatarImage
          AvatarState={postImg}
          setAvatarState={setPostImg}
          title="Profile picture:"
        />
        {errors.errorImage && (
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
        {errors.errorDisplayName && (
          <ErrorText text="Invalid display name (4-24 chars)" />
        )}
        <InputDiv
          icon={
            <MdLockOutline
              className="text-zinc-400 w-[25px] text-center"
              size="20px"
            />
          }
          valueRef={accountNameRef}
          title="Account name"
          type="text"
          name="AccountName"
        />
        {errors.errorAccountName && (
          <ErrorText text="Invalid account name (4-16 chars, no spaces)" />
        )}
        <TextArea valueRef={descriptionRef} />
        <SubmitButton func={personalInfoFunc} value="Confirm" />
      </>
    </OuterPage>
  ) : (
    <Loader />
  )
}

export { PersonalInfo }
