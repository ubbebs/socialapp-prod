type SignupValidateType = {
  email: HTMLInputElement | null
  password: HTMLInputElement | null
  passwordConfirm: HTMLInputElement | null
}

const signupValidate = (args: SignupValidateType) => {
  const { email, password, passwordConfirm } = args
  return (
    email &&
    password &&
    passwordConfirm &&
    password.value === passwordConfirm.value &&
    password.value.length > 5
  )
}

export { signupValidate }
