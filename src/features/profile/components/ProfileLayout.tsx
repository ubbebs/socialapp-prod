import { background } from '../../../utils/background'

type ProfileLayoutType = {
  data: {
    photoURL: string
    displayName: string
    accountName: string
    description: string | null
  }
  stats: JSX.Element
}

const ProfileLayout = (args: ProfileLayoutType) => {
  const { data, stats } = args
  return (
    <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:items-start my-3">
      <div
        className="w-[150px] h-[150px] flex-shrink rounded-full bg-no-repeat bg-center bg-cover"
        style={background(data.photoURL)}
      />
      <div className="grow flex h-full flex-col gap-3 items-center sm:items-start">
        <p className="font-semibold text-xl">{data.displayName}</p>
        <p className="font-normal text-sm">@{data.accountName}</p>
        <p>{data.description}</p>
        {stats}
      </div>
    </div>
  )
}

export { ProfileLayout }
