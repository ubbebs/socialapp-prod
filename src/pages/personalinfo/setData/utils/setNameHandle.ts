import { updateProfile, User } from 'firebase/auth'
import { NavigateFunction } from 'react-router-dom'

const setNameHandle = (
  user: User,
  name: string,
  navigate: NavigateFunction
) => {
  updateProfile(user, {
    displayName: name,
  })
    .then()
    .catch((error) => {
      console.log(error)
    })
}

export { setNameHandle }
