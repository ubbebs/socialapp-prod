import { getStorage } from 'firebase/storage'
import { useEffect, useRef, useState } from 'react'
import { useSnapshot } from 'valtio'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { stateStore } from '../../../../stateStore'
import { useGetPersonalInfo } from '../../utils/getPersonalInfo'
import { useGetPosts } from '../../utils/getPosts'
import { postAddPost } from './utils/postAddPost'
import { addPostExecute, SuccessMutationType } from './utils/addPostExecute'
import { ImageAddPost } from './components/ImageAddPost'
import { ErrorText } from '../../../../components/text/ErrorText'
import { TextArea } from '../../../../components/text/TextArea'
import { SubmitButton } from '../../../../components/buttons/SubmitButton'
import { UserHeader } from '../../../../components/userHeader/UserHeader'

const AddPost = () => {
  const storage = getStorage()
  const navigate = useNavigate()
  const { userid } = useSnapshot(stateStore)
  const [postImg, setPostImg] = useState<File | null>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const [successMutation, setSuccessMutation] = useState<SuccessMutationType>({
    ok: false,
    error: '',
  })
  const { mutate } = useMutation(postAddPost)
  const { data: dataPersonalInfo, isLoading: isLoadingPersonalInfo } =
    useGetPersonalInfo('')
  const { refetch: refetchPosts } = useGetPosts(stateStore.userid || '')
  const addPostFunc = (e: React.FormEvent) => {
    addPostExecute({
      e,
      userid,
      postImg,
      storage,
      mutate,
      descriptionRef,
      setSuccessMutation,
    })
  }

  useEffect(() => {
    if (successMutation.ok) {
      refetchPosts()
      navigate('/myprofile')
    }
  }, [navigate, refetchPosts, successMutation])

  return !isLoadingPersonalInfo ? (
    <div className="flex w-full h-full flex-col lg:flex-row items-center justify-center">
      <ImageAddPost ImageState={postImg} setImageState={setPostImg} />
      <div className="w-full lg:max-w-[400px] flex flex-col bg-white xl:w-[300px] xl:h-[500px] p-4 rounded-3xl gap-3">
        <UserHeader
          photoURL={dataPersonalInfo.photoURL}
          displayName={dataPersonalInfo.displayName}
        />
        <TextArea valueRef={descriptionRef} />
        <SubmitButton func={addPostFunc}>Add Post</SubmitButton>
        {successMutation.error.length > 0 ? (
          <ErrorText text="No image selected" />
        ) : null}
      </div>
    </div>
  ) : (
    <p>Loading posts...</p>
  )
}

export { AddPost }
