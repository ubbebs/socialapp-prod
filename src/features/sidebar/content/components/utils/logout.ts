import { getAuth, signOut } from 'firebase/auth'
import { stateStore } from '../../../../../stateStore'

export const logout = () => {
  signOut(getAuth()).then(() => {
    stateStore.userid = null
  })
}
