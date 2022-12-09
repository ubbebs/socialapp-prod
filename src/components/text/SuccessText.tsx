type SuccessTextType = {
  text: string | boolean
}

const SuccessText = (args: SuccessTextType) => {
  const { text } = args
  return <p className="text-xs text-center p-1 text-green-500">{text}</p>
}

export { SuccessText }
