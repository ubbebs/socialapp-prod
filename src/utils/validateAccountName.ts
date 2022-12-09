type ValidateAccountName = {
  accountNameRef: React.RefObject<HTMLInputElement> | null
}

const validateAccountName = (args: ValidateAccountName) => {
  const { accountNameRef } = args
  return (
    accountNameRef?.current && /^\w{4,16}$/g.test(accountNameRef.current.value)
  )
}

export { validateAccountName }
