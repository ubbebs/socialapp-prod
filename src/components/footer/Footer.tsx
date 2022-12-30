import github from '../../assets/github.png'

export const Footer = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <p className="text-sm font-semibold">ubbebs</p>
      <img src={github} alt="github logo" className="h-[25px]" />
    </div>
  )
}
