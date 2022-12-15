type HeaderTextType = {
  text: string
}

const HeaderText = (args: HeaderTextType) => {
  const { text } = args
  return <h1 className="font-bold text-center text-2xl">{text}</h1>
}

export { HeaderText }
