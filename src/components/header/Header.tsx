import mainLogo from '../../assets/logo.png'

type HeaderType = {
  func: () => void
}

const Header = (props: HeaderType) => {
  const { func } = props
  return (
    <div className="flex w-full h-[100px] justify-center items-center">
      <img src={mainLogo} alt="Logo" className="w-[100px]" />
      <button
        className="absolute h-[40px] w-[40px] bg-red-500 right-0 mr-[30px] lg:hidden"
        type="button"
        onClick={func}
      >
        X
      </button>
    </div>
  )
}

export { Header }
