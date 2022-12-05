import { Auth, createUserWithEmailAndPassword } from 'firebase/auth'
import { NavigateFunction } from 'react-router-dom'
import { signupValidate } from './signupValidate'

type SignupExecuteType = {
  e: React.FormEvent
  auth: Auth
  emailRef: React.RefObject<HTMLInputElement>
  passwordRef: React.RefObject<HTMLInputElement>
  passwordConfirmRef: React.RefObject<HTMLInputElement>
  navigate: NavigateFunction
  setState: React.Dispatch<React.SetStateAction<string | boolean>>
}

const signupExecute = (args: SignupExecuteType) => {
  const {
    e,
    auth,
    emailRef,
    passwordRef,
    passwordConfirmRef,
    navigate,
    setState,
  } = args

  e.preventDefault()
  if (
    signupValidate({
      email: emailRef.current,
      password: passwordRef.current,
      passwordConfirm: passwordConfirmRef.current,
    })
  ) {
    createUserWithEmailAndPassword(
      auth,
      emailRef.current?.value || '',
      passwordRef.current?.value || ''
    )
      .then(() => {
        navigate('/personalinfo')
      })
      .catch((error) => {
        setState('Email already in use')
      })
  } else {
    setState("Wrong user's data")
  }
}

export { signupExecute }
