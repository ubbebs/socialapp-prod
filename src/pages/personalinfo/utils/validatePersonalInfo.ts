const nameValidate = (
  name: string | undefined,
  original: string | undefined
) => {
  if (name === undefined || name.length === 0) return original
  return name
}

const descValidate = (
  desc: string | undefined,
  original: string | undefined
) => {
  if (!desc || desc.length === 0) return original
  return desc
}

const validatePersonalInfo = (
  name: string | undefined,
  desc: string | undefined,
  originalName: string | undefined,
  originalDescription: string | undefined
) => {
  return {
    validatedName: nameValidate(name, originalName),
    validatedDesc: descValidate(desc, originalDescription),
  }
}

export { validatePersonalInfo }
