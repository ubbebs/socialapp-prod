import { Auth } from 'firebase/auth'

type ValidatePersonalInfoType = {
  auth: Auth | null
  postImg: File | null
  accountNameRef: React.RefObject<HTMLInputElement> | null
  displayNameRef: React.RefObject<HTMLInputElement> | null
}

const validatePersonalInfo = (args: ValidatePersonalInfoType) => {
  const { auth, postImg, accountNameRef, displayNameRef } = args
  return (
    auth?.currentUser &&
    accountNameRef?.current &&
    displayNameRef?.current &&
    /^\w{4,16}$/g.test(accountNameRef.current.value) &&
    /^(\w\s?){4,24}$/g.test(displayNameRef.current.value) &&
    postImg
  )
}

export { validatePersonalInfo }
