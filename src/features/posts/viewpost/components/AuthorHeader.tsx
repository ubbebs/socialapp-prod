import { background } from '../../../../utils/background'

type AuthorHeaderType = {
  photoURL: string
  displayName: string
}

const AuthorHeader = (args: AuthorHeaderType) => {
  const { photoURL, displayName } = args
  return (
    <div className="w-full flex items-center gap-4">
      <div
        className="w-[50px] lg:w-[50px] h-[50px] lg:h-[50px] bg-no-repeat bg-center bg-cover rounded-full"
        style={background(photoURL)}
      />
      <p className="font-semibold text-xl">{displayName}</p>
    </div>
  )
}

export { AuthorHeader }
