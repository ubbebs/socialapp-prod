import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPost } from '../../services/getPost'
import { useGetUserData } from '../../services/getUserData'
import { SmallLoader } from '../../components/loaders/SmallLoader'
import { AuthorHeader } from '../../components/posts/components/AuthorHeader'
import { stateStore } from '../../stateStore'
import { ButtonRemovePost } from '../../features/posts/myposts/components/ButtonRemovePost'
import { useGetComments } from '../../services/getComments'
import { PostComment } from '../../features/comment/PostComment'
import { ViewPostComment } from './components/ViewPostComment'

export const ViewPost = () => {
  const { userid } = stateStore
  const { authorid, key } = useParams()
  const navigate = useNavigate()
  const {
    remove: removePost,
    data: dataPost,
    isLoading: isLoadingPost,
  } = useGetPost(authorid || '', key || '')
  const {
    remove: removeComments,
    data: dataComments,
    isLoading: isLoadingComments,
  } = useGetComments(authorid || '', key || '')
  const { data: dataUserData, isLoading: isLoadingUserData } = useGetUserData(
    authorid || ''
  )

  useEffect(() => {
    return () => {
      removePost()
      removeComments()
    }
  }, [removeComments, removePost])

  return dataPost &&
    dataUserData &&
    !isLoadingPost &&
    !isLoadingUserData &&
    !isLoadingComments ? (
    <div className="max-w-[600px] lg:max-w-[1200px] w-full flex flex-col gap-5 px-12 pb-12 lg:p-12">
      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start rounded-lg">
        <div
          className="w-[300px] h-[300px] mt-5 xl:mt-0 flex-shrink-0 bg-no-repeat bg-center bg-contain xl:w-[500px] xl:h-[500px] rounded-3xl border"
          style={{
            backgroundImage: `url('${dataPost.imageURL}')`,
          }}
        />
        <div className="flex flex-col py-5 lg:p-5 gap-3 grow">
          <div className="flex flex-row gap-3">
            <AuthorHeader
              data={{
                photoURL: dataUserData.photoURL,
                displayName: dataUserData.displayName,
                authorid: dataUserData.uid,
                timestamp: dataPost.timestamp,
              }}
            />
            {userid === dataPost.authorid && (
              <ButtonRemovePost
                timestamp={dataPost.timestamp}
                navigate={navigate}
              />
            )}
          </div>
          <p className="break-all">{dataPost.description}</p>
        </div>
      </div>
      <ViewPostComment />
      <div className="flex flex-col gap-2">
        {dataComments &&
          Object.values(dataComments)
            .reverse()
            .map((elem, index) => {
              return <PostComment data={elem} key={index} />
            })}
      </div>
    </div>
  ) : (
    <SmallLoader />
  )
}
