type SignupValidateType = {
  email: HTMLInputElement | null
  password: HTMLInputElement | null
  passwordConfirm: HTMLInputElement | null
}

export const signupValidate = ({
  email,
  password,
  passwordConfirm,
}: SignupValidateType) => {
  return (
    email &&
    password &&
    passwordConfirm &&
    password.value === passwordConfirm.value &&
    password.value.length > 5
  )
}
