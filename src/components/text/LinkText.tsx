import { Link } from 'react-router-dom'

type LinkTextType = {
  url: string
  text: string
}

const LinkText = (args: LinkTextType) => {
  const { url, text } = args
  return (
    <p className="text-sm text-center">
      <Link to={url}>{text}</Link>
    </p>
  )
}

export { LinkText }
