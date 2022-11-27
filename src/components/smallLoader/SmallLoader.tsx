import { Oval } from 'react-loader-spinner'

const SmallLoader = () => {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center gradient-shadow">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={0}
        strokeWidthSecondary={3}
        color="white"
      />
    </div>
  )
}

export { SmallLoader }
