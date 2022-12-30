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

export const signupExecute = ({
  e,
  auth,
  emailRef,
  passwordRef,
  passwordConfirmRef,
  navigate,
  setState,
}: SignupExecuteType) => {
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
      .catch(() => {
        setState('Email already in use or invalid')
      })
  } else {
    setState('Password is too short or are not the same')
  }
}
