type SubmitButtonType = {
  func: (e: React.FormEvent) => void
  children: string
}

const SubmitButton = (args: SubmitButtonType) => {
  const { func, children } = args
  return (
    <button
      className="rounded-full gradient-linear text-white hover:tracking-[1px] duration-300 text-sm font-bold p-2 px-5"
      type="submit"
      onClick={(e) => func(e)}
    >
      {children}
    </button>
  )
}

export { SubmitButton }
