type FollowButtonType = {
  func: () => void
  text: string
}

export const FollowButton = ({ func, text }: FollowButtonType) => {
  return (
    <button
      type="button"
      className="flex p-2 px-7 bg-zinc-400 rounded-full text-white text-sm font-semibold justify-center items-center gap-1"
      onClick={func}
    >
      {text}
    </button>
  )
}
