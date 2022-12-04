import moment from 'moment'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { SmallLoader } from '../../../../../../../components/smallLoader/SmallLoader'
import { stateStore } from '../../../../../../../stateStore'
import { useGetPersonalInfo } from '../../../../../utils/getPersonalInfo'
import { useGetPost } from '../../../../../utils/getPost'

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
  const { data: dataPersonalInfo, isLoading: isLoadingPersonalInfo } =
    useGetPersonalInfo('')

  return trigger &&
    dataPost &&
    trigger === dataPost.timestamp &&
    !isLoadingPost &&
    !isLoadingPersonalInfo ? (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center rounded-t-3xl p-3 bg-zinc-100 lg:p-10 lg:rounded-3xl">
        <button
          onClick={() => setTrigger(false)}
          type="button"
          className="w-full flex justify-start items-center p-2"
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
                style={{
                  backgroundImage: `url('${dataPersonalInfo.photoURL}')`,
                }}
              />
              <p className="font-semibold text-xl">
                {dataPersonalInfo.displayName}
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
