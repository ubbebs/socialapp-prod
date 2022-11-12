import { Oval } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="absolute z-50 w-screen h-screen flex items-center justify-center gradient-cross">
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

export { Loader }
