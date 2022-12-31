import { MdNavigateNext } from 'react-icons/md'
import { Link } from 'react-router-dom'
import mainLogo from '../../../assets/logo.png'

type HeaderType = {
  func: () => void
  stateFunc: React.Dispatch<React.SetStateAction<boolean>>
  hidden: boolean
}

export const Header = ({ func, stateFunc, hidden }: HeaderType) => {
  return (
    <div className="fixed lg:relative z-10 flex w-full bg-white lg:bg-inherit h-[100px] lg:pl-[30px] justify-center lg:justify-start items-center">
      <Link to="/" onClick={() => stateFunc(false)}>
        <img src={mainLogo} alt="Logo" className="w-[100px]" />
      </Link>
      <button
        className={`flex justify-center items-center absolute h-[30px] w-[30px] duration-500 bg-zinc-500 rounded-full right-0 mr-[30px] lg:hidden text-white font-bold ${
          hidden ? 'rotate-0' : '-rotate-180'
        }`}
        type="button"
        onClick={func}
      >
        <MdNavigateNext size={20} />
      </button>
    </div>
  )
}
