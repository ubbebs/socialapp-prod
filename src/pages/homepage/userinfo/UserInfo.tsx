import { useSnapshot } from 'valtio'
import { Link } from 'react-router-dom'
import { Loader } from '../../../components/loader/Loader'
import { divStyle } from './utils/divstyle'
import { NavLinks } from './navlinks/NavLinks'
import { Stats } from './stats/Stats'
import { Description } from './description/Description'
import { stateStore } from '../../../stateStore'

type UserInfoType = {
  hidden: boolean
}

const UserInfo = (props: UserInfoType) => {
  const state = useSnapshot(stateStore)
  const { hidden } = props

  return stateStore.userData && stateStore.personalInfo ? (
    <div
      className={`${
        hidden ? 'left-0 opacity-100' : 'left-[100%] opacity-0'
      } flex flex-col min-h-screen lg:min-h-0 w-full items-center gap-[30px] fixed mt-[100px] lg:m-0 bg-white z-10 duration-500 lg:duration-[0ms] lg:left-0 lg:opacity-100 lg:relative`}
    >
      <div className="flex flex-col items-center gap-2 w-full">
        <Link to="/myprofile" className="flex flex-col items-center gap-2">
          <div
            className="w-[150px] lg:w-[90px] h-[150px] lg:h-[90px] bg-no-repeat bg-center bg-cover rounded-full"
            style={divStyle(state.userData?.photoURL || '')}
          />
          <p className="font-semibold text-xl">
            {state.personalInfo ? state.personalInfo.name : null}
          </p>
        </Link>
        <p className="font-normal text-sm">
          @{state.userData?.displayName || ''}
        </p>
        {/* <Stats posts={state.posts} /> */}
      </div>
      {state.personalInfo ? (
        <Description
          name={state.personalInfo.name}
          description={state.personalInfo.description}
        />
      ) : null}
      <NavLinks />
    </div>
  ) : (
    <Loader />
  )
}

export { UserInfo }
