import { Link } from 'react-router-dom'

type ExploreMapResultType = {
  data: {
    accountName: string
    description: string | null
    displayName: string
    photoURL: string
    uid: string
  }[]
}

const ExploreMapResult = (args: ExploreMapResultType) => {
  const { data } = args
  return (
    <>
      {data.map((elem, index) => {
        const backgroundImage = {
          backgroundImage: `url('${elem.photoURL}')`,
        }
        return (
          <Link to={`/profile/${elem.uid}`} key={index}>
            <div className="w-full bg-white flex items-center gap-3 rounded-full">
              <div
                className="w-[50px] h-[50px] m-[5px] flex-shrink rounded-full bg-no-repeat bg-center bg-cover"
                style={backgroundImage}
              />
              <p className="font-semibold">{elem.displayName}</p>
              <p className="font-semibold text-zinc-400">
                (@{elem.accountName})
              </p>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export { ExploreMapResult }
