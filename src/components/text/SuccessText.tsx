type SuccessTextType = {
  text: string | boolean
}

export const SuccessText = ({ text }: SuccessTextType) => {
  return <p className="text-xs text-center p-1 text-green-500">{text}</p>
}
