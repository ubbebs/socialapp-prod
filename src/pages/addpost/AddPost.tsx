import { getStorage } from 'firebase/storage'
import { useRef, useState } from 'react'
import { useSnapshot } from 'valtio'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { stateStore } from '../../stateStore'
import { useGetMyData } from '../../services/getMyData'
import { postAddPost } from '../../features/posts/addpost/utils/postAddPost'
import {
  executeAddPost,
  SuccessMutationType,
} from '../../features/posts/addpost/utils/executeAddPost'
import { AddPostImage } from '../../features/posts/addpost/components/AddPostImage'
import { ErrorText } from '../../components/text/ErrorText'
import { TextArea } from '../../components/text/TextArea'
import { SubmitButton } from '../../components/buttons/SubmitButton'
import { AuthorHeader } from '../../components/posts/components/AuthorHeader'

export const AddPost = () => {
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
  const { data: dataMyData, isLoading: isLoadingMyData } = useGetMyData('')
  const addPostFunc = (e: React.FormEvent) => {
    executeAddPost({
      e,
      userid,
      postImg,
      storage,
      mutate,
      descriptionRef,
      setSuccessMutation,
    })
  }

  if (successMutation.ok) {
    navigate('/myprofile')
  }

  if (isLoadingMyData) return <p>Loading posts...</p>

  return dataMyData ? (
    <div className="flex w-full h-full flex-col gap-10 xl:gap-0 xl:flex-row items-center justify-center">
      <AddPostImage ImageState={postImg} setImageState={setPostImg} />
      <div className="w-full lg:max-w-[400px] flex flex-col bg-white xl:w-[300px] xl:h-[500px] p-4 rounded-3xl gap-3">
        <AuthorHeader
          data={{
            photoURL: dataMyData.photoURL,
            displayName: dataMyData.displayName,
            authorid: userid || '',
            timestamp: null,
          }}
        />
        <TextArea valueRef={descriptionRef} />
        <SubmitButton func={addPostFunc} value="Add Post" />
        {successMutation.error.length > 0 ? (
          <ErrorText text="No image selected" />
        ) : null}
      </div>
    </div>
  ) : (
    <p>No data</p>
  )
}
