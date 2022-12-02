import { Link } from 'react-router-dom'
import { divStyle } from './utils/divstyle'
import { NavLinks } from './navlinks/NavLinks'
import { Stats } from './stats/Stats'
import { Description } from './description/Description'
import { useGetPersonalInfo } from '../../utils/getPersonalInfo'

type SidebarType = {
  hidden: boolean
  func: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = (props: SidebarType) => {
  const { hidden, func } = props
  const { data: dataPersonalInfo } = useGetPersonalInfo('')

  return (
    <div
      className={`${
        hidden ? 'left-0 opacity-100' : 'left-[100%] opacity-0'
      } flex flex-col min-h-screen lg:min-h-0 w-full items-center gap-[30px] fixed mt-[100px] lg:m-0 bg-white z-10 duration-500 lg:duration-[0ms] lg:left-0 lg:opacity-100 lg:relative`}
    >
      <div className="flex flex-col items-center gap-2 w-full">
        <Link
          to="/myprofile"
          className="flex flex-col items-center gap-2"
          onClick={() => func(false)}
        >
          <div className="w-[154px] lg:w-[106px] h-[154px] lg:h-[106px] gradient-cross flex items-center justify-center rounded-full">
            <div
              className="w-[150px] lg:w-[100px] h-[150px] lg:h-[100px] bg-no-repeat bg-center bg-cover rounded-full gradient-border"
              style={divStyle(dataPersonalInfo.photoURL)}
            />
          </div>
          <p className="font-semibold text-xl">
            {dataPersonalInfo.displayName}
          </p>
        </Link>
        <p className="font-normal text-sm">@{dataPersonalInfo.accountName}</p>
        <Stats />
      </div>
      {dataPersonalInfo ? (
        <Description
          name={dataPersonalInfo.displayName}
          description={dataPersonalInfo.description}
        />
      ) : null}
      <NavLinks func={func} />
    </div>
  )
}

export { Sidebar }
