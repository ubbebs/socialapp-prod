const nameValidate = (name: string | undefined, original: string) => {
  if (name === undefined || name.length === 0) return original
  return name
}

const descValidate = (desc: string | undefined, original: string) => {
  if (!desc || desc.length === 0) return original
  return desc
}

const validate = (
  name: string | undefined,
  desc: string | undefined,
  originalName: string,
  originalDescription: string
) => {
  return {
    name: nameValidate(name, originalName),
    desc: descValidate(desc, originalDescription),
  }
}

export { validate }
