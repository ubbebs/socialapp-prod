import { UseMutateFunction } from '@tanstack/react-query'

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
  setSuccessDescription: React.Dispatch<React.SetStateAction<boolean>>
}

const changeDescription = async (args: ChangeDescriptionType) => {
  const { userid, description, mutateDescription, setSuccessDescription } = args
  mutateDescription(
    {
      description,
      uid: userid,
    },
    {
      onSuccess: () => {
        setSuccessDescription(true)
      },
    }
  )
}

export { changeDescription }
