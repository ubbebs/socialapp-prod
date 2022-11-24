/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { AuthCheck } from './AuthRoute.utils'
import { stateStore } from './stateStore'
import { Loader } from './components/loader/Loader'

function AuthRoute(props: { children: JSX.Element }): JSX.Element {
  const { children } = props
  const auth = getAuth()
  const navigate = useNavigate()
  const [userid, setUserid] = useState<string>('')

  useEffect(() => {
    AuthCheck(setUserid, navigate, auth)
  }, [auth, AuthCheck])

  stateStore.userid = userid

  if (!userid) return <Loader />

  return children
}

export { AuthRoute }
