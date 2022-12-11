import { UseMutateFunction } from '@tanstack/react-query'
import { SuccessMutationType } from './successEditProfileUtils'

export type MutateDisplayNameType = {
  displayName: string
  uid: string
}

type ChangeDisplayNameType = {
  displayName: string
  userid: string
  mutateDisplayName: UseMutateFunction<
    void,
    unknown,
    MutateDisplayNameType,
    unknown
  >
  setSuccessMutation: React.Dispatch<React.SetStateAction<SuccessMutationType>>
}

const changeDisplayName = async (args: ChangeDisplayNameType) => {
  const { userid, displayName, mutateDisplayName, setSuccessMutation } = args
  mutateDisplayName(
    {
      displayName,
      uid: userid,
    },
    {
      onSuccess: () => {
        setSuccessMutation((prev) => ({
          ...prev,
          okDisplayName: true,
        }))
      },
    }
  )
}

export { changeDisplayName }
