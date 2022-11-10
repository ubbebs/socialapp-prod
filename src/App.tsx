import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { config } from '../config'
import { AuthRoute } from './components/AuthRoute'
import { HomePage } from './pages/homepage/HomePage'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'
import { EditProfile } from './pages/editprofile/EditProfile'
import { EditAvatar } from './pages/editavatar/EditAvatar'

initializeApp(config.firebaseConfig)

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
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/editavatar" element={<EditAvatar />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
