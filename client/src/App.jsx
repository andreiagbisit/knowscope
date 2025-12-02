import { Route, Routes, useLocation, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'
import PageNotFound from './components/student/PageNotFound'
import PageNotFoundEducator from './components/educator/PageNotFoundEducator'
import 'quill/dist/quill.snow.css'
import { ToastContainer } from 'react-toastify'
import { useUser } from '@clerk/clerk-react'
import EducatorGate from './components/educator/EducatorGate'
import ProtectedRoute from './components/student/ProtectedRoute'
import Educator from './pages/educator/Educator'

const App = () => {
  
  const isEducatorRoute = useMatch('/educator/*')
  const { isSignedIn } = useUser()
  const location = useLocation()
  const hideNavbar = (!isSignedIn && location.pathname === '/my-enrollments')
  
  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer />
      {!isEducatorRoute && !hideNavbar && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        
        <Route path='/my-enrollments' element={
          <ProtectedRoute redirectUrl='/my-enrollments'>
            <MyEnrollments />
          </ProtectedRoute>
        } />
        
        <Route path='/educator' element={<Educator />}>
          <Route path='/educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='students-enrolled' element={<StudentsEnrolled />} />
          <Route path='*' element={<PageNotFoundEducator />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App