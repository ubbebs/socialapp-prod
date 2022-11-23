import { getAuth, signOut } from 'firebase/auth'
import { stateStore } from '../../../../stateStore'

const logout = (e: React.FormEvent) => {
  e.preventDefault()
  signOut(getAuth())
    .then(() => {
      localStorage.clear()
      stateStore.personalInfo = null
      stateStore.userData = null
      stateStore.userid = null
      stateStore.posts = null
    })
    .catch((error) => {
      console.log(error)
    })
}

export { logout }
