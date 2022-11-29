import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthRoute } from './AuthRoute'
import { HomePage } from './pages/homepage/HomePage'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'
import { Main } from './pages/homepage/components/main/Main'
import { AddPost } from './pages/homepage/components/addpost/AddPost'
import { MyProfile } from './pages/myprofile/MyProfile'
import { RefetchPosts } from './pages/refetch/RefetchPosts'
import { Explore } from './pages/homepage/components/explore/Explore'
import { FirstData } from './pages/personalinfo/setData/FirstData'

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
            path="/explore"
            element={
              <AuthRoute>
                <HomePage subpage={<Explore />} />
              </AuthRoute>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/firstdata"
            element={
              <AuthRoute>
                <FirstData />
              </AuthRoute>
            }
          />
          <Route
            path="/refetchPost"
            element={
              <AuthRoute>
                <RefetchPosts />
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
