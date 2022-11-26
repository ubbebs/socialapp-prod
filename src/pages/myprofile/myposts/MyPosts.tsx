import moment from 'moment'
import { stateStore } from '../../../stateStore'
import { useGetPosts } from '../../homepage/utils/getPosts'

const MyPosts = () => {
  const { data: dataPosts, isLoading: isLoadingPosts } = useGetPosts(
    stateStore.userid || ''
  )

  return !isLoadingPosts ? (
    <div className="overflow-auto flex gap-4 flex-col px-3">
      {Object.values(dataPosts).map((elem: any, index) => {
        const backgroundImage = {
          backgroundImage: `url('${elem.imageURL}')`,
        }
        console.log()
        return (
          <div
            key={index}
            className="h-[150px] w-full bg-zinc-100 lg:bg-white flex rounded-lg"
          >
            <div
              className="w-[130px] h-[130px] m-[10px] flex-shrink rounded-lg bg-no-repeat bg-center bg-cover"
              style={backgroundImage}
            />
            <div className="p-3 flex-grow">
              <p>{elem.description}</p>
              <p>{moment.unix(elem.timestamp / 1000).format('DD/MM/YYYY')}</p>
            </div>
          </div>
        )
      })}
    </div>
  ) : (
    <p>Loading</p>
  )
}

export { MyPosts }
