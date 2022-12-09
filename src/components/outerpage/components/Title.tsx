type TitleType = {
  title: string
}

const Title = (args: TitleType) => {
  const { title } = args
  return <h1 className="font-bold text-center text-2xl">{title}</h1>
}

export { Title }
