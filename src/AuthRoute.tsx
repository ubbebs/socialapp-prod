/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { AuthCheck } from './AuthRoute.utils'

function AuthRoute(props: { children: JSX.Element }): JSX.Element {
  const { children } = props
  const auth = getAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    AuthCheck(setLoading, navigate, auth)
  }, [auth, AuthCheck])

  if (loading) return <p>Loading...</p>

  return children
}

export { AuthRoute }
