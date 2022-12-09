import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { MdLockOutline } from 'react-icons/md'
import { stateStore } from '../../stateStore'
import { app } from '../../../config'
import { useGetPersonalInfo } from '../homepage/utils/getPersonalInfo'
import { Loader } from '../../components/loader/Loader'
import { postPersonalInfo } from './utils/postPersonalInfo'
import { personalInfoExecute } from './utils/personalInfoExecute'
import { SubmitButton } from '../../components/outerpage/components/SubmitButton'
import { TextArea } from '../../components/outerpage/components/TextArea'
import { InputDiv } from '../../components/outerpage/components/InputDiv'
import { OuterPage } from '../../components/outerpage/OuterPage'
import { ErrorText } from '../../components/outerpage/components/ErrorText'
import { AvatarPersonalInfo } from '../../components/outerpage/components/AvatarPersonalInfo'
import { Title } from '../../components/outerpage/components/Title'

function PersonalInfo() {
  const auth = getAuth(app)
  const navigate = useNavigate()
  const storage = getStorage()
  const { mutate } = useMutation(postPersonalInfo)
  const accountNameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const displayNameRef = useRef<HTMLInputElement>(null)
  const [postImg, setPostImg] = useState<File | null>(null)
  const [accountNameError, setAccountNameError] = useState<boolean>(false)
  const [displayNameError, setDisplayNameError] = useState<boolean>(false)
  const [postImgError, setPostImgError] = useState<boolean>(false)
  const { data: dataPersonalInfo, isLoading: isLoadingPersonalInfo } =
    useGetPersonalInfo(stateStore.userid || '')
  const personalInfoFunc = (e: React.FormEvent) => {
    personalInfoExecute({
      e,
      auth,
      storage,
      postImg,
      accountNameRef,
      displayNameRef,
      descriptionRef,
      mutate,
      navigate,
      setAccountNameError,
      setDisplayNameError,
      setPostImgError,
    })
  }

  useEffect(() => {
    if (!isLoadingPersonalInfo && dataPersonalInfo.accountName) navigate('/')
  }, [dataPersonalInfo, isLoadingPersonalInfo, navigate])

  return !isLoadingPersonalInfo ? (
    <OuterPage>
      <>
        <Title title="Set your profile" />
        <AvatarPersonalInfo
          AvatarState={postImg}
          setAvatarState={setPostImg}
          title="Profile picture:"
        />
        {postImgError && (
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
        {displayNameError && (
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
        {accountNameError && (
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
