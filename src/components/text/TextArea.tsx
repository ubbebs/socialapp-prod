type TextAreaType = {
  valueRef: React.RefObject<HTMLTextAreaElement>
}

export const TextArea = ({ valueRef }: TextAreaType) => {
  return (
    <>
      <label className="pl-1 text-xs">Description</label>
      <textarea
        className="focus:outline-none w-full h-auto bg-red break-words resize-none p-4 rounded-lg bg-zinc-100"
        maxLength={200}
        ref={valueRef}
      />
    </>
  )
}
