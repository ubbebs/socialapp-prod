import { Link } from 'react-router-dom'
import mainLogo from '../../../../assets/logo.png'

type HeaderType = {
  func: () => void
  stateFunc: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = (props: HeaderType) => {
  const { func, stateFunc } = props
  return (
    <div className="fixed lg:relative z-10 flex w-full bg-zinc-100 h-[100px] lg:pl-[30px] justify-center lg:justify-start items-center">
      <Link to="/" onClick={() => stateFunc(false)}>
        <img src={mainLogo} alt="Logo" className="w-[100px]" />
      </Link>
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
