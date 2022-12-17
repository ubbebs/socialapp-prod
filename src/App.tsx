import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthRoute } from './AuthRoute'
import { HomePageData } from './layouts/homepagewrapper/HomePageData'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'
import { HomePage } from './pages/homepage/HomePage'
import { MyProfile } from './pages/myprofile/MyProfile'
import { Explore } from './pages/explore/Explore'
import { PersonalInfo } from './pages/setprofile/SetProfile'
import { ViewPost } from './pages/viewpost/ViewPost'
import { EditProfile } from './pages/editprofile/EditProfile'
import { AddPost } from './pages/addpost/AddPost'
import { UserProfile } from './pages/userprofile/UserProfile'

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
                <HomePageData subpage={<HomePage />} />
              </AuthRoute>
            }
          />
          <Route
            path="/addpost"
            element={
              <AuthRoute>
                <HomePageData subpage={<AddPost />} />
              </AuthRoute>
            }
          />
          <Route
            path="/myprofile"
            element={
              <AuthRoute>
                <HomePageData subpage={<MyProfile />} />
              </AuthRoute>
            }
          />
          <Route
            path="/post/:authorid/:key"
            element={
              <AuthRoute>
                <HomePageData subpage={<ViewPost />} />
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
                <HomePageData subpage={<Explore />} />
              </AuthRoute>
            }
          />
          <Route
            path="/profile/:uid"
            element={
              <AuthRoute>
                <HomePageData subpage={<UserProfile />} />
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
