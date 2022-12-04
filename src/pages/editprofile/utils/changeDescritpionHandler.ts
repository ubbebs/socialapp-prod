import { UseMutateFunction } from '@tanstack/react-query'

type UpdateDescriptionType = {
  description: string | null
  uid: string
}

type ChangeDescriptionHandlerType = {
  description: string | null
  userid: string
  mutateDescription: UseMutateFunction<
    void,
    unknown,
    UpdateDescriptionType,
    unknown
  >
  setSuccessDescription: React.Dispatch<React.SetStateAction<boolean>>
}

const changeDescriptionHandler = async (args: ChangeDescriptionHandlerType) => {
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

export { changeDescriptionHandler }
