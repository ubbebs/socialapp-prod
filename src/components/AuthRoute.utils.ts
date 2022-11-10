import { Auth, onAuthStateChanged } from 'firebase/auth'

const AuthCheck = (
  setState: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: (arg: string) => void,
  auth: Auth
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setState(false)
    } else {
      console.log('unauthorized')
      navigate('/signin')
    }
  })
}

export { AuthCheck }
