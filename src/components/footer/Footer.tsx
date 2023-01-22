import github from '../../assets/github.png'

export const Footer = () => {
  return (
    <a target="_blank" href="https://github.com/ubbebs/" rel="noreferrer">
      <div className="flex gap-2 items-center justify-center">
        <p className="text-sm font-semibold">ubbebs</p>
        <img src={github} alt="github logo" className="h-[25px]" />
      </div>
    </a>
  )
}
