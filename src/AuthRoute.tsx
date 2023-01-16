/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { AuthCheck } from './AuthRoute.utils'
import { stateStore } from './stateStore'
import { Loader } from './components/loaders/Loader'
import { app } from '../config'

export function AuthRoute(props: { children: JSX.Element }): JSX.Element {
  const { children } = props
  const auth = getAuth(app)
  const navigate = useNavigate()
  const [userid, setUserid] = useState<string>('')

  useEffect(() => {
    AuthCheck(setUserid, navigate, auth)
  }, [])

  stateStore.userid = userid

  if (!userid) return <Loader />

  return children
}
