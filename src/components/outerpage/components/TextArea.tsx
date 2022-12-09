type TextAreaType = {
  valueRef: React.RefObject<HTMLTextAreaElement>
}

const TextArea = (args: TextAreaType) => {
  const { valueRef } = args
  return (
    <>
      <label className="pl-1 text-xs mt-4" htmlFor="Password">
        Description
      </label>
      <textarea
        className="focus:outline-none w-full h-auto bg-red break-words resize-none p-4 rounded-lg bg-zinc-100"
        maxLength={200}
        ref={valueRef}
      />
    </>
  )
}

export default TextArea
