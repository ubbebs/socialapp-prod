import { UseMutateFunction } from '@tanstack/react-query'
import { SuccessMutationType } from '../../../pages/editprofile/EditProfile.utils'

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

export const changeDisplayName = async ({
  userid,
  displayName,
  mutateDisplayName,
  setSuccessMutation,
}: ChangeDisplayNameType) => {
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
