import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import mainLogo from '../../assets/logo.png'
import { Loader } from '../loader/Loader'

const Navbar = () => {
  const [userData, setUserData] = useState<any>(null)
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user)
      }
    })
  }, [auth])
  const logout = (e: React.FormEvent) => {
    e.preventDefault()
    signOut(getAuth())
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  }
  const divStyle = {
    backgroundImage: `url(${
      userData?.photoURL
        ? userData.photoURL
        : 'https://firebasestorage.googleapis.com/v0/b/socialapp-c3f3f.appspot.com/o/avatar%2Fdefault.png?alt=media'
    })`,
  }

  return !userData ? (
    <Loader />
  ) : (
    <div className="flex flex-col min-h-screen items-center pt-[20px] gap-[30px]">
      <img src={mainLogo} alt="Logo" className="w-[100px]" />
      <div className="flex flex-col items-center gap-2">
        <div
          className="w-[150px] h-[150px] bg-no-repeat bg-center bg-cover rounded-full"
          style={divStyle}
        />
        <p className="font-semibold text-xl">{userData?.displayName}</p>
      </div>
      <Link to="/personalinfo">Edit profile</Link>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export { Navbar }
