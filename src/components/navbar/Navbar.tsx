import { getAuth, signOut } from 'firebase/auth'
import { useEffect } from 'react'
import mainLogo from '../../assets/logo.png'

const Navbar = () => {
  const auth = getAuth()
  const user = auth.currentUser
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
      user?.photoURL
        ? user.photoURL
        : 'https://firebasestorage.googleapis.com/v0/b/socialapp-c3f3f.appspot.com/o/avatar%2Fdefault.png?alt=media'
    })`,
  }

  return (
    <div className="flex flex-col min-h-screen items-center pt-[20px] gap-[30px]">
      <img src={mainLogo} alt="Logo" className="w-[100px]" />
      <div className="flex flex-col items-center gap-2">
        <div
          className="w-[150px] h-[150px] bg-no-repeat bg-center bg-cover rounded-full"
          style={divStyle}
        />
        <p className="font-semibold text-xl">{user?.displayName}</p>
      </div>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export { Navbar }
