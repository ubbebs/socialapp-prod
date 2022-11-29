import moment from 'moment'
import { useState } from 'react'
import { ViewPost } from '../../../components/viewpost/ViewPost'
import { stateStore } from '../../../stateStore'
import { useGetPosts } from '../../homepage/utils/getPosts'

const MyPosts = () => {
  const [view, setView] = useState<boolean | string>(false)
  const { data: dataPosts, isLoading: isLoadingPosts } = useGetPosts(
    stateStore.userid || ''
  )

  return !isLoadingPosts ? (
    dataPosts !== '' ? (
      <ul className="overflow-auto flex gap-4 flex-col px-3">
        {Object.values(dataPosts).map((elem: any, index) => {
          const backgroundImage = {
            backgroundImage: `url('${elem.imageURL}')`,
          }
          return (
            <>
              <li
                key={index}
                className="h-[150px] w-full bg-zinc-100 lg:bg-white flex rounded-lg"
                onClick={() => setView(elem.timestamp)}
                onKeyDown={() => setView(elem.timestamp)}
              >
                <div
                  className="w-[130px] h-[130px] m-[10px] flex-shrink rounded-lg bg-no-repeat bg-center bg-cover"
                  style={backgroundImage}
                />
                <div className="p-3 flex-grow">
                  <p>{elem.description}</p>
                  <p>
                    {moment.unix(elem.timestamp / 1000).format('DD/MM/YYYY')}
                  </p>
                </div>
              </li>
              {view ? <ViewPost trigger={view} setTrigger={setView} /> : null}
            </>
          )
        })}
      </ul>
    ) : (
      <p>No posts... yet. Wanna add some post?</p>
    )
  ) : (
    <p>Loading</p>
  )
}

export { MyPosts }
