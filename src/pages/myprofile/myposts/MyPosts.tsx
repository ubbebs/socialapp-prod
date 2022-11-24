import { stateStore } from '../../../stateStore'
import { useGetPosts } from '../../homepage/utils/getPosts'

const MyPosts = () => {
  const { data: dataPosts, isLoading: isLoadingPosts } = useGetPosts(
    stateStore.userid || ''
  )

  return !isLoadingPosts ? (
    <>
      {Object.values(dataPosts).map((elem: any, index) => {
        return (
          <div key={index}>
            <p>{elem.description}</p>
            <img src={elem.imageURL} alt="siema" className="w-[100px]" />
          </div>
        )
      })}
    </>
  ) : (
    <p>Loading</p>
  )
}

export { MyPosts }
