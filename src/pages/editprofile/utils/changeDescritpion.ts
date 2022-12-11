import { UseMutateFunction } from '@tanstack/react-query'
import { SuccessMutationType } from './successEditProfileUtils'

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

const changeDescription = async (args: ChangeDescriptionType) => {
  const { userid, description, mutateDescription, setSuccessMutation } = args
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

export { changeDescription }
