type ValidateDisplayName = {
  displayNameRef: React.RefObject<HTMLInputElement> | null
}

export const validateDisplayName = ({
  displayNameRef,
}: ValidateDisplayName) => {
  return (
    displayNameRef?.current &&
    /^(\w\s?){4,24}$/g.test(displayNameRef.current.value)
  )
}
