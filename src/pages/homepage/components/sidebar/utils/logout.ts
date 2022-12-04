import { getAuth, signOut } from 'firebase/auth'
import { stateStore } from '../../../../../stateStore'

const logout = () => {
  signOut(getAuth())
    .then(() => {
      stateStore.userid = null
    })
    .catch((error) => {
      console.log(error)
    })
}

export { logout }
