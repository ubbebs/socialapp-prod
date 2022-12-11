import { UseMutateFunction } from '@tanstack/react-query'
import { Auth } from 'firebase/auth'
import { changeDisplayName } from './changeDisplayName'
import { PostDisplayNameType } from './postDisplayName'
import { validateDisplayName } from '../../../utils/validateDisplayName'
import { SuccessMutationType } from './successEditProfileUtils'

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
  setSuccessMutation: React.Dispatch<React.SetStateAction<SuccessMutationType>>
}

const displayNameExecute = (args: DisplayNameExecuteType) => {
  const { e, auth, mutateDisplayName, displayNameRef, setSuccessMutation } =
    args
  e.preventDefault()
  if (
    auth?.currentUser &&
    validateDisplayName({
      displayNameRef,
    })
  ) {
    setSuccessMutation((prev) => ({
      ...prev,
      errorDisplayName: '',
    }))
    changeDisplayName({
      displayName: displayNameRef.current?.value || '',
      userid: auth.currentUser?.uid || '',
      mutateDisplayName,
      setSuccessMutation,
    })
  } else {
    setSuccessMutation((prev) => ({
      ...prev,
      okDisplayName: false,
      errorDisplayName: 'Incorrect display name',
    }))
  }
}

export { displayNameExecute }
