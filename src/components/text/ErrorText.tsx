type ErrorTextType = {
  text: string | boolean
}

export const ErrorText = ({ text }: ErrorTextType) => {
  return <p className="text-xs text-center p-1 text-red-500">{text}</p>
}
