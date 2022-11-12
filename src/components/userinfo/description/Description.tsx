type DescriptionType = {
  name: string | undefined
  description: string | undefined
}

const Description = (props: DescriptionType) => {
  const { name, description } = props
  return (
    <div className="w-full px-6 text-sm">
      <p className="font-semibold">{name}</p>
      <p className="font-normal">{description}</p>
    </div>
  )
}

export { Description }
