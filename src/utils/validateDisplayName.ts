type ValidateDisplayName = {
  displayNameRef: React.RefObject<HTMLInputElement> | null
}

const validateDisplayName = (args: ValidateDisplayName) => {
  const { displayNameRef } = args
  return (
    displayNameRef?.current &&
    /^(\w\s?){4,24}$/g.test(displayNameRef.current.value)
  )
}

export { validateDisplayName }
