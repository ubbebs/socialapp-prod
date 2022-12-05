import { Link } from 'react-router-dom'

type LinkToType = {
  url: string
  value: string
}

const LinkTo = (args: LinkToType) => {
  const { url, value } = args
  return (
    <p className="text-sm text-center">
      <Link to={url}>{value}</Link>
    </p>
  )
}

export { LinkTo }
