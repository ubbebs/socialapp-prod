import { Auth } from 'firebase/auth'
import { validateAccountName } from '../../account/utils/validateAccountName'
import { validateDisplayName } from '../../account/utils/validateDisplayName'

type ValidateSetProfile = {
  auth: Auth | null
  postImg: File | null
  accountNameRef: React.RefObject<HTMLInputElement> | null
  displayNameRef: React.RefObject<HTMLInputElement> | null
}

export const validateSetProfile = ({
  auth,
  postImg,
  accountNameRef,
  displayNameRef,
}: ValidateSetProfile) => {
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
