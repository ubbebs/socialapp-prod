import moment from 'moment'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPost } from '../../../services/getPost'
import { useGetUserData } from '../../../services/getUserData'
import { SmallLoader } from '../../../components/loaders/SmallLoader'
import { AuthorHeader } from '../viewpost/components/AuthorHeader'
import { useGetMyData } from '../../../services/getMyData'
import { useGetMyPosts } from '../../../services/getMyPosts'
import { stateStore } from '../../../stateStore'

const ViewPost = () => {
  const {
    remove,
    data: dataMyPosts,
    isLoading: isLoadingMyPosts,
  } = useGetMyPosts(stateStore.userid || '')
  const { data: dataMyData, isLoading: isLoadingMyData } = useGetMyData(
    stateStore.userid || ''
  )

  useEffect(() => {
    return remove
  }, [remove])

  return dataMyPosts && !isLoadingMyPosts && !isLoadingMyData ? (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center rounded-t-3xl p-3 lg:p-10 lg:rounded-3xl">
        <div className="w-[300px] lg:w-full flex flex-col xl:flex-row items-center xl:items-start rounded-lg">
          <div
            className="w-[300px] h-[300px] mt-5 xl:mt-0 flex-shrink rounded-lg bg-no-repeat bg-center bg-contain xl:w-[500px] xl:h-[500px]"
            style={{
              backgroundImage: `url('${dataMyPosts.imageURL}')`,
            }}
          />
          <div className="w-full grow xl:w-auto py-5 lg:p-5">
            <AuthorHeader
              data={{
                photoURL: dataMyData.photoURL,
                displayName: dataMyData.displayName,
                authorid: dataMyData.uid,
              }}
            />
            <p>{dataMyPosts.description}</p>
            <p className="text-xs">
              Added:{' '}
              {moment.unix(dataMyPosts.timestamp / 1000).format('DD/MM/YYYY')}
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <SmallLoader />
  )
}

export { ViewPost }
