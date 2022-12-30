import { Link } from 'react-router-dom'

type LinkTextType = {
  url: string
  text: string
}

export const LinkText = ({ url, text }: LinkTextType) => {
  return (
    <p className="text-sm text-center">
      <Link to={url}>{text}</Link>
    </p>
  )
}
