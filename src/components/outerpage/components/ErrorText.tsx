type ErrorTextType = {
  text: string | boolean
}

const ErrorText = (args: ErrorTextType) => {
  const { text } = args
  return <p className="text-xs text-center p-1 text-red-500">{text}</p>
}

export { ErrorText }
