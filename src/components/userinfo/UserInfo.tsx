import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { child, get, getDatabase, ref } from 'firebase/database'
import { Loader } from '../loader/Loader'
import { logout } from './logout'
import { divStyle } from './divstyle'
import { app } from '../../../config'

type UserInfoType = {
  hidden: boolean
}

const UserInfo = (props: UserInfoType) => {
  const [userData, setUserData] = useState<User>()
  const [personalInfo, setPersonalInfo] = useState<any>()
  const [posts, setPosts] = useState<number>()
  const auth = getAuth(app)
  const db = getDatabase()
  const uid = auth.currentUser?.uid
  const { hidden } = props
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user)
      }
    })
    get(child(ref(db), `personalInfo/${uid}`))
      .then((snapshot) => {
        setPersonalInfo(snapshot.val())
      })
      .catch((error) => {
        console.error(error)
      })
    get(child(ref(db), `posts/${uid}`))
      .then((snapshot) => {
        setPosts(snapshot.val() ? snapshot.val().length : 0)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [auth, db, uid])

  console.log('rerender')

  return !userData || !personalInfo || posts === null ? (
    <Loader />
  ) : (
    <div
      className={`${
        hidden ? 'left-0 opacity-100' : 'left-[100%] opacity-0'
      } flex flex-col min-h-screen lg:min-h-0 w-full items-center gap-[30px] fixed  mt-[100px] lg:m-0 bg-white z-10 duration-500 lg:duration-[0ms] lg:left-0 lg:opacity-100 lg:relative`}
    >
      <div className="flex flex-col items-center gap-2 w-full">
        <div
          className="w-[150px] lg:w-[90px] h-[150px] lg:h-[90px] bg-no-repeat bg-center bg-cover rounded-full"
          style={divStyle(userData)}
        />
        <p className="font-semibold text-xl">{personalInfo?.name}</p>
        <p className="font-normal text-sm">@{userData?.displayName}</p>
        <p className="font-normal text-md">{personalInfo?.description}</p>
        <div className="grid grid-cols-3 grid-rows-1 gap-x-[1px] w-full max-w-[300px] ml-2 mr-2 bg-black">
          <p className="font-normal text-center text-md bg-white">
            Posts: {posts}
          </p>
          <p className="font-normal text-center text-md bg-white">
            Posts: {posts}
          </p>
          <p className="font-normal text-center text-md bg-white">
            Posts: {posts}
          </p>
        </div>
      </div>
      <Link to="/personalinfo">Edit profile</Link>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export { UserInfo }
