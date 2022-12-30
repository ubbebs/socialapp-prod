import { Link } from 'react-router-dom'
import { useGetMyData } from '../../../services/getMyData'
import { background } from '../../../utils/background'
import { Stats } from './components/stats/Stats'
import { NavLinks } from './components/navlinks/NavLinks'

type SidebarType = {
  hidden: boolean
  func: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar = ({ hidden, func }: SidebarType) => {
  const { data: dataMyData } = useGetMyData('')

  return dataMyData ? (
    <div
      className={`${
        hidden ? 'left-0 opacity-100' : 'left-[100%] opacity-0'
      } flex flex-col min-h-screen bg-white lg:bg-inherit lg:min-h-0 w-full items-center gap-10 fixed mt-[100px] lg:m-0 z-10 duration-500 lg:duration-[0ms] lg:left-0 lg:opacity-100 lg:relative`}
    >
      <Link
        to="/myprofile"
        className="flex flex-col items-center gap-1"
        onClick={() => func(false)}
      >
        <div
          className="w-[160px] lg:w-[100px] h-[160px] lg:h-[100px] mb-5 bg-no-repeat bg-center bg-cover rounded-full gradient-border relative avatar"
          style={background(dataMyData.photoURL)}
        />
        <p className="text-xl">{dataMyData.displayName}</p>
        <p className="text-sm text-zinc-500">@{dataMyData.accountName}</p>
      </Link>
      <Stats />
      <NavLinks func={func} />
    </div>
  ) : null
}
