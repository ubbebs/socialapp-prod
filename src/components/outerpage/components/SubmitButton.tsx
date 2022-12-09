type SubmitButtonType = {
  func: (e: React.FormEvent) => void
  value: string
}

const SubmitButton = (args: SubmitButtonType) => {
  const { func, value } = args
  return (
    <button
      className="rounded-full gradient-linear text-white hover:tracking-[1px] w-full duration-300 text-sm font-bold p-2 uppercase mb-5"
      type="submit"
      onClick={(e) => func(e)}
    >
      {value}
    </button>
  )
}

export { SubmitButton }
