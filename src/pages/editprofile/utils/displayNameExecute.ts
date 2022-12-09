import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import { changeDisplayName } from './changeDisplayName'
import { PostDisplayNameType } from './postDisplayName'
import { validateDisplayName } from '../../../utils/validateDisplayName'

type DisplayNameExecuteType = {
  e: React.FormEvent
  auth: Auth
  mutateDisplayName: UseMutateFunction<
    void,
    unknown,
    PostDisplayNameType,
    unknown
  >
  displayNameRef: React.RefObject<HTMLInputElement>
  setSuccessDisplayName: React.Dispatch<React.SetStateAction<string | boolean>>
  setDisplayNameError: React.Dispatch<React.SetStateAction<boolean>>
}

const displayNameExecute = (args: DisplayNameExecuteType) => {
  const {
    e,
    auth,
    mutateDisplayName,
    displayNameRef,
    setSuccessDisplayName,
    setDisplayNameError,
  } = args
  e.preventDefault()
  if (
    auth?.currentUser &&
    validateDisplayName({
      displayNameRef,
    })
  ) {
    setDisplayNameError(false)
    changeDisplayName({
      displayName: displayNameRef.current?.value || '',
      userid: auth.currentUser?.uid || '',
      mutateDisplayName,
      setSuccessDisplayName,
    })
  } else {
    setSuccessDisplayName(false)
    setDisplayNameError(true)
  }
}

export { displayNameExecute }
