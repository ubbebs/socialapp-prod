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
  const displayName = validateDisplayName({
    displayNameRef,
  })
  const accountName = validateAccountName({
    accountNameRef,
  })
  return {
    ok: auth?.currentUser && postImg && displayName && accountName,
    errorImg: !postImg,
    errorDisplayName: !displayName,
    errorAccountName: !accountName,
  }
}

export { validatePersonalInfo }
