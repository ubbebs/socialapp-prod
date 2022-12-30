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

export const ProfileLayout = ({
  data: { photoURL, displayName, accountName, description },
  stats,
}: ProfileLayoutType) => {
  return (
    <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:items-start my-3">
      <div
        className="w-[150px] h-[150px] flex-shrink rounded-full bg-no-repeat bg-center bg-cover"
        style={background(photoURL)}
      />
      <div className="grow flex h-full flex-col gap-3 items-center sm:items-start">
        <p className="font-semibold text-xl">{displayName}</p>
        <p className="font-normal text-sm">@{accountName}</p>
        <p>{description}</p>
        {stats}
      </div>
    </div>
  )
}
