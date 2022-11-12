import { getAuth, signOut } from 'firebase/auth'

const logout = (e: React.FormEvent) => {
  e.preventDefault()
  signOut(getAuth())
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error)
    })
}

export { logout }
