import { UseMutateFunction } from '@tanstack/react-query'

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
  setSuccessDisplayName: React.Dispatch<React.SetStateAction<boolean | string>>
}

const changeDisplayName = async (args: ChangeDisplayNameType) => {
  const { userid, displayName, mutateDisplayName, setSuccessDisplayName } = args
  mutateDisplayName(
    {
      displayName,
      uid: userid,
    },
    {
      onSuccess: () => {
        setSuccessDisplayName(displayName)
      },
    }
  )
}

export { changeDisplayName }
