import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { app } from '../config'
import { AuthRoute } from './components/AuthRoute'
import { HomePage } from './pages/homepage/HomePage'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'
import { EditName } from './pages/editname/EditName'
import { EditAvatar } from './pages/editavatar/EditAvatar'
import { PersonalInfo } from './pages/personalinfo/PersonalInfo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/editprofile"
          element={
            <AuthRoute>
              <EditName />
            </AuthRoute>
          }
        />
        <Route
          path="/editavatar"
          element={
            <AuthRoute>
              <EditAvatar />
            </AuthRoute>
          }
        />
        <Route
          path="/personalinfo"
          element={
            <AuthRoute>
              <PersonalInfo />
            </AuthRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
