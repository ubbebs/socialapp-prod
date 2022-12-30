import { UseMutateFunction } from '@tanstack/react-query'
import { SuccessMutationType } from '../../../pages/editprofile/EditProfile.utils'

export type MutateDescriptionType = {
  description: string | null
  uid: string
}

type ChangeDescriptionType = {
  description: string | null
  userid: string
  mutateDescription: UseMutateFunction<
    void,
    unknown,
    MutateDescriptionType,
    unknown
  >
  setSuccessMutation: React.Dispatch<React.SetStateAction<SuccessMutationType>>
}

export const changeDescription = async ({
  userid,
  description,
  mutateDescription,
  setSuccessMutation,
}: ChangeDescriptionType) => {
  mutateDescription(
    {
      description,
      uid: userid,
    },
    {
      onSuccess: () => {
        setSuccessMutation((prev) => ({
          ...prev,
          okDescription: true,
          errorDescription: '',
        }))
      },
    }
  )
}
