import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthRoute } from './AuthRoute'
import { HomePage } from './pages/homepage/HomePage'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'
import { EditName } from './pages/editname/EditName'
import { EditAvatar } from './pages/editavatar/EditAvatar'
import { PersonalInfo } from './pages/personalinfo/PersonalInfo'
import { Main } from './pages/homepage/main/Main'
import { AddPost } from './pages/homepage/addpost/AddPost'
import { MyProfile } from './pages/myprofile/MyProfile'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <HomePage subpage={<Main />} />
              </AuthRoute>
            }
          />
          <Route
            path="/addpost"
            element={
              <AuthRoute>
                <HomePage subpage={<AddPost />} />
              </AuthRoute>
            }
          />
          <Route
            path="/myprofile"
            element={
              <AuthRoute>
                <HomePage subpage={<MyProfile />} />
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
    </QueryClientProvider>
  )
}

export { App }
