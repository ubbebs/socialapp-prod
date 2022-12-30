type ValidateAccountName = {
  accountNameRef: React.RefObject<HTMLInputElement> | null
}

export const validateAccountName = ({
  accountNameRef,
}: ValidateAccountName) => {
  return (
    accountNameRef?.current && /^\w{4,16}$/g.test(accountNameRef.current.value)
  )
}
