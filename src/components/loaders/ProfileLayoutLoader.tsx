export const ProfileLayoutLoader = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:items-start my-3">
      <div className="w-[150px] h-[150px] flex-shrink rounded-full bg-zinc-200" />
      <div className="grow flex h-full flex-col gap-3 items-center sm:items-start">
        <div className="h-[20px] w-[200px] bg-zinc-200" />
        <div className="h-[12px] w-[125px] bg-zinc-200" />
      </div>
    </div>
  )
}
