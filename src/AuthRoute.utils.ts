import { Auth, onAuthStateChanged } from 'firebase/auth'

const AuthCheck = (
  setState: React.Dispatch<React.SetStateAction<string>>,
  navigate: (arg: string) => void,
  auth: Auth
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setState(user.uid)
    } else {
      navigate('/signin')
    }
  })
}

export { AuthCheck }
