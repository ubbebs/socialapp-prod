import { Auth } from 'firebase/auth'
import { validateAccountName } from '../../../utils/validateAccountName'
import { validateDisplayName } from '../../../utils/validateDisplayName'

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
    postImg &&
    validateDisplayName({
      displayNameRef,
    }) &&
    validateAccountName({
      accountNameRef,
    })
  )
}

export { validatePersonalInfo }
