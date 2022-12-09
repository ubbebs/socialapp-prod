import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthRoute } from './AuthRoute'
import { HomePage } from './pages/homepage/HomePage'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'
import { Main } from './pages/homepage/subpages/main/Main'
import { AddPost } from './pages/homepage/components/addpost/AddPost'
import { MyProfile } from './pages/homepage/subpages/myprofile/MyProfile'
import { Explore } from './pages/homepage/subpages/explore/Explore'
import { PersonalInfo } from './pages/personalinfo/PersonalInfo'
import { ViewPost } from './components/viewpost/ViewPost'
import { EditProfile } from './pages/editprofile/EditProfile'

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
          <Route
            path="/post/:key"
            element={
              <AuthRoute>
                <HomePage subpage={<ViewPost />} />
              </AuthRoute>
            }
          />
          <Route
            path="/editprofile"
            element={
              <AuthRoute>
                <EditProfile />
              </AuthRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <AuthRoute>
                <HomePage subpage={<Explore />} />
              </AuthRoute>
            }
          />
          <Route path="/signin" element={<Signin />} />
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
