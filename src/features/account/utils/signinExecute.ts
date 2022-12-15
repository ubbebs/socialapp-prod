import { Auth, signInWithEmailAndPassword } from 'firebase/auth'
import { NavigateFunction } from 'react-router-dom'

type SigninExecuteType = {
  e: React.FormEvent
  auth: Auth
  emailRef: React.RefObject<HTMLInputElement>
  passwordRef: React.RefObject<HTMLInputElement>
  navigate: NavigateFunction
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const signinExecute = (args: SigninExecuteType) => {
  const { e, auth, emailRef, passwordRef, navigate, setState } = args
  e.preventDefault()
  if (emailRef.current?.value && passwordRef.current?.value) {
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        setState(true)
      })
  }
}

export { signinExecute }
