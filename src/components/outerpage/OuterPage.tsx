type OuterPageType = {
  children: JSX.Element
  title: string
}

const OuterPage = (args: OuterPageType) => {
  const { children, title } = args
  return (
    <div className="w-screen min-h-screen flex justify-center items-center gradient-cross">
      <div className="w-full md:w-[400px] h-full md:min-h-[600px] bg-white box-border p-8 flex flex-col justify-between md:rounded-xl">
        <div className="flex flex-col gap-5 p-5 items-center">
          <h1 className="font-bold text-center text-2xl">{title}</h1>
          {children}
        </div>
        <p className="text-center">strusiub</p>
      </div>
    </div>
  )
}

export { OuterPage }
