import { UseMutateFunction } from '@tanstack/react-query'

type UpdateDisplayNameType = {
  displayName: string
  uid: string
}

type ChangeDisplayNameHandlerType = {
  displayName: string
  userid: string
  mutateDisplayName: UseMutateFunction<
    void,
    unknown,
    UpdateDisplayNameType,
    unknown
  >
  setSuccessDisplayName: React.Dispatch<React.SetStateAction<boolean | string>>
}

const changeDisplayNameHandler = async (args: ChangeDisplayNameHandlerType) => {
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

export { changeDisplayNameHandler }
