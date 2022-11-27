import moment from 'moment'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { divStyle } from '../../pages/homepage/components/userinfo/utils/divstyle'
import { useGetPost } from '../../pages/homepage/utils/getPost'
import { useGetUserData } from '../../pages/homepage/utils/getUserData'
import { stateStore } from '../../stateStore'
import { SmallLoader } from '../smallLoader/SmallLoader'

type ViewPostType = {
  trigger: boolean | string
  setTrigger: React.Dispatch<React.SetStateAction<boolean | string>>
}

const ViewPost = (props: ViewPostType) => {
  const { trigger, setTrigger } = props
  const { data: dataPost, isLoading: isLoadingPost } = useGetPost(
    stateStore.userid || '',
    trigger
  )

  const { data: dataUserData, isLoading: isLoadingUserData } =
    useGetUserData('')

  return trigger &&
    dataPost &&
    trigger === dataPost.timestamp &&
    !isLoadingPost &&
    !isLoadingUserData ? (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center rounded-t-3xl p-3 bg-zinc-100 lg:p-10 lg:rounded-3xl">
        <button
          onClick={() => setTrigger(false)}
          type="button"
          className="w-[300px] lg:w-auto flex justify-start items-center p-2"
        >
          <AiOutlineArrowLeft size={13} />
          <p>Back</p>
        </button>
        <div className="w-[300px] lg:w-full bg-zinc-100 lg:bg-white flex flex-col xl:flex-row items-center xl:items-start rounded-lg">
          <div
            className="w-[300px] h-[300px] mt-5 xl:mt-0 flex-shrink rounded-lg bg-no-repeat bg-center bg-contain xl:w-[500px] xl:h-[500px]"
            style={{
              backgroundImage: `url('${dataPost.imageURL}')`,
            }}
          />
          <div className="w-full grow xl:w-auto py-5 lg:p-5">
            <div className="w-full flex items-center gap-4 mb-2">
              <div
                className="w-[50px] lg:w-[50px] h-[50px] lg:h-[50px] bg-no-repeat bg-center bg-cover rounded-full"
                style={divStyle(dataPost.imageURL ?? '')}
              />
              <p className="font-semibold text-xl">
                {dataUserData.displayName}
              </p>
            </div>
            <p>{dataPost.description}</p>
            <p className="text-xs">
              Added:{' '}
              {moment.unix(dataPost.timestamp / 1000).format('DD/MM/YYYY')}
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
