import { divStyle } from '../../utils/divstyle'

type UserHeaderType = {
  photoURL: string
  displayName: string
}

const UserHeader = (args: UserHeaderType) => {
  const { photoURL, displayName } = args
  return (
    <div className="w-full flex items-center gap-4">
      <div
        className="w-[50px] lg:w-[50px] h-[50px] lg:h-[50px] bg-no-repeat bg-center bg-cover rounded-full"
        style={divStyle(photoURL ?? '')}
      />
      <p className="font-semibold text-xl">{displayName}</p>
    </div>
  )
}

export { UserHeader }
