import { getStorage } from 'firebase/storage'
import { useEffect, useRef, useState } from 'react'
import { useSnapshot } from 'valtio'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { stateStore } from '../../../../stateStore'
import { useGetPersonalInfo } from '../../utils/getPersonalInfo'
import { useGetPosts } from '../../utils/getPosts'
import { postAddPost } from './utils/postAddPost'
import { addPostExecute } from './utils/addPostExecute'
import { ImageAddPost } from './components/ImageAddPost'
import { ErrorText } from '../../../../components/text/ErrorText'
import { TextArea } from '../../../../components/text/TextArea'
import { SubmitButton } from '../../../../components/buttons/SubmitButton'
import { UserHeader } from '../../../../components/userHeader/UserHeader'

const AddPost = () => {
  const storage = getStorage()
  const { userid } = useSnapshot(stateStore)
  const [postImg, setPostImg] = useState<File | null>(null)
  const [errorImg, setErrorImg] = useState<boolean>(false)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const [successMutation, setSuccessMutation] = useState<boolean>(false)
  const navigate = useNavigate()
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
      setErrorImg,
      setSuccessMutation,
    })
  }

  useEffect(() => {
    if (successMutation) {
      refetchPosts()
      navigate('/myprofile')
    }
  }, [navigate, refetchPosts, successMutation])

  return !isLoadingPersonalInfo ? (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 xl:flex-row">
      <ImageAddPost ImageState={postImg} setImageState={setPostImg} />
      <div className="w-[400px] flex flex-col bg-white xl:w-[300px] xl:h-[500px] p-4 rounded-3xl gap-3">
        <UserHeader
          photoURL={dataPersonalInfo.photoURL}
          displayName={dataPersonalInfo.displayName}
        />
        <TextArea valueRef={descriptionRef} />
        <SubmitButton func={addPostFunc}>Add Post</SubmitButton>
        {errorImg ? <ErrorText text="No image selected" /> : null}
      </div>
    </div>
  ) : (
    <p>Loading posts...</p>
  )
}

export { AddPost }
