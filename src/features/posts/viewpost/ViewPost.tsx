import moment from 'moment'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPost } from '../../../services/getPost'
import { useGetUserData } from '../../../services/getUserData'
import { SmallLoader } from '../../../components/loaders/SmallLoader'
import { AuthorHeader } from './components/AuthorHeader'
import { stateStore } from '../../../stateStore'
import { ButtonRemovePost } from '../myposts/components/ButtonRemovePost'

const ViewPost = () => {
  const { authorid, key } = useParams()
  const navigate = useNavigate()
  const {
    remove,
    refetch: refetchPost,
    data: dataPost,
    isLoading: isLoadingPost,
  } = useGetPost(authorid || '', key || '')
  const { data: dataUserData, isLoading: isLoadingUserData } = useGetUserData(
    authorid || ''
  )

  useEffect(() => {
    return remove
  }, [remove])

  return dataPost && !isLoadingPost && !isLoadingUserData ? (
    <>
      <div className="w-full h-full flex flex-col items-center rounded-t-3xl lg:rounded-3xl">
        <div className="w-full flex flex-col xl:flex-row items-center xl:items-start rounded-lg">
          <div
            className="w-[300px] h-[300px] mt-5 xl:mt-0 flex-shrink bg-no-repeat bg-center bg-contain xl:w-[500px] xl:h-[500px] rounded-3xl border"
            style={{
              backgroundImage: `url('${dataPost.imageURL}')`,
            }}
          />
          <div className="flex flex-col grow p-5 gap-3">
            <div className="flex flex-row gap-3">
              <AuthorHeader
                data={{
                  photoURL: dataUserData.photoURL,
                  displayName: dataUserData.displayName,
                  authorid: dataUserData.uid,
                  timestamp: dataPost.timestamp,
                }}
              />
              {stateStore.userid === dataPost.authorid && (
                <ButtonRemovePost
                  timestamp={dataPost.timestamp}
                  navigate={navigate}
                  refetch={refetchPost}
                />
              )}
            </div>
            <p>{dataPost.description}</p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <SmallLoader />
  )
}

export { ViewPost }
