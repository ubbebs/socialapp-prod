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

export const signinExecute = ({
  e,
  auth,
  emailRef,
  passwordRef,
  navigate,
  setState,
}: SigninExecuteType) => {
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
      .catch(() => {
        setState(true)
      })
  }
}
