type HeaderTextType = {
  text: string
}

export const HeaderText = ({ text }: HeaderTextType) => {
  return <h1 className="font-bold text-center text-2xl">{text}</h1>
}
