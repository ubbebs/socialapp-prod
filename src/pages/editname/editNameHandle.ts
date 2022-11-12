import { updateProfile, User } from 'firebase/auth'
import { NavigateFunction } from 'react-router-dom'

const editNameHandle = (
  user: User,
  name: string,
  navigate: NavigateFunction
) => {
  updateProfile(user, {
    displayName: name,
  })
    .then(() => {
      navigate('/editavatar')
    })
    .catch((error) => {
      console.log(error)
    })
}

export { editNameHandle }
